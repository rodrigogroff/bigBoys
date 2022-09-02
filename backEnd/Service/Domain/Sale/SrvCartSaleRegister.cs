using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

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

            if (!userSaleRepo.GetSalesByFkUser(conn, user_id, out lst_sale))
            {
                return ReportError("Invalid Register Ex02");
            }

            lst_sale = lst_sale.Where ( y=> y.nuSaleStage == SaleStage.Registered || 
                                            y.nuSaleStage == SaleStage.Confirmed ).
                                ToList();

            if (lst_sale.Count > 0)
            {
                return ReportError("Finalize sua compra antes de criar um novo carrinho");
            }

            var dt = DateTime.Now;

            var mdl = new UserCartSale
            {
                dtRegister = dt,
                nuDay= dt.Day,
                nuMonth = dt.Month,
                nuYear = dt.Year,
                fkUser = usr.id,
                nuSaleId = product_id,
                nuSaleOption = product_option,
                vrPrice = I(price),      
                fkSale = null,
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
