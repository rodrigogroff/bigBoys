(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,r=[{key:"getAll",value:function(){return{items:[{label:"Catálogo",link:"",subs:[{label:"Quadros",link:"/catalog_poster"},{label:"Miniaturas",link:"/catalog"}]},{label:"Empresa",link:"",subs:[{label:"Produção",link:"/production"},{label:"Dúvidas",link:"/faq"}]}]}}}],null&&t(n.prototype,null),r&&t(n,r),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,i;return r=t,i=[{key:"getHtml",value:function(){for(var t=e.getAll(),n=1350,r='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',i=0;i<t.items.length;++i){n++;var a=t.items[i];if(r+='<li id="menu-item-'+n+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+n+'">',r+='<a href="'+a.link+'">'+a.label+"</a>",a.subs.length>0){r+='<ul class="sub-menu">';for(var l=0;l<a.subs.length;++l){var o=a.subs[l];r+='<li id="menu-item-"'+ ++n+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+n+'">',r+='<a style="color:white" href="'+o.link+'">'+o.label+"</a>",r+="</li>"}r+="</ul>"}r+="</li>"}return r+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&n(r.prototype,null),i&&n(r,i),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&i(e.prototype,null),n&&i(e,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(t,e){var n="";if(0==t.items.length)return"Peças em fase de aquisição / fabricação<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";n+="<div align='center' style='width:120%'><div class='flex-container'>";for(var r=0;r<t.items.length;r++){var i=t.items[r];1==i.active&&(null!=e&&""!=e?i.collection==e&&(n+="<div id='".concat(i.id,"'>\n                                    <img src=\"").concat(i.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(i.id,'" >\n                                </div>')):n+="<div id='".concat(i.id,"'>\n                            <img src=\"").concat(i.imageBig,"\" alt=\"cat figure\" style='cursor:pointer;height:320px' onclick=\"document.location = '/item?id=' + ").concat(i.id,'" >\n                        </div>'))}return t.items.length>0&&(n+="</div></div>"),n}}],null&&l(e.prototype,null),n&&l(e,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getAll",value:function(t,e){var n={items:[]};if(null==t||null==t||null==e||null==e)return n;if(null==e||null==e){for(var r={items:[]},i="!"==t[0]?t.substring(1):"",a=0;a<n.items.length;a++)"!"==t[0]?n.items[a].tag!=i&&r.items.push(n.items[a]):n.items[a].tag==t&&r.items.push(n.items[a]);return r}for(var l=0;l<n.items.length;l++)if(n.items[l].id.toString()==e.toString())return n.items[l]}}],null&&u(e.prototype,null),n&&u(e,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){document.getElementById("myAppMenu").innerHTML=r.getHtml(),document.getElementById("myAppFooter").innerHTML=a.getHtml();var t=c.getAll();return document.getElementById("myAppCatalog").innerHTML=o.getHtml(t),""}}],null&&s(e.prototype,null),n&&s(e,n),t}();function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.params=e}var e,n;return e=t,(n=[{key:"getHtml",value:function(){return f.getHtml()}}])&&b(e.prototype,n),t}();function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e}return e=t,(n=[{key:"getHtml",value:function(){var t=this.url,e={id:null},n=t.split("/");return t="/"+n[1],n.length>=2&&(e.id=n[2]),"".concat(new m(e).getHtml())}}])&&v(e.prototype,n),r&&v(e,r),t;var e,n,r}(),d=function(){document.querySelector("#myApp").innerHTML=new g(window.location.pathname).getHtml()};window.addEventListener("popstate",d),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){var e;t.target.matches("[data-link]")&&(t.preventDefault(),e=t.target.href,history.pushState(null,null,e),d())})),d()}))})();
//# sourceMappingURL=Catalog.js.map