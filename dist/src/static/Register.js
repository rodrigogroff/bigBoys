(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,l;return n=t,l=[{key:"getAll",value:function(){return{items:[{label:"Site",link:"",subs:[{label:"Login",link:"/login"},{label:"Registrar-se",link:"/register"},{label:"Carrinho",link:"/cart"},{label:"Meus pedidos",link:"/production"},{label:"Preferidos",link:"/catalog_user"},{label:"Dúvidas",link:"/faq"},{label:"Sair",link:"/logout"}]},{label:"Quadros",link:"/catalog_poster",subs:[]},{label:"Miniaturas",link:"/catalog",subs:[]}]}}}],null&&e(n.prototype,null),l&&e(n,l),t}();function n(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var l,a;return l=e,a=[{key:"getHtml",value:function(){for(var e=t.getAll(),n=1350,l='<div class="menu-main-container2"><ul id="main_menu2" class="nav2 navbar2-nav2 group2 navbar2-collapse collapse2">',a=0;a<e.items.length;++a){n++;var i=e.items[a];if(l+='<li id="menu-item-'+n+'" class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-has-children2 menu-item-'+n+'" style="margin-right:20px">',l+='<a href="'+i.link+'">'+i.label+"</a>",i.subs.length>0){l+='<ul class="sub-menu">';for(var o=0;o<i.subs.length;++o){var r=i.subs[o];l+='<li id="menu-item-"'+ ++n+' class="menu-item2 menu-item-type-post_type2 menu-item-object-page2 menu-item-'+n+'" style="margin-right:20px">',l+='<a style="color:white" href="'+r.link+'">'+r.label+"</a>",l+="</li>"}l+="</ul>"}l+="</li>"}return l+'</ul></div><div class="clear"></div><div id="magic-line"></div><div class="clear"></div>'}}],null&&n(l.prototype,null),a&&n(l,a),e}();function a(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getHtml",value:function(){return'<div class="container">\n\t\t\t\t<div align=\'center\'>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<br><br><br>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align="center">\n\t\t\t\t\t<img src="src/static/img/logo.png" alt="logo" width="221px" height="80px"  />\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src="src/static/img/logo_2.png" alt="logo"width="373px" height="55px" />\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t\t<link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css">\n\t\t\t<a id="robbu-whatsapp-button" target="_blank" href="https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Dúvidas">\n\t\t\t<div class="rwb-tooltip" style=\'color:white\'>Dúvidas?</div>\n\t\t\t<img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg">\n\t\t\t</a>\n\t\t\t<br>            \n            <br>    \n            '}}],null&&a(t.prototype,null),n&&a(t,n),e}();function o(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getHtml",value:function(){return'<span class="loadingio-spinner-spinner-4rb4hgyrsge" id=\'loading\' style="display: none">\n                <div class="ldio-k0jb5gkv3kn"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n                </div></span>'}}],null&&o(t.prototype,null),n&&o(t,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getHtml",value:function(){return document.getElementById("portal_title").textContent="Big Boys - Colecionáveis",""}}],null&&s(t.prototype,null),n&&s(t,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getHtml",value:function(){return d.getHtml(),document.getElementById("myAppMenu").innerHTML=l.getHtml(),document.getElementById("myAppFooter").innerHTML=i.getHtml(),document.getElementById("myAppLoader").innerHTML=r.getHtml(),IMask(document.getElementById("mobile"),{mask:[{mask:"(00) 0 0000-0000"}]}),IMask(document.getElementById("cpf"),{mask:[{mask:"000.000.000-00"}]}),""}}],null&&u(t.prototype,null),n&&u(t,n),e}();function m(e){return null==e&&(e="Area restrita!<br><br>Favor logar-se no sistema <a href='/login' style='color:blue' >aqui</a>"),"\n  <div id=\"myModal\" class=\"modal\" style='display:block'>\n    <div style='margin: 15% auto' align='center'>\n      <div style='background-color:white;width:400px;color:black'>\n        <div style='background-color:red;width:400px' align='center'>\n          <table style='width:380px'>\n            <tr>\n              <td><h3 style='color:white;margin-top:2px;margin-bottom:2px;'> Aviso do sistema</h3></td>\n              <td width='140px'> </td>\n              <td align='right'> &nbsp;&nbsp;&nbsp;<h3 class=\"close\" style='margin-top:2px;' onclick=\"document.getElementById('myModal').style.display = 'none'\">&times;</h3></td>\n            </tr>\n          </table>    \n        </div>  \n        <br><br>\n        <h4 style='color:black'>".concat(e,"</h4><br>\n        <br>\n        <br>\n        <br>\n      </div>  \n    </div>\n  </div>")}function y(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,document.getElementById("name").focus(),document.body.addEventListener("click",(function(e){var t,n,l,a=document.getElementById("name"),i=document.getElementById("mobile"),o=document.getElementById("cpf"),r=document.getElementById("email"),s=document.getElementById("location");switch(e.target.id){case"continue":s.addEventListener("keyup",(function(e){"Enter"===e.key&&(document.getElementById("gmap_canvas").src="https://maps.google.com/maps?q="+s.value+"&t=&z=13&ie=UTF8&iwloc=&output=embed")})),a.addEventListener("blur",(function(e){document.getElementById("validation_name").style.display="none",""!=this.value&&this.value.trim().indexOf(" ")>0||(document.getElementById("validation_name").style.display="block")}),!0),i.addEventListener("blur",(function(e){document.getElementById("validation_mobile").style.display="none",""!=this.value&&16==this.value.length||(document.getElementById("validation_mobile").style.display="block")}),!0),o.addEventListener("blur",(function(e){document.getElementById("validation_cpf").style.display="none",""!=this.value&&14==this.value.length||(document.getElementById("validation_cpf").style.display="block")}),!0),r.addEventListener("blur",(function(e){document.getElementById("validation_email").style.display="none",""!=this.value&&this.value.indexOf("@")>0&&this.value.indexOf(".")>0||(document.getElementById("validation_email").style.display="block")}),!0),s.addEventListener("blur",(function(e){document.getElementById("validation_location").style.display="none",""!=this.value&&this.value.length>25||(document.getElementById("validation_location").style.display="block")}),!0),document.getElementById("validation_name").style.display="none",document.getElementById("validation_mobile").style.display="none",document.getElementById("validation_email").style.display="none",document.getElementById("validation_location").style.display="none",document.getElementById("validation_cpf").style.display="none";var d=!0;""!=s.value&&s.value.length>25||(document.getElementById("validation_location").style.display="block",d=!1,s.focus()),""!=r.value&&r.value.indexOf("@")>0&&r.value.indexOf(".")>0||(document.getElementById("validation_email").style.display="block",d=!1,r.focus()),""!=o.value&&14==o.value.length||(document.getElementById("validation_cpf").style.display="block",d=!1,o.focus()),""!=i.value&&16==i.value.length||(document.getElementById("validation_mobile").style.display="block",d=!1,i.focus()),""!=a.value&&a.value.trim().indexOf(" ")>0||(document.getElementById("validation_name").style.display="block",d=!1,a.focus()),1==d&&(document.getElementById("form_register_btn_continue").style.display="none",document.getElementById("form_register_btn_confirm").style.display="block",document.getElementById("mapOuter").style.display="block",document.getElementById("gmap_canvas").style.display="block",document.getElementById("gmap_canvas").src="https://maps.google.com/maps?q="+s.value+"&t=&z=13&ie=UTF8&iwloc=&output=embed");break;case"confirm":var u={name:a.value,email:r.value,mobile:i.value,gmap:s.value,cpf:o.value};e.target.style="background-color:black;pointer-events:none;",document.getElementById("confirm").style.backgroundColor="DarkRed",document.getElementById("loading").style.display="block",("v1/auth/register",t=u,n=function(){var e="__API_indexPos",t=sessionStorage.getItem(e);null==t&&(t=0);var n=parseInt(t),l=[{api_host:"http://localhost",api_port:18524}];return++n>=l.length&&(n=0),sessionStorage.setItem(e,n),l[n]}(),l=JSON.stringify(t),new Promise((function(e,t){fetch(n.api_host+":"+n.api_port+"/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:l}).then((function(n){400===n.status?n.json().then((function(e){t({ok:!1,msg:e.message})})):!0===n.ok?n.json().then((function(t){e({ok:!0,payload:t})})):n.json().then((function(t){e({ok:!1,unauthorized:401==n.status,msg:t.message})}))})).catch((function(e){t({ok:!1,msg:"Ops, aconteceu um erro!"})}))}))).then((function(t){!0===t.ok?(document.getElementById("loading").style.display="none",document.getElementById("mainPageNOK").style.display="none",document.getElementById("mainPageDiv").style.display="none",document.getElementById("mainPageOK").style.display="block"):(document.getElementById("loading").style.display="none",document.getElementById("mainPageNOK").style.display="block",e.target.style="background-color:red;pointer-events:all;",document.getElementById("failMsg").innerHTML=m())})).catch((function(t){document.getElementById("loading").style.display="none",document.getElementById("mainPageNOK").style.display="block",e.target.style="background-color:red;pointer-events:all;",document.getElementById("failMsg").innerHTML=m(t.msg)}))}}))}var t,n;return t=e,(n=[{key:"getHtml",value:function(){return c.getHtml()}}])&&y(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var p=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.url=t}return t=e,(n=[{key:"getHtml",value:function(){var e=this.url,t={id:null},n=e.split("/");return e="/"+n[1],n.length>=2&&(t.id=n[2]),"".concat(new g(t).getHtml())}}])&&v(t.prototype,n),l&&v(t,l),e;var t,n,l}(),b=function(){document.querySelector("#myApp").innerHTML=new p(window.location.pathname).getHtml()};window.addEventListener("popstate",b),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(e){var t;e.target.matches("[data-link]")&&(e.preventDefault(),t=e.target.href,history.pushState(null,null,t),b())})),b()}))})();
//# sourceMappingURL=Register.js.map