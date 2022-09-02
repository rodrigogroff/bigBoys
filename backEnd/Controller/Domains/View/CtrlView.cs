using Master.Entity.Domain.View;
using Master.Entity.Infra;
using Master.Service.Domain.View;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlView : MasterController
    {
        public CtrlView(IOptions<LocalNetwork> _network) : base(_network) { }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/view/register_anon")]
        public ActionResult view_register_anon([FromBody] DtoViewRegister obj)
        {
            #region - code - 

            var srv = new SrvViewRegister();

            if (!srv.Register(network.pgConnection, 0, obj.productId))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/view/register")]
        public ActionResult view_register([FromBody] DtoViewRegister obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvViewRegister();

            if (!srv.Register(network.pgConnection, I(u.id), obj.productId))
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
