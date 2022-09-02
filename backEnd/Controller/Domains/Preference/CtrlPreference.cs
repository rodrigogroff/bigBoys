using Master.Entity.Domain.Preference;
using Master.Entity.Domain.Sale;
using Master.Entity.Infra;
using Master.Service.Domain.Sale;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace Api.Master.Controllers
{
    public partial class CtrlPreference : MasterController
    {
        public CtrlPreference(IOptions<LocalNetwork> _network) : base(_network) { }

        [HttpPost]
        [Route("api/v1/pref/register")]
        public ActionResult pref_register([FromBody] DtoPreferenceRegister obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvPreferenceRegister();

            if (!srv.Register(network.pgConnection, I(u.id), obj.productId))
            {
                return BadRequest(srv.Error);
            }

            return Ok(new
            {
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/pref/pref_list")]
        public ActionResult pref_list()
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();

            var srv = new SrvPreferenceList();

            List<DtoPreferenceItem> list;

            if (!srv.List(network.pgConnection, I(u.id), out list))
                return BadRequest(srv.Error);

            return Ok(new
            {
                items = list                
            });

            #endregion
        }

        [HttpPost]
        [Route("api/v1/pref/pref_remove")]
        public ActionResult pref_remove([FromBody] DtoPreferenceRemove obj)
        {
            #region - code - 

            var u = GetCurrentAuthenticatedUser();
            var srv = new SrvPreferenceRemove();

            if (!srv.Remove(network.pgConnection, I(u.id), obj.productId))
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
