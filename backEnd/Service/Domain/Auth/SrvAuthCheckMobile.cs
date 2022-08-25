using Master.Entity.Database;
using Master.Entity.Domain;
using Master.Repository;
using System;

namespace Master.Service.Domain.Auth
{
    public class SrvAuthCheckMobile : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();

        public bool Find(string conn, string mobile, out DtoAuthUser user)
        {
            user = new DtoAuthUser();

            if (string.IsNullOrEmpty(mobile))
                return ReportError("Mobile information failed");

            User usr_test;

            if (!userRepo.GetUserByMobile(conn, mobile, out usr_test))
                return false;

            user.email = usr_test.stEmail;
            user.mobile = usr_test.stMobile;
            user.name = usr_test.stName;
            user.gmap = usr_test.stGMap;

            return true;
        }
    }
}
