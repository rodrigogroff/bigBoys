
export default class {

    static getAll() {
  
      return {
        items: [           
          { 
            label: 'Site',
            link: '',
            subs: [
              {
                label: 'Login',
                link: '/login',
              },
              {
                label: 'Registrar-se',
                link: '/register',
              },
              {
                label: 'Minhas compras',
                link: '/production',
              },
              {
                label: 'Preferidos',
                link: '/faq',
              },
              {
                label: 'Dúvidas',
                link: '/faq',
              },
            ]
          },          
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
        ],
      };
    }
}