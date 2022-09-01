using Master.Entity.Database;
using Master.Repository;
using System;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool Register (  string conn,
                                long user_id,
                                long product_id,
                                long product_option,
                                string price )
        {
            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid Register Ex01");
            }

            var dt = DateTime.Now;

            var mdl = new UserCartSale
            {
                dtRegister = dt,
                fkUser = usr.id,
                nuSaleId = product_id,
                nuSaleOption = product_option,
                vrPrice = I(price),
            };

            mdl.id = userCartSaleRepo.Insert(conn, mdl);

            if (mdl.id == 0)
            {
                return ReportError("Invalid Register Ex02");
            }

            return true;
        }
    }
}
