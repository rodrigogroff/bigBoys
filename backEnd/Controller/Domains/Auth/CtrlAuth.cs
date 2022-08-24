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
        [Route("api/v1/auth/register")]
        public ActionResult auth_register([FromBody] DtoAuthRegister obj)
        {
            #region - code - 

            var srv = new SrvAuthRegister();

            if (!srv.Register(network.pgConnection,
                                obj.name,
                                obj.email,
                                obj.mobile,                                
                                network.codeExpirationMinutes))
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

            if (!srv.Login(network.pgConnection,
                            obj.email,
                            obj.mobile,
                            out usr))
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
