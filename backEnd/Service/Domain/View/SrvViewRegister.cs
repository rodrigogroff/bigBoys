using Master.Entity.Database;
using Master.Repository;
using System;

namespace Master.Service.Domain.View
{
    public class SrvViewRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserViewRepo userViewRepo = new UserViewRepo();

        public bool Register(string conn, long user_id, long product_id)
        {
            User usr = null;
                     
            if (user_id > 0)
                if (!userRepo.GetUserById(conn, user_id, out usr))
                {
                    return ReportError("Invalid Register Ex01");
                }

            userViewRepo.Insert(conn, new UserProductView
            {                
                fkUser = usr == null ? 0 : user_id,
                nuSaleId = product_id,
                dtRegister = DateTime.Now,
                nuDay = DateTime.Now.Day,
                nuMonth = DateTime.Now.Month,
                nuYear = DateTime.Now.Year,
            });

            return true;
        }
    }
}
