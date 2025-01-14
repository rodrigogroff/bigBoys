﻿using Master.Entity.Database;
using Master.Repository;
using System;

namespace Master.Service.Domain.Sale
{
    public class SrvPreferenceRegister : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserPreferenceRepo userPreferenceRepo = new UserPreferenceRepo();

        public bool Register(string conn, long user_id, long product_id)
        {
            User usr;
                        
            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid Register Ex01");
            }

            userPreferenceRepo.Insert(conn, new UserPreference
            {                
                fkUser = user_id,
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
