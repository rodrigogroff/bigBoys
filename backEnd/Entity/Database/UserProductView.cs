using System;

namespace Master.Entity.Database
{
    public class UserProductView
    {
        public long id { get; set; }
        public long? nuSaleId { get; set; }
        public long? fkUser { get; set; }
        public DateTime? dtRegister { get; set; }
        public long? nuDay { get; set; }
        public long? nuMonth { get; set; }
        public long? nuYear { get; set; }
    }
}
