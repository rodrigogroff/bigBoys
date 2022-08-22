
import MenuItens from "@app/Database/MenuItens";

export default class {

  static getHtml() {
    
    var menuItems = MenuItens.getAll();

    var liItem = 1350;
    var fullMenu = '<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">';
    for(let a = 0; a < menuItems.items.length; ++a)
    {
      liItem++;
      var m = menuItems.items[a];
      fullMenu += '<li id="menu-item-' + liItem + '" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-' + liItem + '">'
      fullMenu += '<a href="' + m.link + '">' + m.label + '</a>'
      if (m.subs.length >0) {
        fullMenu += '<ul class="sub-menu">'
        for(let b = 0; b < m.subs.length; ++b) {
          var m2 = m.subs[b]
          liItem++;
          fullMenu += '<li id="menu-item-"' + liItem + ' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-' + liItem + '">'
          fullMenu += '<a style="color:white" href="' + m2.link + '">' + m2.label + '</a>'
          fullMenu += '</li>'
        }
        fullMenu += '</ul>'
      }
      fullMenu += '</li>'
    }
    fullMenu += '</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>';
    return fullMenu;
  }
}
