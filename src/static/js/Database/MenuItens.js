
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
                label: 'Carrinho',
                link: '/car',
              },
              {
                label: 'Meus pedidos',
                link: '/production',
              },
              {
                label: 'Preferidos',
                link: '/wishlist',
              },
              {
                label: 'Dúvidas',
                link: '/faq',
              },
              {
                label: 'Sair',
                link: '/logout',
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