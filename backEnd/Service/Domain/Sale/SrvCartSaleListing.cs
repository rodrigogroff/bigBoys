using Master.Infra.Constant;
using System.Collections.Generic;
using System.Linq;

namespace Master.Service.Domain.Sale
{
    public class SrvCartSaleListing : SrvBaseService
    {
        public bool Listing(long option, string colletion, out List<ItemId> list_ids)
        {
            var list = new List<Item>();

            if (option == 1)
            {
                list = CatalogFull.catalog.items.Where(y => y.id < 8000).ToList();
            }
            else if (option == 2)
            {
                list = CatalogFull.catalog.items.Where(y => y.id > 8000).ToList();
            }

            if (!string.IsNullOrEmpty(colletion))
            {
                if (colletion == "*")
                    list = list.Where ( y=> y.dashboard == true).ToList();
                else
                    list = list.Where(y => y.collection == colletion).ToList();
            }

            list_ids = new List<ItemId>();

            foreach (var item in list)
            {
                list_ids.Add(new ItemId
                {
                    id = item.id
                });
            }

            return true;
        }
    }
}
