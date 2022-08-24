using System;

namespace Master.Entity.Database
{
    public class UserSale
    {
        public long id { get; set; }
        public long? fkUser { get; set; }
        public long? nuSaleId { get; set; }
        public long? vrPrice { get; set; }
        public string stGMap { get; set; }
        public DateTime? dtRegister { get; set; }
        public DateTime? dtProduction { get; set; }
        public DateTime? dtMail { get; set; }
        public long? nuSaleStage { get; set; }
        public bool? bActive { get; set; }
    }
}
