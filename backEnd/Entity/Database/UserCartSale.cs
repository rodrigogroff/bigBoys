using System;

namespace Master.Entity.Database
{
    public class UserCartSale
    {
        public long id { get; set; }
        public long? fkUser { get; set; }
        public long? nuSaleId { get; set; }
        public long? vrPrice { get; set; }
        public long? nuSaleOption { get; set; }
        public DateTime? dtRegister { get; set; }
        public long? fkSale { get; set; }
        public long? nuDay { get; set; }
        public long? nuMonth { get; set; }
        public long? nuYear { get; set; }
    }
}
