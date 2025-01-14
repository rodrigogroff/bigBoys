﻿using System;

namespace Master.Entity.Database
{
    public class UserSale
    {
        public long id { get; set; }
        public long? fkUser { get; set; }
        public string stGMap { get; set; }
        public string stGUID { get; set; }
        public DateTime? dtRegister { get; set; }
        public DateTime? dtProduction { get; set; }
        public DateTime? dtMail { get; set; }
        public long? nuSaleStage { get; set; }
        public bool? bActive { get; set; }
        public long? nuDay { get; set; }
        public long? nuMonth { get; set; }
        public long? nuYear { get; set; }
    }
}
