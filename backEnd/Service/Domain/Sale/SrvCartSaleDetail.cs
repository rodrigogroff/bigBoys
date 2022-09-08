using Master.Infra.Constant;
using System.Linq;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleDetail : SrvBaseService
    {
        public bool Detail (long sale_id, out Item item )
        {
            item = new Item();
            item = CatalogFull.catalog.items.FirstOrDefault(y => y.id == sale_id);

            return true;
        }
    }
}
