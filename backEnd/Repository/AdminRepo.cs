using Dapper;
using Master.Entity.Database;
using Npgsql;

namespace Master.Repository
{
    public interface IAdminRepo
    {
        public bool GetUserById(string conn, long id, out Admin user);
        public bool GetUserByCPF(string conn, string cpf, out Admin user);
    }

    public class AdminRepo : IAdminRepo
    {
        public bool GetUserByCPF(string conn, string cpf, out Admin user)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    user = db.QueryFirstOrDefault<Admin>
                        ("SELECT * FROM \"Admin\" where \"stCPF\"=@cpf", new { cpf });

                    if (user == null)
                        return false;
                }

                return true;
            }
            catch
            {
                user = null;
                return false;
            }

            #endregion
        }

        public bool GetUserById(string conn, long id, out Admin user)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    user = db.QueryFirstOrDefault<Admin> 
                        ("SELECT * FROM \"Admin\" where \"id\"=@id", new { id });
                }

                return true;
            }
            catch
            {
                user = null;
                return false;
            }

            #endregion
        }
    }
}
