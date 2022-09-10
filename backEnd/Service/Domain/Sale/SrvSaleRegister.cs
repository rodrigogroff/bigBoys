using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System.Collections.Generic;
using System.Linq;

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

            List<UserSale> lst_sales;

            userSaleRepo.GetSalesByFkUserAndStage(conn, user_id, SaleStage.Open, out lst_sales);

            if (lst_sales == null)
            {
                return ReportError("Invalid update Ex01");
            }

            if (lst_sales.Count == 0)
            {
                return ReportError("Invalid update Ex02");
            }

            var current_sale = lst_sales.OrderByDescending ( y=> y.dtRegister).FirstOrDefault();

            current_sale.nuSaleStage = SaleStage.Registered;

            userSaleRepo.Update(conn, current_sale);

            return true;
        }
    }
}
