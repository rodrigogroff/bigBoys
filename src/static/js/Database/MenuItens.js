
export default class {

    static getAll() {
  
      return {
        items: [ 
          { 
            label: 'Quadros',
            link: '/catalog_poster',
            subs: []
          },
          { 
            label: 'Miniaturas',
            link: '/catalog',
            subs: []
          },
          { 
            label: 'Compras',
            link: '',
            subs: [
              {
                label: 'Dúvidas',
                link: '/faq',
              },
              {
                label: 'Produção',
                link: '/production',
              },              
            ]
          },          
          /*
          {
            label: 'Parceiros',
            link: 'https://skywarriorthemes.com/gameaddict/clan-members/',
            subs: [
              {
                label: 'Barber shops',
                link: '/barbers',
              },              
            ],
          },*/
        ],
      };
    }
}