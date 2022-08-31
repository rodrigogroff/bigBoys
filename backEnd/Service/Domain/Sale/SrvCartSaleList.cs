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

        public bool List ( string conn, long user_id, out List<DtoCartSaleItem> cart )
        {
            cart = new List<DtoCartSaleItem>();

            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
                return false;

            List<UserCartSale> lst;

            if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, out lst))
                return false;

            foreach (var item in lst)
            {
                cart.Add(new DtoCartSaleItem
                {
                    dtRegister = D(item.dtRegister),
                    price = Money(item.vrPrice),
                    productId = (int) item.nuSaleId,
                    productOption  = (int) item.nuSaleOption,
                });
            }

            return true;
        }
    }
}
