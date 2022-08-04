//https://www.google.com/search?q=random+de+numero&client=firefox-b-d&sxsrf=APq-WBvNfWSQP7AxCZv00kqZFR_zDwtOoQ%3A1644892689036&ei=ERILYv7xAYfM5OUPpJiymAQ&ved=0ahUKEwi-vrHj1oD2AhUHJrkGHSSMDEMQ4dUDCA0&uact=5&oq=random+de+numero&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMggIABAWEAoQHjIICAAQFhAKEB4yCAgAEBYQChAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6EQguEIAEELEDEIMBEMcBEKMCOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6CAgAELEDEIMBOgUIABDLAToICC4QgAQQ1AJKBAhBGABKBAhGGABQzgxYzx1gmihoAXABeAGAAfEBiAHDFJIBBjAuMTMuM5gBAKABAcgBCsABAQ&sclient=gws-wiz

export default class {

  static getAll(filter, id) {

    var catalog = {
      items: [
        {
          id: 3715,
          active: true,
          patreon: 'White Werewolf Tavern',
          collection: 'Single',
          link: '/item?id=3715',
          image: 'src/static/minis/itens/white_werewolf_tavern/naga/promo.jpg',
          imageBig: 'src/static/minis/itens/white_werewolf_tavern/naga/promoBig.jpg',
          text: 'The Naga',
          subtext: 'Nesta coleção, o <strong>mestre da terra</strong> figura<br>entre os mais fortes. Não perca esta <br>peça para sua coleção!<br>',
          date: '18-02-2022',
          tag: 'medieval',
          linkBuy: 'https://www.mercadolivre.com.br/figura-de-aco-marvel-capito-america-avengers-f1342-de-hasbro-titan-hero-series/p/MLB18623137',
          catalogText: `Altura: 14,3cm<br>
                        Peso: gramas<br>
                        <br>
                        Seguindo a linha de coleção de guerra BEASTMEN da ONE PAGE RULES, o gigante <strong>cyclops</strong> é uma unidade pronta para destruir tudo - 
                        sua rocha nas mãos o torna também uma unidade de alto alcance, ou mesmo para esmagar seus oponentes de perto.<br>
                        <br>
                        Utilize-o como sub-chefe ou mesmo um inimigo final para suas aventuras de tabuleiro RPG.<br>
                        <br>
                        De tamanho grande, esta peça também serve de escultura para o lado de seu monitor ou decoração na estante de seu filho.
                        `,
          gallery: [{ image: 'src/static/minis/itens/white_werewolf_tavern/naga/promoBig.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p1.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p2.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p3.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p4.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p5.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p6.jpg' },
            { image: 'src/static/minis/itens/white_werewolf_tavern/naga/p7.jpg' },
          ],
        },        
      ],
    };

    if (filter == null || filter == undefined || id == null || id == undefined)
      return catalog;

    if (id != null && id != undefined)
    {
      for (let a = 0; a < catalog.items.length; a++)
        if (catalog.items[a].id.toString() == id.toString())
          return catalog.items[a];
    }
    else
    {
      var filtered = {
        items: []
      };
      var tag_filter = filter[0] == '!' ? filter.substring(1) : '';

      for (let a = 0; a < catalog.items.length; a++) {
        if (filter[0] == '!') {
          if (catalog.items[a].tag != tag_filter)
            filtered.items.push(catalog.items[a])
        } else
        if (catalog.items[a].tag == filter)
          filtered.items.push(catalog.items[a])
      }

      return filtered;
    }
  }
}