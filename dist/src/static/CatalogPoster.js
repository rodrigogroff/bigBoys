(()=>{"use strict";function a(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var t=function(){function t(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"getAll",value:function(){return{items:[{label:"Quadros",link:"/catalog_poster",subs:[]},{label:"Miniaturas",link:"/catalog",subs:[]},{label:"Compras",link:"",subs:[{label:"Dúvidas",link:"/faq"},{label:"Produção",link:"/production"}]}]}}}],null&&a(e.prototype,null),r&&a(e,r),t}();function e(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var r=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var r,o;return r=a,o=[{key:"getHtml",value:function(){for(var a=t.getAll(),e=1350,r='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',o=0;o<a.items.length;++o){e++;var n=a.items[o];if(r+='<li id="menu-item-'+e+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+e+'" style="margin-right:20px">',r+='<a href="'+n.link+'">'+n.label+"</a>",n.subs.length>0){r+='<ul class="sub-menu">';for(var i=0;i<n.subs.length;++i){var c=n.subs[i];r+='<li id="menu-item-"'+ ++e+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+e+'" style="margin-right:20px">',r+='<a style="color:white" href="'+c.link+'">'+c.label+"</a>",r+="</li>"}r+="</ul>"}r+="</li>"}return r+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&e(r.prototype,null),o&&e(r,o),a}();function o(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var n=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e;return t=a,e=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">\n\t\t\t<a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Dúvidas">\n\t\t\t<div class="rwb-tooltip" style=\'color:white\'>Dúvidas?</div>\n\t\t\t<img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">\n\t\t\t</a>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&o(t.prototype,null),e&&o(t,e),a}();function i(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var c=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e;return t=a,e=[{key:"sort",value:function(a){for(var t,e=a.length;0!=e;){t=Math.floor(Math.random()*e),e--;var r=[a[t],a[e]];a[e]=r[0],a[t]=r[1]}return a}}],null&&i(t.prototype,null),e&&i(t,e),a}();function g(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var s=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e;return t=a,e=[{key:"getHtml",value:function(a,t){var e="";if(0==a.items.length)return"Peças em fase de aquisição / fabricação<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";e+="<div align='center'><div class='flex-container'>",a.items=c.sort(a.items);for(var r=0;r<a.items.length;r++){var o=a.items[r];1==o.active&&(null!=t&&""!=t?o.collection==t&&(e+="<div id='".concat(o.id,"'>\n                                    <img src=\"").concat(o.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(o.id,'" >\n                                </div>')):e+="<div id='".concat(o.id,"'>\n                            <img src=\"").concat(o.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(o.id,'" >\n                        </div>'))}return a.items.length>0&&(e+="</div></div>"),e}}],null&&g(t.prototype,null),e&&g(t,e),a}();function l(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var m=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e;return t=a,e=[{key:"getAll",value:function(a,t){var e={items:[{id:4758,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4758",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4758/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4758/preview.jpg"}]},{id:4759,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4759",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4759/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4759/preview.jpg"}]},{id:4760,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4760",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4760/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4760/preview.jpg"}]},{id:4761,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4761",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4761/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4761/preview.jpg"}]},{id:4762,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4762",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4762/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4762/preview.jpg"}]},{id:4763,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4763",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4763/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4763/preview.jpg"}]},{id:4764,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4764",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4764/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4764/preview.jpg"}]},{id:4765,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4765",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4765/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4765/preview.jpg"}]},{id:4766,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4766",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4766/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4766/preview.jpg"}]},{id:4767,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4767",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4767/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4767/preview.jpg"}]},{id:4768,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4768",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4768/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4768/preview.jpg"}]},{id:4769,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4769",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4769/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4769/preview.jpg"}]},{id:4770,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4770",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4770/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4770/preview.jpg"}]},{id:4771,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4771",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4771/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4771/preview.jpg"}]},{id:4772,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4772",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4772/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4772/preview.jpg"}]},{id:4773,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4773",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4773/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4773/preview.jpg"}]},{id:4774,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4774",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4774/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4774/preview.jpg"}]},{id:4775,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4775",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4775/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4775/preview.jpg"}]},{id:4776,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4776",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4776/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4776/preview.jpg"}]},{id:4777,active:!0,patreon:"big boys",collection:"GND P2",link:"/item?id=4777",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4777/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4777/preview.jpg"}]},{id:4778,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4778",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4778/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4778/preview.jpg"}]},{id:4779,active:!0,patreon:"big boys",collection:"GND P1",link:"/item?id=4779",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/gundam/4779/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/gundam/4779/preview.jpg"}]},{id:4780,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4780",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4780/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4780/preview.jpg"}]},{id:4781,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4781",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4781/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4781/preview.jpg"}]},{id:4782,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4782",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4782/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4782/preview.jpg"}]},{id:4783,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4783",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4783/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4783/preview.jpg"}]},{id:4784,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4784",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4784/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4784/preview.jpg"}]},{id:4785,active:!0,patreon:"big boys",collection:"GUNS",link:"/item?id=4785",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/guns/4785/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/guns/4785/preview.jpg"}]},{id:4790,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4790",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4790/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4790/preview.jpg"}]},{id:4791,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4791",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4791/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4791/preview.jpg"}]},{id:4792,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4792",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4792/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4792/preview.jpg"}]},{id:4793,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4793",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4793/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4793/preview.jpg"}]},{id:4794,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4794",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4794/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4794/preview.jpg"}]},{id:4795,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4795",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4795/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4795/preview.jpg"}]},{id:4796,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4796",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4796/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4796/preview.jpg"}]},{id:4797,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4797",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4797/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4797/preview.jpg"}]},{id:4798,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4798",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4798/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4798/preview.jpg"}]},{id:4799,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4799",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4799/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4799/preview.jpg"}]},{id:4800,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4800",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4800/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4800/preview.jpg"}]},{id:4801,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4801",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4801/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4801/preview.jpg"}]},{id:4802,active:!0,patreon:"big boys",collection:"FUTURE",link:"/item?id=4802",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/future/4802/promoBig.jpg",catalogText:"Largura: 42cm, Altura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/future/4802/preview.jpg"}]},{id:4820,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4820",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4820/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4820/preview.jpg"}]},{id:4821,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4821",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4821/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4821/preview.jpg"}]},{id:4822,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4822",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4822/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4822/preview.jpg"}]},{id:4823,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4823",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4823/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4823/preview.jpg"}]},{id:4824,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4824",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4824/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4824/preview.jpg"}]},{id:4825,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4825",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4825/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4825/preview.jpg"}]},{id:4826,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4826",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4826/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4826/preview.jpg"}]},{id:4827,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4827",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4827/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4827/preview.jpg"}]},{id:4828,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4828",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4828/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4828/preview.jpg"}]},{id:4829,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4829",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4829/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4829/preview.jpg"}]},{id:4830,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4830",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4830/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4830/preview.jpg"}]},{id:4831,active:!0,patreon:"big boys",collection:"CHARS1",link:"/item?id=4831",catalogIndex:"/catalog_poster",imageBig:"src/static/posters/chars/4831/promoBig.jpg",catalogText:"Altura: 42cm, Largura: 30cm<br>\n                        Quadro tamanho A3, com acabamento em acetato transparente,\n                        protegendo a figura.<br>\n                        <br>",gallery:[{image:"src/static/posters/chars/4831/preview.jpg"}]}]};if(null==a||null==a||null==t||null==t)return e;if(null==t||null==t){for(var r={items:[]},o="!"==a[0]?a.substring(1):"",n=0;n<e.items.length;n++)"!"==a[0]?e.items[n].tag!=o&&r.items.push(e.items[n]):e.items[n].tag==a&&r.items.push(e.items[n]);return r}for(var i=0;i<e.items.length;i++)if(e.items[i].id.toString()==t.toString())return e.items[i]}}],null&&l(t.prototype,null),e&&l(t,e),a}();function p(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var u=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e;return t=a,e=[{key:"getHtml",value:function(){document.getElementById("myAppMenu").innerHTML=r.getHtml(),document.getElementById("myAppFooter").innerHTML=n.getHtml();var a=m.getAll();return document.getElementById("myAppCatalog").innerHTML=s.getHtml(a),""}}],null&&p(t.prototype,null),e&&p(t,e),a}();function b(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var d=function(){function a(t){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.params=t}var t,e;return t=a,(e=[{key:"getHtml",value:function(){return u.getHtml()}}])&&b(t.prototype,e),a}();function v(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}var f=function(){function a(t){(function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a),this.url=t}return t=a,(e=[{key:"getHtml",value:function(){var a=this.url,t={id:null},e=a.split("/");return a="/"+e[1],e.length>=2&&(t.id=e[2]),"".concat(new d(t).getHtml())}}])&&v(t.prototype,e),r&&v(t,r),a;var t,e,r}(),y=function(){document.querySelector("#myApp").innerHTML=new f(window.location.pathname).getHtml()};window.addEventListener("popstate",y),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(a){var t;a.target.matches("[data-link]")&&(a.preventDefault(),t=a.target.href,history.pushState(null,null,t),y())})),y()}))})();
//# sourceMappingURL=CatalogPoster.js.map