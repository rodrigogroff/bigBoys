(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var i,a;return i=e,a=[{key:"getAll",value:function(){return{items:[{label:"Site",link:"",subs:[{label:"Login",link:"/login"},{label:"Registrar-se",link:"/register"},{label:"Carrinho",link:"/cart"},{label:"Meus pedidos",link:"/production"},{label:"Preferidos",link:"/catalog_user"},{label:"Dúvidas",link:"/faq"},{label:"Sair",link:"/logout"}]},{label:"Quadros",link:"/catalog_poster",subs:[]},{label:"Miniaturas",link:"/catalog",subs:[]}]}}}],null&&t(i.prototype,null),a&&t(i,a),e}();function i(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var a,r;return a=t,r=[{key:"getHtml",value:function(){for(var t=e.getAll(),i=1350,a='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',r=0;r<t.items.length;++r){i++;var o=t.items[r];if(a+='<li id="menu-item-'+i+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+i+'" style="margin-right:20px">',a+='<a href="'+o.link+'">'+o.label+"</a>",o.subs.length>0){a+='<ul class="sub-menu">';for(var s=0;s<o.subs.length;++s){var n=o.subs[s];a+='<li id="menu-item-"'+ ++i+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+i+'" style="margin-right:20px">',a+='<a style="color:white" href="'+n.link+'">'+n.label+"</a>",a+="</li>"}a+="</ul>"}a+="</li>"}return a+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&i(a.prototype,null),r&&i(a,r),t}();function r(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">\n\t\t\t<a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Dúvidas">\n\t\t\t<div class="rwb-tooltip" style=\'color:white\'>Dúvidas?</div>\n\t\t\t<img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">\n\t\t\t</a>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&r(e.prototype,null),i&&r(e,i),t}();function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"sort",value:function(t){for(var e,i=t.length;0!=i;){e=Math.floor(Math.random()*i),i--;var a=[t[e],t[i]];t[i]=a[0],t[e]=a[1]}return t}}],null&&s(e.prototype,null),i&&s(e,i),t}();function c(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(t,e){var i="<div align='center'><div class='flex-container'>";t.items=n.sort(t.items);for(var a=0;a<t.items.length;a++){var r=t.items[a];1==r.active&&(null!=e&&""!=e?r.collection==e&&(i+="<div id='".concat(r.id,"'>\n                                    <img src=\"").concat(r.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(r.id,'" >\n                                </div>')):i+="<div id='".concat(r.id,"'>\n                            <img src=\"").concat(r.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(r.id,'" >\n                        </div>'))}return t.items.length>0&&(i+="</div></div>"),i}}],null&&c(e.prototype,null),i&&c(e,i),t}();function l(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getAll",value:function(t,e){var i={items:[{id:4758,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4758",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4758/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4758/preview.jpg"}]},{id:4759,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4759",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4759/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4759/preview.jpg"}]},{id:4760,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4760",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4760/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4760/preview.jpg"}]},{id:4761,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4761",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4761/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4761/preview.jpg"}]},{id:4762,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4762",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4762/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4762/preview.jpg"}]},{id:4763,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4763",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4763/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4763/preview.jpg"}]},{id:4764,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4764",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4764/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4764/preview.jpg"}]},{id:4765,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4765",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4765/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4765/preview.jpg"}]},{id:4766,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4766",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4766/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4766/preview.jpg"}]},{id:4767,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4767",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4767/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4767/preview.jpg"}]},{id:4768,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4768",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4768/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4768/preview.jpg"}]},{id:4769,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4769",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4769/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4769/preview.jpg"}]},{id:4770,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4770",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4770/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4770/preview.jpg"}]},{id:4771,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4771",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4771/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4771/preview.jpg"}]},{id:4772,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4772",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4772/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4772/preview.jpg"}]},{id:4773,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4773",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4773/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4773/preview.jpg"}]},{id:4774,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4774",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4774/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4774/preview.jpg"}]},{id:4775,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4775",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4775/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4775/preview.jpg"}]},{id:4776,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4776",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4776/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4776/preview.jpg"}]},{id:4777,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4777",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4777/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4777/preview.jpg"}]},{id:4778,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4778",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4778/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4778/preview.jpg"}]},{id:4779,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4779",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4779/promoBig.jpg",gallery:[{image:"src/static/posters/gundam/4779/preview.jpg"}]},{id:4780,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4780",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4780/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4780/preview.jpg"}]},{id:4781,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4781",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4781/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4781/preview.jpg"}]},{id:4782,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4782",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4782/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4782/preview.jpg"}]},{id:4783,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4783",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4783/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4783/preview.jpg"}]},{id:4784,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4784",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4784/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4784/preview.jpg"}]},{id:4785,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4785",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4785/promoBig.jpg",gallery:[{image:"src/static/posters/guns/4785/preview.jpg"}]},{id:4790,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4790",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4790/promoBig.jpg",gallery:[{image:"src/static/posters/future/4790/preview.jpg"}]},{id:4791,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4791",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4791/promoBig.jpg",gallery:[{image:"src/static/posters/future/4791/preview.jpg"}]},{id:4792,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4792",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4792/promoBig.jpg",gallery:[{image:"src/static/posters/future/4792/preview.jpg"}]},{id:4793,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4793",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4793/promoBig.jpg",gallery:[{image:"src/static/posters/future/4793/preview.jpg"}]},{id:4794,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4794",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4794/promoBig.jpg",gallery:[{image:"src/static/posters/future/4794/preview.jpg"}]},{id:4795,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4795",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4795/promoBig.jpg",gallery:[{image:"src/static/posters/future/4795/preview.jpg"}]},{id:4796,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4796",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4796/promoBig.jpg",gallery:[{image:"src/static/posters/future/4796/preview.jpg"}]},{id:4797,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4797",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4797/promoBig.jpg",gallery:[{image:"src/static/posters/future/4797/preview.jpg"}]},{id:4798,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4798",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4798/promoBig.jpg",gallery:[{image:"src/static/posters/future/4798/preview.jpg"}]},{id:4799,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4799",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4799/promoBig.jpg",gallery:[{image:"src/static/posters/future/4799/preview.jpg"}]},{id:4800,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4800",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4800/promoBig.jpg",gallery:[{image:"src/static/posters/future/4800/preview.jpg"}]},{id:4801,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4801",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4801/promoBig.jpg",gallery:[{image:"src/static/posters/future/4801/preview.jpg"}]},{id:4802,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4802",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4802/promoBig.jpg",gallery:[{image:"src/static/posters/future/4802/preview.jpg"}]},{id:4820,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4820",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4820/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4820/preview.jpg"}]},{id:4821,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4821",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4821/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4821/preview.jpg"}]},{id:4822,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4822",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4822/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4822/preview.jpg"}]},{id:4823,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4823",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4823/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4823/preview.jpg"}]},{id:4824,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4824",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4824/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4824/preview.jpg"}]},{id:4825,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4825",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4825/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4825/preview.jpg"}]},{id:4826,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4826",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4826/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4826/preview.jpg"}]},{id:4827,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4827",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4827/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4827/preview.jpg"}]},{id:4828,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4828",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4828/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4828/preview.jpg"}]},{id:4829,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4829",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4829/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4829/preview.jpg"}]},{id:4830,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4830",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4830/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4830/preview.jpg"}]},{id:4831,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4831",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4831/promoBig.jpg",gallery:[{image:"src/static/posters/chars/4831/preview.jpg"}]}]};if(null==t||null==t||null==e||null==e)return i;if(null==e||null==e){for(var a={items:[]},r="!"==t[0]?t.substring(1):"",o=0;o<i.items.length;o++)"!"==t[0]?i.items[o].tag!=r&&a.items.push(i.items[o]):i.items[o].tag==t&&a.items.push(i.items[o]);return a}for(var s=0;s<i.items.length;s++)if(i.items[s].id.toString()==e.toString())return i.items[s]}}],null&&l(e.prototype,null),i&&l(e,i),t}();function m(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(){var t=localStorage.getItem("userName");return"null"!=t&&null!=t&&(document.getElementById("myAppUserLogin").innerHTML="Bem-vindo, <strong><a href='/cart' style='color:white'> ".concat(t," </a></strong><br>")),""}}],null&&m(e.prototype,null),i&&m(e,i),t}();function d(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(){return document.getElementById("portal_title").textContent="Big Boys - Colecionáveis",""}}],null&&d(e.prototype,null),i&&d(e,i),t}();function b(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(){v.getHtml(),u.getHtml(),document.getElementById("myAppMenu").innerHTML=a.getHtml(),document.getElementById("myAppFooter").innerHTML=o.getHtml();var t=p.getAll();return document.getElementById("myAppCatalog").innerHTML=g.getHtml(t),""}}],null&&b(e.prototype,null),i&&b(e,i),t}();function f(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.params=e}var e,i;return e=t,(i=[{key:"getHtml",value:function(){return y.getHtml()}}])&&f(e.prototype,i),t}();function B(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var h=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e}return e=t,(i=[{key:"getHtml",value:function(){var t=this.url,e={id:null},i=t.split("/");return t="/"+i[1],i.length>=2&&(e.id=i[2]),"".concat(new j(e).getHtml())}}])&&B(e.prototype,i),a&&B(e,a),t;var e,i,a}(),w=function(){document.querySelector("#myApp").innerHTML=new h(window.location.pathname).getHtml()};window.addEventListener("popstate",w),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){var e;t.target.matches("[data-link]")&&(t.preventDefault(),e=t.target.href,history.pushState(null,null,e),w())})),w()}))})();
//# sourceMappingURL=CatalogPoster.js.map