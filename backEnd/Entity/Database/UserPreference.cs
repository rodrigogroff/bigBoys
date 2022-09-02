namespace Master.Entity.Database
{
    public class UserPreference
    {
        public long id { get; set; }
        public long? nuSaleId { get; set; }
        public long? fkUser { get; set; }
    }
}
