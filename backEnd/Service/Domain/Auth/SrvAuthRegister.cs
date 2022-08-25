using Master.Entity.Database;
using Master.Repository;
using System;

namespace Master.Service.Domain.Auth
{
    public class SrvAuthRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();

        public bool Register(string conn, string name, string email, string mobile, string gmap)
        {
            if (string.IsNullOrEmpty(conn))
                return ReportError("Connection information failed");

            if (string.IsNullOrEmpty(name))
                return ReportError("Name information failed");

            if (string.IsNullOrEmpty(email))
                return ReportError("Email information failed");

            if (string.IsNullOrEmpty(mobile))
                return ReportError("Mobile information failed");

            if (string.IsNullOrEmpty(gmap))
                return ReportError("GMap information failed");

            if (mobile.Length < 11)
                return ReportError("Mobile information failed");

            if (!IsNumber(mobile))
                return ReportError("Mobile information failed");

            User usr_test;

            if (!userRepo.GetUserByMobile(conn, mobile, out usr_test))
                return ReportError("Mobile already used");

            var mdl_user = new User
            {
                bActive = true,
                dtJoin = DateTime.Now,
                dtLastLogin = null,
                stEmail = email,
                stName = name,
                stMobile = mobile,      
                stGMap = gmap,
            };

            mdl_user.id = userRepo.Insert(conn, mdl_user);

            if (mdl_user.id == 0)
                return ReportError("Error 0xE1");

            return true;
        }
    }
}
