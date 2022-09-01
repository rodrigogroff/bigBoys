using Master.Entity.Database;
using Master.Repository;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleRemove : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool Remove (  string conn,
                                long user_id,
                                long product_id,
                                long cart_id )
        {
            UserCartSale usr_cart;

            if (!userCartSaleRepo.GetCartSaleById(conn, cart_id, out usr_cart))
            {
                return ReportError("Invalid cart Ex01");
            }
            
            if (usr_cart.fkUser != user_id)
            {
                return ReportError("Invalid cart Ex02");
            }

            if (usr_cart.nuSaleId != product_id)
            {
                return ReportError("Invalid cart Ex03");
            }

            if (!userCartSaleRepo.DeleteCartSaleById(conn, cart_id))
            {
                return ReportError("Invalid cart Ex04");
            }

            return true;
        }
    }
}
