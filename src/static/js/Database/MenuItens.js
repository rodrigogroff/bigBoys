
export default class {

    static getAll() {
  
      return {
        items: [ 
          { 
            label: 'Catálogo',
            link: '/catalog',
            subs: [
              {
                label: 'Novidades',
                link: '/catalog',
              },              
            ]
          },
          {
            label: 'Vendas',
            link: 'https://skywarriorthemes.com/gameaddict/clan-members/',
            subs: [
              {
                label: 'Como comprar',
                link: '/como_comprar',
              },
              {
                label: 'Mercado Livre',
                link: 'https://skywarriorthemes.com/gameaddict/clan-members/',
              },              
            ],
          },
          {
            label: 'Parceiros',
            link: 'https://skywarriorthemes.com/gameaddict/clan-members/',
            subs: [
              {
                label: 'Barber shops',
                link: '/barbers',
              },              
            ],
          },
        ],
      };
    }
}