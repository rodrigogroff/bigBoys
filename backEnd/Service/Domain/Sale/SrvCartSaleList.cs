using Master.Entity.Database;
using Master.Entity.Domain.Sale;
using Master.Repository;
using System.Collections.Generic;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleList : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool List ( string conn, long user_id, out List<DtoCartSaleItem> cart, out string total )
        {
            cart = new List<DtoCartSaleItem>();
            total = "";
            long _total = 0;

            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid list Ex01");
            }

            List<UserCartSale> lst;

            if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, out lst))
            {
                return ReportError("Invalid list Ex02");
            }

            foreach (var item in lst)
            {
                cart.Add(new DtoCartSaleItem
                {
                    cartId = item.id,
                    dtRegister = D(item.dtRegister),
                    price = Money(item.vrPrice),
                    productId = (int) item.nuSaleId,
                    productOption  = (int) item.nuSaleOption,
                });

                _total += (int) item.vrPrice;
            }

            total = Money(_total);

            return true;
        }
    }
}
