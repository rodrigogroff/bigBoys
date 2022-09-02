using Dapper;
using Master.Entity.Database;
using Master.Infra.Constant;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IUserSaleRepo
    {
        public bool GetSaleById(string conn, long id, out UserSale user);
        public bool GetSalesByFkUser(string conn, long id, out List<UserSale> list);
        public bool GetSalesByFkUserAndStage(string conn, long id, long stage, out List<UserSale> list);
        public bool Update(string conn, UserSale mdl);
        public long Insert(string conn, UserSale mdl);
    }

    public class UserSaleRepo : IUserSaleRepo
    {
        public bool GetSaleById(string conn, long id, out UserSale user)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    user = db.QueryFirstOrDefault<UserSale> 
                        ("SELECT * FROM \"UserSale\" where \"id\"=@id", new { id });
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

        public bool GetSalesByFkUser(string conn, long id, out List<UserSale> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    list = db.Query<UserSale>
                        ("SELECT * FROM \"UserSale\" where \"fkUser\"=@fkUser", new { fkUser = id }).ToList();
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

        public bool GetSalesByFkUserAndStage(string conn, long id, long stage, out List<UserSale> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();
                    list = db.Query<UserSale>
                        ("SELECT * FROM \"UserSale\" where \"fkUser\"=@fkUser and \"nuSaleStage\"=@nuSaleStage", 
                        new 
                        {
                            fkUser = id, 
                            nuSaleStage = stage
                        }).
                        ToList();
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

        public void setUserParams(NpgsqlCommand cmd, UserSale mdl)
        {
            #region - code - 

            cmd.Parameters.AddWithValue("id", ((object)mdl.id) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("fkUser", ((object)mdl.fkUser) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("stGMap", ((object)mdl.stGMap) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtRegister", ((object)mdl.dtRegister) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtProduction", ((object)mdl.dtProduction) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtMail", ((object)mdl.dtMail) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuSaleStage", ((object)mdl.nuSaleStage) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("bActive", ((object)mdl.bActive) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuDay", ((object)mdl.nuDay) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuMonth", ((object)mdl.nuMonth) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuYear", ((object)mdl.nuYear) ?? DBNull.Value);

            #endregion
        }

        public bool Update(string conn, UserSale mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("update \"UserSale\" set " +
                        "\"fkUser\"=@fkUser," +
                        "\"stGMap\"=@stGMap," +
                        "\"dtRegister\"=@dtRegister," +
                        "\"dtProduction\"=@dtProduction," +
                        "\"dtMail\"=@dtMail," +
                        "\"nuSaleStage\"=@nuSaleStage," +
                        "\"bActive\"=@bActive," +
                        "\"nuDay\"=@nuDay," +
                        "\"nuMonth\"=@nuMonth," +
                        "\"nuYear\"=@nuYear " +
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

        public long Insert(string conn, UserSale mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("INSERT INTO \"UserSale\" ( \"fkUser\",\"stGMap\",\"dtRegister\",\"dtProduction\",\"dtMail\",\"nuSaleStage\",\"bActive\",\"nuDay\",\"nuMonth\",\"nuYear\" ) " +
                                                                   "VALUES (@fkUser,@stGMap,@dtRegister,@dtProduction,@dtMail,@nuSaleStage,@bActive,@nuDay,@nuMonth,@nuYear)" +
                                                                   ";select currval('public.\"UserSale_id_seq\"');", db))
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
