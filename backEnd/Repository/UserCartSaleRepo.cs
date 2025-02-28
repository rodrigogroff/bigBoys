﻿using Dapper;
using Master.Entity.Database;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Master.Repository
{
    public interface IUserCartSaleRepo
    {
        public bool GetCartSaleById(string conn, long id, out UserCartSale user);
        public bool DeleteCartSaleById(string conn, long id);
        public bool GetCartSalesByFkUser(string conn, long userId, long? fkSale, DateTime? dt, out List<UserCartSale> user);
        public bool Update(string conn, UserCartSale mdl);
        public long Insert(string conn, UserCartSale mdl);
    }

    public class UserCartSaleRepo : IUserCartSaleRepo
    {
        public bool GetCartSaleById(string conn, long id, out UserCartSale user)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    user = db.QueryFirstOrDefault<UserCartSale> 
                        ("SELECT * FROM \"UserCartSale\" where \"id\"=@id", new { id });
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

        public bool DeleteCartSaleById(string conn, long id)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("delete from \"UserCartSale\" where id=@id", db))
                    {
                        var mdl = new UserCartSale
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

        public bool GetCartSalesByFkUser(string conn, long userId, long? fkSale, DateTime? dt, out List<UserCartSale> list)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    if (userId > 0)
                    {
                        list = db.Query<UserCartSale>
                            ("SELECT * FROM \"UserCartSale\" where \"fkUser\"=@fkUser and \"fkSale\"=@fkSale",
                            new { fkUser = userId, fkSale = fkSale }).ToList();
                    }
                    else
                    {
                        if (fkSale == null)
                        {
                            var _dt = Convert.ToDateTime(dt);

                            list = db.Query<UserCartSale>
                                ("SELECT * FROM \"UserCartSale\" where \"nuDay\"=@nuDay and \"nuMonth\"=@nuMonth and \"nuYear\"=@nuYear",
                                new
                                {
                                    nuDay = _dt.Day,
                                    nuMonth = _dt.Month,
                                    nuYear = _dt.Year,
                                }).ToList();
                        }
                        else
                        {
                            list = db.Query<UserCartSale>
                                ("SELECT * FROM \"UserCartSale\" where \"fkSale\"=@fkSale",
                                new { fkSale = fkSale }).ToList();
                        }
                    }
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

        public void setUserParams(NpgsqlCommand cmd, UserCartSale mdl)
        {
            #region - code - 

            cmd.Parameters.AddWithValue("id", ((object)mdl.id) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("fkUser", ((object)mdl.fkUser) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("fkSale", ((object)mdl.fkSale) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuSaleId", ((object)mdl.nuSaleId) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuSaleOption", ((object)mdl.nuSaleOption) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("vrPrice", ((object)mdl.vrPrice) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("dtRegister", ((object)mdl.dtRegister) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuDay", ((object)mdl.nuDay) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuMonth", ((object)mdl.nuMonth) ?? DBNull.Value);
            cmd.Parameters.AddWithValue("nuYear", ((object)mdl.nuYear) ?? DBNull.Value);

            #endregion
        }

        public bool Update(string conn, UserCartSale mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("update \"UserCartSale\" set " +
                        "\"fkUser\"=@fkUser," +
                        "\"fkSale\"=@fkSale," +
                        "\"nuSaleId\"=@nuSaleId," +
                        "\"nuSaleOption\"=@nuSaleOption," +
                        "\"dtRegister\"=@dtRegister," +
                        "\"nuDay\"=@nuDay," +
                        "\"nuMonth\"=@nuMonth," +
                        "\"nuYear\"=@nuYear," +
                        "\"vrPrice\"=@vrPrice " + 
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

        public long Insert(string conn, UserCartSale mdl)
        {
            #region - code - 

            try
            {
                using (var db = new NpgsqlConnection(conn))
                {
                    db.Open();

                    using (var cmd = new NpgsqlCommand("INSERT INTO \"UserCartSale\" ( \"fkUser\",\"fkSale\",\"nuSaleId\",\"vrPrice\",\"nuSaleOption\",\"nuDay\",\"nuMonth\",\"nuYear\",\"dtRegister\" ) " +
                                                                   "VALUES (@fkUser,@fkSale,@nuSaleId,@vrPrice,@nuSaleOption,@nuDay,@nuMonth,@nuYear,@dtRegister)" +
                                                                   ";select currval('public.\"UserCartSale_id_seq\"');", db))
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
