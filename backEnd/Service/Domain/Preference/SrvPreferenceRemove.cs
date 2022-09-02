using Master.Entity.Database;
using Master.Repository;
using System.Collections.Generic;

namespace Master.Service.Domain.Sale
{
    public class SrvPreferenceRemove : SrvBaseService
    {
        public IUserRepo userRepo = new UserRepo();
        public IUserPreferenceRepo userPreferenceRepo = new UserPreferenceRepo();

        public bool Remove ( string conn, long user_id, long product_id )
        {
            User usr;

            if (!userRepo.GetUserById(conn, user_id, out usr))
            {
                return ReportError("Invalid Register Ex01");
            }

            List<UserPreference> list;

            if (!userPreferenceRepo.GetPreferencesByFkUserProductId(conn, user_id, product_id, out list))
            {
                return ReportError("Invalid Register Ex02");
            }

            foreach (var item in list)
                if (!userPreferenceRepo.DeletePreferenceById(conn, item.id))
                    return ReportError("Invalid Register Ex03 " + item.id );

            return true;
        }
    }
}
