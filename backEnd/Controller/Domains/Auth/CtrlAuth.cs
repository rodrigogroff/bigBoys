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

            if (!srv.Register(  network.pgConnection, 
                                obj.name, 
                                obj.email, 
                                obj.mobile, 
                                obj.gmap,
                                obj.cpf ))
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
        [Route("api/v1/auth/login")]
        public ActionResult auth_login([FromBody] DtoAuthLogin obj)
        {
            #region - code - 

            var srv = new SrvAuthLogin();

            DtoUser usr;

            if (!srv.Login ( network.pgConnection, 
                             obj.email, 
                             obj.cpf, 
                             out usr ))
            {
                return NotFound(new { message = "" });
            }

            var token = ComposeTokenForSession(usr);

            return Ok(new DtoToken
            {
                token = token,
                userName = usr.name.Split (' ')[0],
                mobile = usr.mobile
            });

            #endregion
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/v1/auth/login_admin")]
        public ActionResult auth_login_admin([FromBody] DtoAuthLoginAdmin obj)
        {
            #region - code - 

            var srv = new SrvAuthLoginAdmin();

            DtoUserAdmin usr;

            if (!srv.Login(network.pgConnection,
                             obj.cpf,
                             obj.password,
                             out usr))
            {
                return NotFound(new { message = "CPF ou senha incorretas!" });
            }

            var token = ComposeTokenForAdminSession(usr);

            return Ok(new DtoToken
            {
                token = token,
                userName = usr.name.Split(' ')[0],               
            });

            #endregion
        }
    }
}
