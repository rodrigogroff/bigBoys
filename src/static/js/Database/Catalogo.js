
//https://www.google.com/search?q=random+de+numero&client=firefox-b-d&sxsrf=APq-WBvNfWSQP7AxCZv00kqZFR_zDwtOoQ%3A1644892689036&ei=ERILYv7xAYfM5OUPpJiymAQ&ved=0ahUKEwi-vrHj1oD2AhUHJrkGHSSMDEMQ4dUDCA0&uact=5&oq=random+de+numero&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMggIABAWEAoQHjIICAAQFhAKEB4yCAgAEBYQChAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6EQguEIAEELEDEIMBEMcBEKMCOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6CAgAELEDEIMBOgUIABDLAToICC4QgAQQ1AJKBAhBGABKBAhGGABQzgxYzx1gmihoAXABeAGAAfEBiAHDFJIBBjAuMTMuM5gBAKABAcgBCsABAQ&sclient=gws-wiz

export default class {

    static getAll(filter) {
      
      var catalog = {
        items: [         
          { 
            id: 2945,
            patreon: 'One page rules',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/one_page_rules/beastmen/cyclops/promo.jpg',
            imageBig: 'src/static/minis/itens/one_page_rules/beastmen/cyclops/promoBig.jpg',
            text: 'Beastmen - Cyclops',
            subtext: 'Seguindo a linha de coleção de guerra,<br>o gigante <strong>cyclops</strong> é uma unidade<br>pronta para destruir tudo',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 9679,
            patreon: 'Bite The Bullet',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/bite_the_bullet/minotaur_druid/promo.jpg',
            imageBig: 'src/static/minis/itens/bite_the_bullet/minotaur_druid/promoBig.jpg',
            text: 'Minotaur Druid',
            subtext: 'Mais um ser mitológico para seu jogo<br>de tabuleiro ou estatueta de coleção.<br>Não deixe de ver este item fantástico!<br>',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 3721,
            patreon: 'White Werewolf Tavern',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/white_werewolf_tavern/elementals_earthmaster/promo.jpg',
            imageBig: 'src/static/minis/itens/white_werewolf_tavern/elementals_earthmaster/promoBig.jpg',
            text: 'Elementals - Earth Master',
            subtext: 'Nesta coleção, o <strong>mestre da terra</strong> figura<br>entre os mais fortes. Não perca esta <br>peça para sua coleção!<br>',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 3211,
            patreon: 'Archvillan Games',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/archvillan_games/howlinghorde_gnoll_brutes_mace/promo.jpg',
            imageBig: 'src/static/minis/itens/archvillan_games/howlinghorde_gnoll_brutes_mace/promoBig.jpg',
            text: 'Gnoll Brute Mace',
            subtext: 'Conheça o temido<br><strong>gnoll brute</strong><br> usando uma maça de duas mãos<br><br>',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 1126,
            patreon: 'Archvillan Games',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/archvillan_games/howlinghorde_gnoll_brutes_axe/promo.jpg',
            imageBig: 'src/static/minis/itens/archvillan_games/howlinghorde_gnoll_brutes_axe/promoBig.jpg',
            text: 'Gnoll Brute Axe',
            subtext: 'Peça incrível para sua coleção - conheça o <br>gnoll brute usando machado<br>de uma mão<br>',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 1819,
            patreon: 'White Werewolf Tavern',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/white_werewolf_tavern/tabaxi_shaman/promo.jpg',
            imageBig: 'src/static/minis/itens/white_werewolf_tavern/tabaxi_shaman/promoBig.jpg',
            text: 'Tabaxi - The Shaman',
            subtext: 'Shaman Tabaxi - mais uma peça de arte <br>para brilhar sua coleção<br><br>',
            date:'14-02-2022',
            tag: '',
            catalogText: '',
          },
          { 
            id: 9101,
            patreon: 'Bite The Bullet',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/bite_the_bullet/blacksmith_scouts/promo.jpg',
            imageBig: 'src/static/minis/itens/bite_the_bullet/blacksmith_scouts/promoBig.jpg',
            text: 'Pirate Town Pack 2',
            subtext: 'Ferreiro Orc e seus dois ajudantes, o que <br>poderia dar errado? Mais uma coleção de <br>RPG para você<br>',
            date:'13-02-2022',
            tag: 'RPG',
            catalogText: '',
          },
          { 
            id: 6222,
            patreon: 'Bite The Bullet',
            link: 'https://skywarriorthemes.com/gameaddict/curabitur-lorem-mauris-dictum-et-tempus/',
            image: 'src/static/minis/itens/bite_the_bullet/dealer_inn_keeper/promo.jpg',
            imageBig: 'src/static/minis/itens/bite_the_bullet/dealer_inn_keeper/promoBig.jpg',
            text: 'Pirate Town Pack 1',
            subtext: 'A hoteleira e o esperto mercante (e sua <br>alpaca e cachorro!) estão prontos para <br>iniciar a suaaventura!<br>',
            date:'12-02-2022',
            tag: 'RPG',
            catalogText: '',
          },
        ],
      };      

      if (filter == null || filter == undefined)
        return catalog;

      var filtered = { items: [] };
      var tag_filter = filter[0]=='!' ? filter.substring(1) : '';

      for (let a=1; a < catalog.items.length; a++)
      {
        if (filter[0]=='!')
        {
          if (catalog.items[a].tag != tag_filter)
            filtered.items.push(catalog.items[a])
        }
        else
          if (catalog.items[a].tag == filter)
            filtered .items.push(catalog.items[a])
      }

      return filtered;
    }  
}
