using Dapper;
using Master.Entity.Database;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IUserViewRepo
    {
        public bool GetViewsByFkUser(string conn, long id, out List<UserProductView> user);
        public bool GetViewsByProductId(string conn, long product_id, out List<UserProductView> user);
        public bool Update(string conn, UserProductView mdl);
        public long Insert(string conn, UserProductView mdl);
    }

    public class UserViewRepo : IUserViewRepo
    {
        public bool GetViewsByFkUser(string conn, long user_id, out List<UserProductView> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    list = db.Query<UserProductView>
                        ("SELECT * FROM \"UserProductView\" where \"fkUser\"=@fkUser", new { fkUser = user_id }).ToList();                    
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

        public bool GetViewsByProductId(string conn, long product_id, out List<UserProductView> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    list = db.Query<UserProductView>
                        ("SELECT * FROM \"UserProductView\" where \"nuSaleId\"=@nuSaleId", new { nuSaleId = product_id }).ToList();
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
                
        public void setUserParams(NpgsqlCommand cmd, UserProductView mdl)
        {
            #region - code - 

            cmd.Parameters.AddWithValue("id", ((object)mdl.id) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("fkUser", ((object)mdl.fkUser) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtRegister", ((object)mdl.dtRegister) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuSaleId", ((object)mdl.nuSaleId) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuDay", ((object)mdl.nuDay) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuMonth", ((object)mdl.nuMonth) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuYear", ((object)mdl.nuYear) ?? DBNull.Value);

            #endregion
        }

        public bool Update(string conn, UserProductView mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("update \"UserProductView\" set " +
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

        public long Insert(string conn, UserProductView mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("INSERT INTO \"UserProductView\" ( \"fkUser\",\"dtRegister\",\"nuDay\",\"nuMonth\",\"nuYear\",\"nuSaleId\" ) " +
                                                                   "VALUES (@fkUser,@dtRegister,@nuDay,@nuMonth,@nuYear,@nuSaleId)" +
                                                                   ";select currval('public.\"UserProductView_id_seq\"');", db))
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
