
import Noticias from "@app/Database/Noticias";

export default class {

  static getHtml() {
    
    var menuItems = Noticias.getAll();
    var fullHtml = '';	

    for(let a = 0; a < menuItems.items.length; ++a)
    {
      var m = menuItems.items[a];
      fullHtml +=  `<li class="newsbv-item">
                        <div class="newsb-thumbnail">
                            <a rel="bookmark" href="${m.link}">
                                <img src="${m.image}" alt="${m.text}" />
                                <span class="overlay-link"></span>
                            </a>
                        </div>
                        <div class="newsb-text">
                            <h4 class="newsb-title"><a rel="bookmark"
                                    href="${m.link}">${m.text}[...]</a></h4>
                            <p>${m.subtext} [&hellip;]</p>
                            <p class="post-meta">${m.date}</span>&nbsp;</p>
                        </div>
                    </li>`;
	}

    fullHtml +=  `</div></div>`
    
    return fullHtml;
  }
}
