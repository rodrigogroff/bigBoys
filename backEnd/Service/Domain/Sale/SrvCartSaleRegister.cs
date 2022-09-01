using Master.Entity.Database;
using Master.Repository;
using System;
using System.Collections.Generic;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();
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

            List<UserSale> lst_sale;

            if (!userSaleRepo.GetRegisteredSalesByFkUser(conn, user_id, out lst_sale))
            {
                return ReportError("Invalid Register Ex02");
            }

            if (lst_sale.Count > 0)
            {
                return ReportError("Finalize sua compra antes de criar um novo carrinho");
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
                return ReportError("Invalid Register Ex03");
            }

            return true;
        }
    }
}
