using Newtonsoft.Json;
using System.Collections.Generic;

namespace Master.Infra.Constant
{
    public class Item
    {
        public int id { get; set; }
        public bool active { get; set; }
        public bool? dashboard { get; set; }
        public string patreon { get; set; }
        public string sculptPrice { get; set; }
        public string catalogText { get; set; }
    }

    public class ItemId
    {
        public int id { get; set; }
    }

    public class Root
    {
        public List<Item> items { get; set; }
    }

    public static class CatalogFull
    {
        public static Root catalog = JsonConvert.DeserializeObject<Root>(

         @"{
      items: [
        {
          id: 4758,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4759,
          active: true,
          dashboard: true,
        },        
        {
          id: 4760,
          active: true,
            dashboard: true,
        }, 
        {
          id: 4761,
          active: true,
            dashboard: true,
        }, 
        {
          id: 4762,
          active: true,
        }, 
        {
          id: 4763,
          active: true,
        },
        {
          id: 4764,
          active: true,
        }, 
        {
          id: 4765,
          active: true,
        }, 
        {
          id: 4766,
          active: true,
        }, 
        {
          id: 4767,
          active: true,         
        }, 
        {
          id: 4768,
          active: true,
        }, 
        {
          id: 4769,
          active: true,
        }, 
        {
          id: 4770,
          active: true,
        }, 
        {
          id: 4771,
          active: true,
        }, 
        {
          id: 4772,
          active: true,
          dashboard: true,
        }, 
        {
          id: 4773,
          active: true,
          dashboard: true,
        }, 
        {
          id: 4774,
          active: true,
        }, 
        {
          id: 4775,
          active: true,
        }, 
        {
          id: 4776,
          active: true,
        }, 
        {
          id: 4777,
          active: true,
          dashboard: true,
        }, 
        {
          id: 4778,
          active: true,
          dashboard: true,
        }, 
        {
          id: 4779,
          active: true,
            dashboard: true,
        }, 
        {
          id: 4780,
          active: true,
            dashboard: true,
        }, 
        {
          id: 4781,
          active: true,
        }, 
        {
          id: 4782,
          active: true,
        }, 
        {
          id: 4783,
          active: true,
        }, 
        {
          id: 4784,
          active: true,
        }, 
        {
          id: 4785,
          active: true,
        }, 

        {
          id: 4790,
          active: true,
        }, 
        {
          id: 4791,
          active: true,
        }, 
        {
          id: 4792,
          active: true,
        }, 
        {
          id: 4793,
          active: true,
        }, 
        {
          id: 4794,
          active: true,
        }, 
        {
          id: 4795,
          active: true,
        }, 
        {
          id: 4796,
          active: true,
          dashboard: true,
        }, 
        {
          id: 4797,
          active: true,
        }, 
        {
          id: 4798,
          active: true,
        }, 
        {
          id: 4799,
          active: true,
        }, 
        {
          id: 4800,
          active: true,
        }, 
        {
          id: 4801,
          active: true,
        }, 
        {
          id: 4802,
          active: true,
        }, 
        {
          id: 4820,
          active: true,
        }, 
        {
          id: 4821,
          active: true,
        }, 
        {
          id: 4822,
          active: true,
        }, 
        {
          id: 4823,
          active: true,
        }, 
        {
          id: 4824,
          active: true,
        },
        {
          id: 4825,
          active: true,
          dashboard: true,
        },
        {
          id: 4826,
          active: true,
        },
        {
          id: 4827,
          active: true,
            dashboard: true,
        },
        {
          id: 4828,
          active: true,
        },
        {
          id: 4829,
          active: true,
        },
        {
          id: 4830,
          active: true,
        },
        {
          id: 4831,
          active: true,
            dashboard: true,
        },

        {
          id: 4900,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4901,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4902,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4903,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4904,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4905,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4907,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4908,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4909,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4910,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4911,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4912,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4913,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4914,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4915,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4916,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4917,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4918,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4919,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4920,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4921,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4922,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4925,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4926,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4927,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4928,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4930,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4931,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4932,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4933,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4934,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4935,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4936,
          active: true,
          patreon: 'big boys',
        },
        {
          id: 4937,
          active: true,
          patreon: 'big boys',
        },
    
        {
          id: 8712,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8713,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8714,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },        
        {
          id: 8716,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8717,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8718,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8719,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8720,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8721,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8722,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8723,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8724,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8725,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8726,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8728,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8730,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8731,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8733,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8734,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8735,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8736,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8737,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8738,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8739,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8740,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8741,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8742,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8770,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8771,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8772,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8773,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8774,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8775,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        },
        {
          id: 8776,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
        }
      ],
    }
");

    }
}
