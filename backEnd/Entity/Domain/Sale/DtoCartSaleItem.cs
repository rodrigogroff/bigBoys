namespace Master.Entity.Domain.Sale
{
    public class DtoCartSaleItem
    {
        public long cartId { get; set; }
        public long productId { get; set; }
        public long productOption { get; set; }
        public string price { get; set; }
        public string dtRegister { get; set; }
    }
}
