using Master.Entity.Domain.Admin;
using Master.Entity.Infra;
using Master.Service.Domain.Admin;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;

namespace Api.Master.Controllers
{
    public partial class CtrlAdmin : MasterController
    {
        public CtrlAdmin(IOptions<LocalNetwork> _network) : base(_network) { }

        [HttpPost]
        [Route("api/v1/admin/stats")]
        public ActionResult admin_stats()
        {
            #region - code - 

            var srv = new SrvAdminStats();

            List<DtoAdminItem> list;

            DateTime dt_now = DateTime.Now;

            srv.ListDay(network.pgConnection, dt_now.Day, dt_now.Month, dt_now.Year, out list);

            return Ok(new
            {
                items = list
            });

            #endregion
        }
    }
}
