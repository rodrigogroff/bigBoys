using Master.Entity.Database;
using Master.Entity.Domain.Admin;
using Master.Infra.Constant;
using Master.Repository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Service.Domain.Admin
{
    public class SrvAdminStats : SrvBaseService
    {
        public IUserCartSaleRepo userCartSaleRepo = new UserCartSaleRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();

        public bool ListDay ( string conn, int day, int month, int year, out List<DtoAdminItem> list )
        {
            list = new List<DtoAdminItem>();

            List<UserSale> list_sales;
            List<UserCartSale> list_cart;

            var dt = new DateTime(year, month, day);

            userCartSaleRepo.GetCartSalesByFkUser(conn, 0, null, dt, out list_cart);
            userSaleRepo.GetSalesByDate(conn, day, month, year, out list_sales);

            var x = list_cart.Select(y => (long)y.fkUser).Distinct();

            list.Add(new DtoAdminItem
            {
                title = "Opened carts",
                content = (list_sales.Count ( y =>  y.nuSaleStage == SaleStage.Open || 
                                                    y.nuSaleStage == SaleStage.Registered ||
                                                    y.nuSaleStage == SaleStage.Confirmed ||
                                                    y.nuSaleStage == SaleStage.PendingPayment) +
                                                    list_cart.Select(y => (long) y.fkUser).Distinct().Count() ).ToString(),
            });

            var lst_sales = list_sales.Where(y => y.nuSaleStage == SaleStage.Open ||
                                                    y.nuSaleStage == SaleStage.Registered ||
                                                    y.nuSaleStage == SaleStage.Confirmed ||
                                                    y.nuSaleStage == SaleStage.PendingPayment).Select(y => y.id).Distinct().ToList();
                        
            list.Add(new DtoAdminItem
            {
                title = "Items in carts",
                content = list_cart.Where ( y=> (y.fkSale != null && lst_sales.Contains( (long) y.fkSale)) || y.fkSale == null ).Count().ToString(),
            });

            /*
            list.Add(new DtoAdminItem
            {
                title = "Total value open",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales registered",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales registered total",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales confirmed",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales confirmed total",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales pending payment",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales pending payment total",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales pending production",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales pending mail",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales delivered",
                content = "",
            });

            list.Add(new DtoAdminItem
            {
                title = "Sales canceled",
                content = "",
            });

            */

            return true;
        }
    }
}
