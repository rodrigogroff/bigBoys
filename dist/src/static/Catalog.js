(()=>{"use strict";function a(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var i=function(){function i(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i)}var t,e;return t=i,e=[{key:"getAll",value:function(){return{items:[{label:"Site",link:"",subs:[{label:"Login",link:"/login"},{label:"Registrar-se",link:"/register"},{label:"Carrinho",link:"/cart"},{label:"Meus pedidos",link:"/production"},{label:"Preferidos",link:"/wishlist"},{label:"Dúvidas",link:"/faq"},{label:"Sair",link:"/logout"}]},{label:"Quadros",link:"/catalog_poster",subs:[]},{label:"Miniaturas",link:"/catalog",subs:[]}]}}}],null&&a(t.prototype,null),e&&a(t,e),i}();function t(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var e=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var e,n;return e=a,n=[{key:"getHtml",value:function(){for(var a=i.getAll(),t=1350,e='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',n=0;n<a.items.length;++n){t++;var o=a.items[n];if(e+='<li id="menu-item-'+t+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+t+'" style="margin-right:20px">',e+='<a href="'+o.link+'">'+o.label+"</a>",o.subs.length>0){e+='<ul class="sub-menu">';for(var r=0;r<o.subs.length;++r){var l=o.subs[r];e+='<li id="menu-item-"'+ ++t+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+t+'" style="margin-right:20px">',e+='<a style="color:white" href="'+l.link+'">'+l.label+"</a>",e+="</li>"}e+="</ul>"}e+="</li>"}return e+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&t(e.prototype,null),n&&t(e,n),a}();function n(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var o=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">\n\t\t\t<a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Dúvidas">\n\t\t\t<div class="rwb-tooltip" style=\'color:white\'>Dúvidas?</div>\n\t\t\t<img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">\n\t\t\t</a>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&n(i.prototype,null),t&&n(i,t),a}();function r(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var l=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"sort",value:function(a){for(var i,t=a.length;0!=t;){i=Math.floor(Math.random()*t),t--;var e=[a[i],a[t]];a[t]=e[0],a[i]=e[1]}return a}}],null&&r(i.prototype,null),t&&r(i,t),a}();function c(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var m=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"getHtml",value:function(a,i){var t="<div align='center'><div class='flex-container'>";a.items=l.sort(a.items);for(var e=0;e<a.items.length;e++){var n=a.items[e];1==n.active&&(null!=i&&""!=i?n.collection==i&&(t+="<div id='".concat(n.id,"'>\n                                    <img src=\"").concat(n.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(n.id,'" >\n                                </div>')):t+="<div id='".concat(n.id,"'>\n                            <img src=\"").concat(n.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(n.id,'" >\n                        </div>'))}return a.items.length>0&&(t+="</div></div>"),t}}],null&&c(i.prototype,null),t&&c(i,t),a}();function s(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var g=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"getAll",value:function(a,i){var t={items:[{id:8712,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8712",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8712/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8712/promoBig.jpg"}]},{id:8713,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8713",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8713/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8713/promoBig.jpg"}]},{id:8714,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8714",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8714/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8714/promoBig.jpg"}]},{id:8716,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8716",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8716/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8716/promoBig.jpg"}]},{id:8717,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8717",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8717/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8717/promoBig.jpg"}]},{id:8718,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8718",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8718/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8718/promoBig.jpg"}]},{id:8719,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8719",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8719/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8719/promoBig.jpg"}]},{id:8720,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8720",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8720/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8720/promoBig.jpg"}]},{id:8721,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"ORCS_POWER",link:"/item?id=8721",catalogIndex:"/catalog",imageBig:"src/static/minis/orcs_power/8721/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/orcs_power/8721/promoBig.jpg"}]},{id:8722,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8722",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8722/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8722/promoBig.jpg"}]},{id:8723,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8723",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8723/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8723/promoBig.jpg"}]},{id:8724,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8724",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8724/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8724/promoBig.jpg"}]},{id:8725,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8725",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8725/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8725/promoBig.jpg"}]},{id:8726,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8726",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8726/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8726/promoBig.jpg"}]},{id:8727,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8727",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8727/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8727/promoBig.jpg"}]},{id:8728,active:!0,sculptPrice:"R$ 260,00",patreon:"daybreak miniatures",collection:"HORDE_DREADMARSH",link:"/item?id=8728",catalogIndex:"/catalog",imageBig:"src/static/minis/horde_dreadmarsh/8728/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/horde_dreadmarsh/8728/promoBig.jpg"}]},{id:8730,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8730",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8730/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8730/promoBig.jpg"}]},{id:8731,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8731",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8731/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8731/promoBig.jpg"}]},{id:8733,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8733",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8733/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8733/promoBig.jpg"}]},{id:8734,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8734",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8734/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8734/promoBig.jpg"}]},{id:8735,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8735",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8735/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8735/promoBig.jpg"}]},{id:8736,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8736",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8736/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8736/promoBig.jpg"}]},{id:8737,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8737",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8737/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8737/promoBig.jpg"}]},{id:8738,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8738",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8738/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8738/promoBig.jpg"}]},{id:8739,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8739",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8739/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8739/promoBig.jpg"}]},{id:8740,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8740",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8740/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8740/promoBig.jpg"}]},{id:8741,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8741",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8741/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8741/promoBig.jpg"}]},{id:8742,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"TOME_OF_DEMONS",link:"/item?id=8742",catalogIndex:"/catalog",imageBig:"src/static/minis/tome_of_demons/8742/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/tome_of_demons/8742/promoBig.jpg"}]},{id:8770,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8770",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8770/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8770/promoBig.jpg"}]},{id:8771,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8771",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8771/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8771/promoBig.jpg"}]},{id:8772,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8772",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8772/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8772/promoBig.jpg"}]},{id:8773,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8773",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8773/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8773/promoBig.jpg"}]},{id:8774,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8774",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8774/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8774/promoBig.jpg"}]},{id:8775,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8775",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8775/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8775/promoBig.jpg"}]},{id:8776,active:!0,sculptPrice:"R$ 260,00",patreon:"archvillain games",collection:"AFFLICTION",link:"/item?id=8776",catalogIndex:"/catalog",imageBig:"src/static/minis/affliction/8776/promoBig.jpg",catalogText:"Miniatura em resina, 15 cm de altura, pintada em detalhes metálicos a mão.",gallery:[{image:"src/static/minis/affliction/8776/promoBig.jpg"}]}]};if(null==a||null==a||null==i||null==i)return t;if(null==i||null==i){for(var e={items:[]},n="!"==a[0]?a.substring(1):"",o=0;o<t.items.length;o++)"!"==a[0]?t.items[o].tag!=n&&e.items.push(t.items[o]):t.items[o].tag==a&&e.items.push(t.items[o]);return e}for(var r=0;r<t.items.length;r++)if(t.items[r].id.toString()==i.toString())return t.items[r]}}],null&&s(i.prototype,null),t&&s(i,t),a}();function d(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var p=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"getHtml",value:function(){var a=localStorage.getItem("userName");return"null"!=a&&null!=a&&(document.getElementById("myAppUserLogin").innerHTML="Bem-vindo, <strong><a href='/cart' style='color:white'> ".concat(a," </a></strong><br>")),""}}],null&&d(i.prototype,null),t&&d(i,t),a}();function u(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var f=function(){function a(){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a)}var i,t;return i=a,t=[{key:"getHtml",value:function(){p.getHtml(),document.getElementById("myAppMenu").innerHTML=e.getHtml(),document.getElementById("myAppFooter").innerHTML=o.getHtml();var a=g.getAll();return document.getElementById("myAppCatalog").innerHTML=m.getHtml(a),""}}],null&&u(i.prototype,null),t&&u(i,t),a}();function h(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var v=function(){function a(i){!function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a),this.params=i}var i,t;return i=a,(t=[{key:"getHtml",value:function(){return f.getHtml()}}])&&h(i.prototype,t),a}();function y(a,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}var _=function(){function a(i){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,a),this.url=i}return i=a,(t=[{key:"getHtml",value:function(){var a=this.url,i={id:null},t=a.split("/");return a="/"+t[1],t.length>=2&&(i.id=t[2]),"".concat(new v(i).getHtml())}}])&&y(i.prototype,t),e&&y(i,e),a;var i,t,e}(),b=function(){document.querySelector("#myApp").innerHTML=new _(window.location.pathname).getHtml()};window.addEventListener("popstate",b),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(a){var i;a.target.matches("[data-link]")&&(a.preventDefault(),i=a.target.href,history.pushState(null,null,i),b())})),b()}))})();
//# sourceMappingURL=Catalog.js.map