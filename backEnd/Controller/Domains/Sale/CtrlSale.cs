using Master.Entity.Domain;
using Master.Entity.Infra;
using Master.Service.Domain.Sale;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlSale : MasterController
    {
        public CtrlSale(IOptions<LocalNetwork> _network) : base(_network) { }
                
        [HttpPost]
        [Route("api/v1/sale/register")]
        public ActionResult sale_register([FromBody] DtoSaleRegister obj)
        {
            #region - code - 

            var srv = new SrvSaleRegister();

            if (!srv.Register ( network.pgConnection, 
                                obj.mobile, 
                                obj.productId, 
                                obj.price, 
                                obj.gmap ))
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
