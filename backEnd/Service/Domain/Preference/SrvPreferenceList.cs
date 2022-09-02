using Master.Entity.Database;
using Master.Entity.Domain.Preference;
using Master.Repository;
using System.Collections.Generic;

namespace Master.Service.Domain.Sale
{
    public class SrvPreferenceList : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserPreferenceRepo userPreferenceRepo = new UserPreferenceRepo();        

        public bool List ( string conn, long user_id, out List<DtoPreferenceItem> list )
        {
            list = new List<DtoPreferenceItem>();

            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid Register Ex01");
            }

            List<UserPreference> userPreferences;

            if (!userPreferenceRepo.GetPreferencesByFkUser(conn, user_id, out userPreferences))
            {
                return ReportError("Invalid Register Ex02");
            }

            foreach (var item in userPreferences)
            {
                list.Add(new DtoPreferenceItem
                {
                    productId = (int) item.nuSaleId
                });
            }

            return true;
        }
    }
}
