namespace Master.Entity.Domain.Sale
{
    public class DtoSaleRegister
    {
        public string cpf { get; set; }
        public string gmap { get; set; }
        public long productId { get; set; }
        public long price { get; set; }
        public string dtRegister { get; set; }
    }
}
