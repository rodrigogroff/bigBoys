using Master.Entity.Domain.Sale;
using Master.Entity.Infra;
using Master.Infra.Constant;
using Master.Service.Domain.Sale;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace Api.Master.Controllers
{
    public partial class CtrlSale : MasterController
    {
        public CtrlSale(IOptions<LocalNetwork> _network) : base(_network) { }

        [HttpPost]
        [Route("api/v1/sale/cart_add")]
        public ActionResult cart_add([FromBody] DtoCartSaleRegister obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvCartSaleAddToCart();

            var prod = CatalogFull.catalog.items.FirstOrDefault(y => y.id == obj.productId);

            if (prod == null)
                return BadRequest(new DtoServiceError
                {
                    message = "Invalid product Id"
                });

            var price = prod.sculptPrice;

            if (price == null)
                price = SaleOptionPrice.translate(obj.productOption);
            else
                obj.productOption = 0;

            if (!srv.Register(network.pgConnection,
                                I(u.id),
                                obj.productId,
                                obj.productOption,
                                price))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/sale/cart_list")]
        public ActionResult cart_list()
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvCartSaleList();

            List<DtoCartSaleItem> lst_cart;
            string total, gmap;
            long saleStage;

            if (!srv.List(network.pgConnection, I(u.id), out lst_cart, out total, out saleStage, out gmap))
                return BadRequest(srv.Error);

            return Ok(new
            {
                cart = lst_cart,
                total = total,
                saleStage = saleStage,
                gmap = gmap
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/sale/cart_remove")]
        public ActionResult cart_remove([FromBody] DtoCartSaleRemove obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();
            var srv = new SrvCartSaleRemove();

            if (!srv.Remove(network.pgConnection, I(u.id), obj.productId, obj.cartId))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/sale/register")]
        public ActionResult sale_register()
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvSaleRegister();

            if (!srv.Register(network.pgConnection, I(u.id)))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/sale/confirm_sale")]
        public ActionResult confirm_sale([FromBody] DtoCartSaleUpdate obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvSaleUpdateConfirm();

            if (!srv.Update(network.pgConnection, I(u.id), obj.gmap))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/sale/cancel_cart")]
        public ActionResult cancel_cart()
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvCartSaleCancel();

            if (!srv.Cancel(network.pgConnection, I(u.id)))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/sale/sale_detail")]
        public ActionResult sale_detail([FromBody] DtoCartSaleDetail obj)
        {
            #region - code - 

            var srv = new SrvCartSaleDetail();

            var item = new Item();

            if (!srv.Detail(I(obj.sale_id), out item ))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
                detail = item
            });

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/sale/sale_detail_listing")]
        public ActionResult sale_detail_listing([FromBody] DtoCartSaleListing obj)
        {
            #region - code - 

            var srv = new SrvCartSaleListing();

            List<ItemId> list;

            if (!srv.Listing(obj.option, obj.catalog, out list))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
                items = list
            });

            #endregion
        }
    }
}
