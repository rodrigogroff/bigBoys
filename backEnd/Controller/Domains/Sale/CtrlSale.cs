using Master.Entity.Domain.Sale;
using Master.Entity.Infra;
using Master.Infra.Constant;
using Master.Service.Domain.Sale;
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

            var srv = new SrvCartSaleRegister();

            var prod = new CatalogFull().catalog.items.FirstOrDefault(y => y.id == obj.productId);

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
            string total;

            if (!srv.List(network.pgConnection, I(u.id), out lst_cart, out total ))
                return BadRequest(srv.Error);

            return Ok(new
            {
                cart = lst_cart,
                total =  total
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
        public ActionResult sale_register([FromBody] DtoSaleRegister obj)
        {
            #region - code - 

            var srv = new SrvSaleRegister();

            if (!srv.Register(network.pgConnection,
                                obj.cpf,
                                obj.productId,
                                obj.price,
                                obj.gmap))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }
    }
}
