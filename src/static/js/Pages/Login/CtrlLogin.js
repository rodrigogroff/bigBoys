
import ViewLogin from "./Views/ViewLogin";
import { postPublicPortal } from "@app/Infra/Util"

export default class {

  constructor(params) {
    this.params = params;   
    document.getElementById('email').focus();

    var txt_email = document.getElementById('email');
    var txt_mobile = document.getElementById('mobile');

    txt_mobile.addEventListener("blur", function( event ) {          
      document.getElementById('validation_mobile').style.display = 'none'
      if (this.value != '' && this.value.length == 16) { } else {
        document.getElementById('validation_mobile').style.display = 'block'          
      }
    }, true);

    txt_email.addEventListener("blur", function( event ) {          
      document.getElementById('validation_email').style.display = 'none'
      if (this.value != '' && this.value.indexOf('@') > 0 && this.value.indexOf('.') > 0) { } else {
        document.getElementById('validation_email').style.display = 'block'          
      }
    }, true);

    document.body.addEventListener("click", (e) => {  

      switch (e.target.id) {
        case "login":

          if (txt_email.value != '' && txt_email.value.indexOf('@') > 0 && txt_email.value.indexOf('.') > 0) { } else 
          {
            document.getElementById('validation_email').style.display = 'block'          
            passed = false;
            txt_email.focus()
          }

          if (txt_mobile.value != '' && txt_mobile.value.length == 16) { } else 
          {
            document.getElementById('validation_mobile').style.display = 'block'          
            passed = false;
            txt_mobile.focus()
          }

          var formData = {
            email: txt_email.value,
            mobile: txt_mobile.value,
          };

          document.getElementById('form_btn_login').style.pointerEvents = "none";
          document.getElementById('login').style.backgroundColor = 'DarkRed'
          document.getElementById('loading').style.display = 'block'
          document.getElementById('mainPageNOK').style.display = 'none'

          postPublicPortal("v1/auth/login", formData)
          .then((resp) => {
            document.getElementById('loading').style.display = 'none'     
            localStorage.setItem("token", resp.token);       
            window.location.href = '/';
          })
          .catch((resp) => {
            document.getElementById('loading').style.display = 'none'
            document.getElementById('form_btn_login').style.pointerEvents = "all";
            document.getElementById('login').style.backgroundColor = 'red'
            document.getElementById('mainPageNOK').style.display = 'block'            
            document.getElementById('failMsg').innerHTML = '<span style="color:gray">Falha<br></span> ' + resp.msg
          });
          
          break;
        }
      });
    }
  
    getHtml() {
    return ViewLogin.getHtml();
  }
}
