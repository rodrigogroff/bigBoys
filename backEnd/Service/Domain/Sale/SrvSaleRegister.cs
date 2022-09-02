using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System;
using System.Collections.Generic;

namespace Master.Service.Domain.Sale
{
    public class SrvSaleRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool Register (  string conn, long user_id )
        {
            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid register Ex01");
            }

            DateTime dt = DateTime.Now;

            var mdl = new UserSale
            {
                stGUID = Guid.NewGuid().ToString(),
                bActive = true,
                dtMail = null,
                dtProduction = null,
                dtRegister = dt,
                fkUser = user_id,
                nuDay = dt.Day,
                nuMonth = dt.Month,                
                nuYear = dt.Year,                
                nuSaleStage = SaleStage.Registered,
                stGMap = usr.stGMap,
            };

            mdl.id = userSaleRepo.Insert(conn, mdl);

            if (mdl.id == 0)
                return false;

            List<UserCartSale> lst_cart;

            if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, null, out lst_cart))
            {
                return ReportError("Invalid register Ex02");
            }

            foreach (var item in lst_cart)
            {
                item.fkSale = mdl.id;
                if (!userCartSaleRepo.Update(conn, item))
                {
                    return ReportError("Invalid register Ex03 " + mdl.id);
                }
            }

            return true;
        }
    }
}
