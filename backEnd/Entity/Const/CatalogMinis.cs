using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json;

namespace Master.Infra.Constant
{
    public class Gallery
    {
        public string image { get; set; }
    }

    public class Item
    {
        public int id { get; set; }
        public bool active { get; set; }
        public string patreon { get; set; }
        public string sculptPrice { get; set; }
        public string collection { get; set; }
        public string link { get; set; }
        public string catalogIndex { get; set; }
        public string imageBig { get; set; }
        public string catalogText { get; set; }
        public List<Gallery> gallery { get; set; }
    }

    public class Root
    {
        public List<Item> items { get; set; }
    }


    public class CatalogFull
    {
        public CatalogFull()
        {
            catalog = JsonConvert.DeserializeObject<Root>(db);
        }

        public Root catalog = new Root();

        public string db = @"{
      items: [
        {
          id: 4758,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4758',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4758/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [{ image: 'src/static/posters/gundam/4758/preview.jpg' }],
        },
        {
          id: 4759,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4759',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4759/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [{ image: 'src/static/posters/gundam/4759/preview.jpg' }],
        },        
        {
          id: 4760,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4760',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4760/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4760/preview.jpg' } ],
        }, 
        {
          id: 4761,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4761',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4761/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4761/preview.jpg' } ],
        }, 
        {
          id: 4762,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4762',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4762/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4762/preview.jpg' } ],
        }, 
        {
          id: 4763,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4763',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4763/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4763/preview.jpg' } ],
        },
        {
          id: 4764,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4764',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4764/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4764/preview.jpg' } ],
        }, 
        {
          id: 4765,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4765',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4765/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4765/preview.jpg' } ],
        }, 
        {
          id: 4766,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4766',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4766/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4766/preview.jpg' } ],
        }, 
        {
          id: 4767,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4767',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4767/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4767/preview.jpg' } ],
        }, 
        {
          id: 4768,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4768',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4768/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4768/preview.jpg' } ],
        }, 
        {
          id: 4769,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4769',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4769/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4769/preview.jpg' } ],
        }, 
        {
          id: 4770,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4770',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4770/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4770/preview.jpg' } ],
        }, 
        {
          id: 4771,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4771',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4771/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4771/preview.jpg' } ],
        }, 
        {
          id: 4772,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4772',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4772/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4772/preview.jpg' } ],
        }, 
        {
          id: 4773,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4773',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4773/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4773/preview.jpg' } ],
        }, 
        {
          id: 4774,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4774',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4774/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4774/preview.jpg' } ],
        }, 
        {
          id: 4775,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4775',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4775/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4775/preview.jpg' } ],
        }, 
        {
          id: 4776,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4776',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4776/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4776/preview.jpg' } ],
        }, 
        {
          id: 4777,
          active: true,
          patreon: 'big boys',
          collection: 'GND P2',
          link: '/item?id=4777',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4777/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4777/preview.jpg' } ],
        }, 
        {
          id: 4778,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4778',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4778/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4778/preview.jpg' } ],
        }, 
        {
          id: 4779,
          active: true,
          patreon: 'big boys',
          collection: 'GND P1',
          link: '/item?id=4779',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/gundam/4779/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/gundam/4779/preview.jpg' } ],
        }, 

        {
          id: 4780,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4780',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4780/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4780/preview.jpg' } ],
        }, 
        {
          id: 4781,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4781',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4781/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4781/preview.jpg' } ],
        }, 
        {
          id: 4782,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4782',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4782/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4782/preview.jpg' } ],
        }, 

        {
          id: 4783,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4783',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4783/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4783/preview.jpg' } ],
        }, 

        {
          id: 4784,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4784',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4784/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4784/preview.jpg' } ],
        }, 

        {
          id: 4785,
          active: true,
          patreon: 'big boys',
          collection: 'GUNS',
          link: '/item?id=4785',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/guns/4785/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/guns/4785/preview.jpg' } ],
        }, 

        {
          id: 4790,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4790',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4790/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4790/preview.jpg' } ],
        }, 
        {
          id: 4791,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4791',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4791/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4791/preview.jpg' } ],
        }, 
        {
          id: 4792,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4792',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4792/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4792/preview.jpg' } ],
        }, 
        {
          id: 4793,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4793',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4793/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4793/preview.jpg' } ],
        }, 
        {
          id: 4794,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4794',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4794/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4794/preview.jpg' } ],
        }, 
        {
          id: 4795,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4795',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4795/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4795/preview.jpg' } ],
        }, 
        {
          id: 4796,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4796',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4796/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4796/preview.jpg' } ],
        }, 
        {
          id: 4797,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4797',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4797/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4797/preview.jpg' } ],
        }, 

        {
          id: 4798,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4798',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4798/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4798/preview.jpg' }  ],
        }, 

        {
          id: 4799,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4799',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4799/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4799/preview.jpg' } ],
        }, 

        {
          id: 4800,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4800',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4800/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4800/preview.jpg' } ],
        }, 

        {
          id: 4801,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4801',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4801/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4801/preview.jpg' } ],
        }, 
        {
          id: 4802,
          active: true,
          patreon: 'big boys',
          collection: 'FUTURE',
          link: '/item?id=4802',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/future/4802/promoBig.jpg',
          catalogText: 'Largura: 42cm, Altura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/future/4802/preview.jpg' } ],
        }, 
        {
          id: 4820,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4820',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4820/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4820/preview.jpg' } ],
        }, 
        {
          id: 4821,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4821',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4821/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4821/preview.jpg' } ],
        }, 
        {
          id: 4822,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4822',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4822/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4822/preview.jpg' } ],
        }, 
        {
          id: 4823,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4823',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4823/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4823/preview.jpg' } ],
        }, 
        {
          id: 4824,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4824',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4824/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4824/preview.jpg' } ],
        },
        {
          id: 4825,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4825',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4825/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4825/preview.jpg' } ],
        },
        {
          id: 4826,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4826',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4826/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4826/preview.jpg' } ],
        },
        {
          id: 4827,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4827',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4827/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4827/preview.jpg' } ],
        },
        {
          id: 4828,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4828',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4828/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4828/preview.jpg' } ],
        },
        {
          id: 4829,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4829',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4829/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4829/preview.jpg' } ],
        },
        {
          id: 4830,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4830',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4830/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4830/preview.jpg' }  ],
        },
        {
          id: 4831,
          active: true,
          patreon: 'big boys',
          collection: 'CHARS1',
          link: '/item?id=4831',
          catalogIndex:'/catalog_poster',
          imageBig: 'src/static/posters/chars/4831/promoBig.jpg',
          catalogText: 'Altura: 42cm, Largura: 30cm<br>
                        Quadro tamanho A3, com acabamento em acetato transparente,
                        protegendo a figura.<br>
                        <br>',
          gallery: [ { image: 'src/static/posters/chars/4831/preview.jpg' } ],
        },
        {
          id: 8712,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8712',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8712/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8712/promoBig.jpg' },
          ],
        },
        {
          id: 8713,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8713',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8713/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8713/promoBig.jpg' },
          ],
        },
        {
          id: 8714,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8714',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8714/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8714/promoBig.jpg' },
          ],
        },        
        {
          id: 8716,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8716',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8716/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8716/promoBig.jpg' },
          ],
        },
        {
          id: 8717,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8717',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8717/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8717/promoBig.jpg' },
          ],
        },
        {
          id: 8718,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8718',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8718/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8718/promoBig.jpg' },
          ],
        },
        {
          id: 8719,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8719',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8719/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8719/promoBig.jpg' },
          ],
        },

        {
          id: 8720,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8720',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8720/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8720/promoBig.jpg' },
          ],
        },
        {
          id: 8721,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'ORCS_POWER',
          link: '/item?id=8721',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/orcs_power/8721/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/orcs_power/8721/promoBig.jpg' },
          ],
        },

        {
          id: 8722,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8722',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8722/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8722/promoBig.jpg' },
          ],
        },

        {
          id: 8723,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8723',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8723/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8723/promoBig.jpg' },
          ],
        },

        {
          id: 8724,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8724',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8724/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8724/promoBig.jpg' },
          ],
        },

        {
          id: 8725,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8725',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8725/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8725/promoBig.jpg' },
          ],
        },

        {
          id: 8726,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8726',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8726/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8726/promoBig.jpg' },
          ],
        },

        {
          id: 8727,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8727',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8727/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8727/promoBig.jpg' },
          ],
        },

        {
          id: 8728,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'daybreak miniatures',
          collection: 'HORDE_DREADMARSH',
          link: '/item?id=8728',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/horde_dreadmarsh/8728/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/horde_dreadmarsh/8728/promoBig.jpg' },
          ],
        },

        {
          id: 8730,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8730',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8730/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8730/promoBig.jpg' },
          ],
        },

        {
          id: 8731,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8731',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8731/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8731/promoBig.jpg' },
          ],
        },
        {
          id: 8733,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8733',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8733/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8733/promoBig.jpg' },
          ],
        },

        {
          id: 8734,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8734',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8734/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8734/promoBig.jpg' },
          ],
        },

        {
          id: 8735,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8735',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8735/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8735/promoBig.jpg' },
          ],
        },

        {
          id: 8736,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8736',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8736/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8736/promoBig.jpg' },
          ],
        },

        {
          id: 8737,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8737',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8737/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8737/promoBig.jpg' },
          ],
        },

        {
          id: 8738,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8738',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8738/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8738/promoBig.jpg' },
          ],
        },

        {
          id: 8739,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8739',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8739/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8739/promoBig.jpg' },
          ],
        },

        {
          id: 8740,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8740',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8740/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8740/promoBig.jpg' },
          ],
        },
        {
          id: 8741,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8741',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8741/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8741/promoBig.jpg' },
          ],
        },
        {
          id: 8742,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'TOME_OF_DEMONS',
          link: '/item?id=8742',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/tome_of_demons/8742/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/tome_of_demons/8742/promoBig.jpg' },
          ],
        },

        {
          id: 8770,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8770',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8770/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8770/promoBig.jpg' },
          ],
        },
        {
          id: 8771,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8771',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8771/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8771/promoBig.jpg' },
          ],
        },
        {
          id: 8772,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8772',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8772/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8772/promoBig.jpg' },
          ],
        },
        {
          id: 8773,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8773',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8773/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8773/promoBig.jpg' },
          ],
        },
        {
          id: 8774,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8774',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8774/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8774/promoBig.jpg' },
          ],
        },
        {
          id: 8775,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8775',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8775/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8775/promoBig.jpg' },
          ],
        },
        {
          id: 8776,
          active: true,
          sculptPrice: 'R$ 260,00',
          patreon: 'archvillain games',
          collection: 'AFFLICTION',
          link: '/item?id=8776',
          catalogIndex:'/catalog',
          imageBig: 'src/static/minis/affliction/8776/promoBig.jpg',
          catalogText: 'Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.',
          gallery: [ { image: 'src/static/minis/affliction/8776/promoBig.jpg' },
          ],
        }

      ],
    }
";

    }
}
