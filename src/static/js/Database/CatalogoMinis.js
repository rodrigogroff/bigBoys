//https://www.google.com/search?q=random+de+numero&client=firefox-b-d&sxsrf=APq-WBvNfWSQP7AxCZv00kqZFR_zDwtOoQ%3A1644892689036&ei=ERILYv7xAYfM5OUPpJiymAQ&ved=0ahUKEwi-vrHj1oD2AhUHJrkGHSSMDEMQ4dUDCA0&uact=5&oq=random+de+numero&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMggIABAWEAoQHjIICAAQFhAKEB4yCAgAEBYQChAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgQIIxAnOgQIABBDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6EQguEIAEELEDEIMBEMcBEKMCOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6CAgAELEDEIMBOgUIABDLAToICC4QgAQQ1AJKBAhBGABKBAhGGABQzgxYzx1gmihoAXABeAGAAfEBiAHDFJIBBjAuMTMuM5gBAKABAcgBCsABAQ&sclient=gws-wiz

export default class {

  static getAll(filter, id) {

    var catalog = {
      items: [
        
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