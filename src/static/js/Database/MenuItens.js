
export default class {

    static getAll() {
  
      return {
        items: [ 
          { 
            label: 'Quadros',
            link: '/catalog_poster',
            subs: [
              {
                label: 'Catálogo',
                link: '/catalog_poster',
              },              
            ]
          },
          { 
            label: 'Miniaturas',
            link: '/catalog',
            subs: [
              {
                label: 'Catálogo',
                link: '/catalog',
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