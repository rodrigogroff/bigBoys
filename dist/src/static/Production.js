(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,r=[{key:"getAll",value:function(){return{items:[{label:"Site",link:"",subs:[{label:"Login",link:"/login"},{label:"Registrar-se",link:"/register"},{label:"Meus pedidos",link:"/production"},{label:"Preferidos",link:"/wishlist"},{label:"Dúvidas",link:"/faq"},{label:"Sair",link:"/logout"}]},{label:"Quadros",link:"/catalog_poster",subs:[]},{label:"Miniaturas",link:"/catalog",subs:[]}]}}}],null&&t(n.prototype,null),r&&t(n,r),e}();function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,a;return r=t,a=[{key:"getHtml",value:function(){for(var t=e.getAll(),n=1350,r='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',a=0;a<t.items.length;++a){n++;var l=t.items[a];if(r+='<li id="menu-item-'+n+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+n+'" style="margin-right:20px">',r+='<a href="'+l.link+'">'+l.label+"</a>",l.subs.length>0){r+='<ul class="sub-menu">';for(var i=0;i<l.subs.length;++i){var o=l.subs[i];r+='<li id="menu-item-"'+ ++n+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+n+'" style="margin-right:20px">',r+='<a style="color:white" href="'+o.link+'">'+o.label+"</a>",r+="</li>"}r+="</ul>"}r+="</li>"}return r+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&n(r.prototype,null),a&&n(r,a),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">\n\t\t\t<a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Dúvidas">\n\t\t\t<div class="rwb-tooltip" style=\'color:white\'>Dúvidas?</div>\n\t\t\t<img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">\n\t\t\t</a>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&a(e.prototype,null),n&&a(e,n),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){var t=localStorage.getItem("userName");return"null"!=t&&null!=t&&(document.getElementById("myAppUserLogin").innerHTML="Bem-vindo, <strong><span style='color:white'>"+t+"</span></strong><br>"),""}}],null&&i(e.prototype,null),n&&i(e,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){return o.getHtml(),document.getElementById("myAppMenu").innerHTML=r.getHtml(),document.getElementById("myAppFooter").innerHTML=l.getHtml(),""}}],null&&u(e.prototype,null),n&&u(e,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.params=e}var e,n;return e=t,(n=[{key:"getHtml",value:function(){var t=localStorage.getItem("userName");return null==t||null==t?document.getElementById("warningPage").style.display="block":document.getElementById("mainPage").style.display="block",s.getHtml()}}])&&c(e.prototype,n),t}();function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e}return e=t,(n=[{key:"getHtml",value:function(){var t=this.url,e={id:null},n=t.split("/");return t="/"+n[1],n.length>=2&&(e.id=n[2]),"".concat(new f(e).getHtml())}}])&&m(e.prototype,n),r&&m(e,r),t;var e,n,r}(),b=function(){document.querySelector("#myApp").innerHTML=new p(window.location.pathname).getHtml()};window.addEventListener("popstate",b),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){var e;t.target.matches("[data-link]")&&(t.preventDefault(),e=t.target.href,history.pushState(null,null,e),b())})),b()}))})();
//# sourceMappingURL=Production.js.map