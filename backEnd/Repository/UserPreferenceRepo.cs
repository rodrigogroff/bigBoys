using Dapper;
using Master.Entity.Database;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IUserPreferenceRepo
    {
        public bool GetPreferenceById(string conn, long id, out UserPreference user);
        public bool DeletePreferenceById(string conn, long id);
        public bool GetPreferencesByFkUser(string conn, long id, out List<UserPreference> user);
        public bool GetPreferencesByFkUserProductId(string conn, long id, long product_id, out List<UserPreference> user);
        public bool Update(string conn, UserPreference mdl);
        public long Insert(string conn, UserPreference mdl);
    }

    public class UserPreferenceRepo : IUserPreferenceRepo
    {
        public bool GetPreferenceById(string conn, long id, out UserPreference user)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    user = db.QueryFirstOrDefault<UserPreference> 
                        ("SELECT * FROM \"UserPreference\" where \"id\"=@id", new { id });
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

        public bool DeletePreferenceById(string conn, long id)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("delete from \"UserPreference\" where id=@id", db))
                    {
                        var mdl = new UserPreference
                        {
                            id = id
                        };

                        setUserParams(cmd, mdl);
                        cmd.ExecuteNonQuery();
                    }
                }

                return true;
            }
            catch
            {
                return false;
            }

            #endregion
        }

        public bool GetPreferencesByFkUser(string conn, long user_id, out List<UserPreference> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    list = db.Query<UserPreference>
                        ("SELECT * FROM \"UserPreference\" where \"fkUser\"=@fkUser", new { fkUser = user_id }).ToList();                    
                }

                return true;
            }
            catch
            {
                list = null;
                return false;
            }

            #endregion
        }

        public bool GetPreferencesByFkUserProductId(string conn, long user_id, long product_id, out List<UserPreference> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    list = db.Query<UserPreference>
                        ("SELECT * FROM \"UserPreference\" where \"fkUser\"=@fkUser and \"nuSaleId\"=@nuSaleId", 
                        new { fkUser = user_id, nuSaleId = product_id }).ToList();
                }

                return true;
            }
            catch
            {
                list = null;
                return false;
            }

            #endregion
        }

        public void setUserParams(NpgsqlCommand cmd, UserPreference mdl)
        {
            #region - code - 

            cmd.Parameters.AddWithValue("id", ((object)mdl.id) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("fkUser", ((object)mdl.fkUser) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuSaleId", ((object)mdl.nuSaleId) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtRegister", ((object)mdl.dtRegister) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuDay", ((object)mdl.nuDay) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuMonth", ((object)mdl.nuMonth) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuYear", ((object)mdl.nuYear) ?? DBNull.Value);

            #endregion
        }

        public bool Update(string conn, UserPreference mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("update \"UserPreference\" set " +
                        "\"fkUser\"=@fkUser," +

                        "\"dtRegister\"=@dtRegister," +
                        "\"nuDay\"=@nuDay," +
                        "\"nuMonth\"=@nuMonth," +
                        "\"nuYear\"=@nuYear," +

                        "\"nuSaleId\"=@nuSaleId " +
                        "where id=@id", db))
                    {
                        setUserParams(cmd, mdl);
                        cmd.ExecuteNonQuery();
                    }
                }

                return true;
            }
            catch
            {
                return false;
            }

            #endregion
        }

        public long Insert(string conn, UserPreference mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("INSERT INTO \"UserPreference\" ( \"fkUser\",\"dtRegister\",\"nuDay\",\"nuMonth\",\"nuYear\",\"nuSaleId\" ) " +
                                                                   "VALUES (@fkUser,@dtRegister,@nuDay,@nuMonth,@nuYear,@nuSaleId)" +
                                                                   ";select currval('public.\"UserPreference_id_seq\"');", db))
                    {
                        setUserParams(cmd, mdl);
                        return (long)cmd.ExecuteScalar();
                    }
                }
            }
            catch
            {
                return 0;
            }

            #endregion
        }        
    }
}
