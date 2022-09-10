using Master.Entity.Database;
using Master.Entity.Domain.Sale;
using Master.Infra.Constant;
using Master.Repository;
using System.Collections.Generic;
using System.Linq;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleList : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();

        public bool List (  string conn, 
                            long user_id, 
                            out List<DtoCartSaleItem> cart, 
                            out string total, 
                            out long saleStage, 
                            out string gmap )
        {
            cart = new List<DtoCartSaleItem>();
            total = "";
            gmap = "";
            saleStage = SaleStage.Open;

            long _total = 0;

            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid list Ex01");
            }

            gmap = usr.stGMap;

            List<UserSale> lst_sale;
            
            if (!userSaleRepo.GetSalesByFkUser(conn, user_id, out lst_sale))
            {
                return ReportError("Invalid list Ex02.0");
            }

            lst_sale = lst_sale.Where(y => y.nuSaleStage == SaleStage.Registered ||
                                            y.nuSaleStage == SaleStage.Confirmed).
                                ToList();

            List<UserCartSale> lst_cart;

            if (lst_sale.Count == 0)
            {
                if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, null, null, out lst_cart))
                {
                    return ReportError("Invalid list Ex03");
                }
            }
            else
            {
                var s = lst_sale.FirstOrDefault();

                if (s == null)
                {
                    return ReportError("Invalid list Ex04");
                }
                
                if (!userCartSaleRepo.GetCartSalesByFkUser(conn, user_id, s.id, null, out lst_cart))
                {
                    return ReportError("Invalid list Ex05");
                }

                saleStage = (long) s.nuSaleStage;
                gmap = s.stGMap;
            }

            foreach (var item in lst_cart)
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
