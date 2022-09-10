using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System.Collections.Generic;
using System.Linq;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleCancel : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool Cancel ( string conn, long user_id )
        {
            var list = new List<UserSale>();
            
            if (!userSaleRepo.GetSalesByFkUser(conn, user_id, out list))
            {
                return ReportError("Erro cancel Ex01");
            }

            var obj = list.FirstOrDefault();
            
            obj.nuSaleStage = SaleStage.Canceled;

            if (!userSaleRepo.Update(conn, obj))
            {
                return ReportError("Erro cancel Ex03 ");
            }
            
            List<UserCartSale> list_cart;

            if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, obj.id, null, out list_cart))
                return ReportError("Erro cancel Ex04");

            foreach (var item in list_cart)
                if (!userCartSaleRepo.DeleteCartSaleById(conn, item.id))
                {
                    return ReportError("Erro cancel Ex05 " + item.id );
                }

            return true;
        }
    }
}
