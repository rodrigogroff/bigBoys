using DocumentFormat.OpenXml.Office2010.ExcelAc;
using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Service.Domain.Sale
{
    public class SrvSaleUpdateConfirm : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool Update ( string conn, long user_id, string gmap )
        {
            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid update Ex01");
            }

            List<UserSale> list;

            if (!userSaleRepo.GetSalesByFkUserAndStage(conn, user_id, SaleStage.Registered, out list))
            {
                return ReportError("Invalid update Ex02");
            }

            var obj = list.FirstOrDefault();

            if (obj == null)
            {
                return ReportError("Invalid update Ex03");
            }

            obj.nuSaleStage = SaleStage.Confirmed;
            obj.stGMap = gmap;

            if (!userSaleRepo.Update(conn, obj))
            {
                return ReportError("Invalid update Ex04");
            }

            return true;
        }
    }
}
