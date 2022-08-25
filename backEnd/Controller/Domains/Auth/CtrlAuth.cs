using Master.Entity.Domain;
using Master.Entity.Infra;
using Master.Service.Domain.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Api.Master.Controllers
{
    public partial class CtrlAuth : MasterController
    {
        public CtrlAuth(IOptions<LocalNetwork> _network) : base(_network) { }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/auth/check_mobile")]
        public ActionResult check_mobile([FromBody] DtoAuthCheckMobile obj)
        {
            #region - code - 

            var srv = new SrvAuthCheckMobile();

            DtoAuthUser usr;

            if (!srv.Find(network.pgConnection, obj.mobile, out usr))
                return NotFound();

            return Ok(usr);

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/auth/register")]
        public ActionResult auth_register([FromBody] DtoAuthRegister obj)
        {
            #region - code - 

            var srv = new SrvAuthRegister();

            if (!srv.Register(  network.pgConnection, 
                                obj.name, 
                                obj.email, 
                                obj.mobile, 
                                obj.gmap ))
            {
                return BadRequest(srv.Error);
            }

            return Ok();

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/auth/verify")]
        public ActionResult auth_verify([FromBody] DtoAuthLogin obj)
        {
            #region - code - 

            var srv = new SrvAuthLogin();

            DtoUser usr;

            if (!srv.Login(network.pgConnection,
                             obj.email,
                             obj.mobile,
                             out usr))
            {
                return BadRequest(srv.Error);
            }

            return Ok();

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/auth/login")]
        public ActionResult auth_login([FromBody] DtoAuthLogin obj)
        {
            #region - code - 

            var srv = new SrvAuthLogin();

            DtoUser usr;

            if (!srv.Login ( network.pgConnection, 
                             obj.email, 
                             obj.mobile, 
                             out usr ))
            {
                return BadRequest(srv.Error);
            }

            var token = ComposeTokenForSession(usr);

            return Ok(new DtoToken
            {
                token = token,
            });

            #endregion
        }
    }
}
