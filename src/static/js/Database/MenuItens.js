
export default class {

    static getAll() {
  
      return {
        items: [ 
          { 
            label: 'Catálogo',
            link: '',
            subs: [
              {
                label: 'Quadros',
                link: '/catalog_poster',
              },
              {
                label: 'Miniaturas',
                link: '/catalog',
              },
            ]
          },
          { 
            label: 'Empresa',
            link: '',
            subs: [
              {
                label: 'Produção',
                link: '/production',
              },
              {
                label: 'Dúvidas',
                link: '/faq',
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