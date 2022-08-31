using Master.Entity.Database;
using Master.Infra.Constant;
using Master.Repository;
using System;

namespace Master.Service.Domain.Sale
{
    public class SrvSaleRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserSaleRepo userSaleRepo = new UserSaleRepo();

        public bool Register (  string conn,
                                string cpf,
                                long product_id,
                                long price,
                                string gmap_delivery )
        {
            if (string.IsNullOrEmpty(cpf))
                return ReportError("CPF information failed");

            if (product_id <= 0)
                return ReportError("Product information failed");

            if (price <= 0)
                return ReportError("Price information failed");

            if (string.IsNullOrEmpty(gmap_delivery))
                return ReportError("Location information failed");

            User usr;

            if (!userRepo.GetUserByCPF(conn, cpf, out usr))
                return false;

            var dt = DateTime.Now;

            UserSale mdl = new UserSale
            {
                bActive = true,
                dtMail = null,
                dtProduction = null,
                dtRegister = dt,
                fkUser = usr.id,
                nuDay = dt.Day,
                nuMonth = dt.Month,
                nuYear = dt.Year,
                nuSaleId = product_id,
                nuSaleStage = SaleStage.Registered,
                stGMap = gmap_delivery,
                vrPrice = price
            };

            mdl.id = userSaleRepo.Insert(conn, mdl);

            if (mdl.id == 0)
                return false;

            return true;
        }
    }
}
