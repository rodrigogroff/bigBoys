
import ViewLogin from "./Views/ViewLogin";
import { postPublicPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {

  constructor(params) {
    this.params = params;
    document.getElementById('email').focus();

    var txt_email = document.getElementById('email');
    var txt_cpf = document.getElementById('cpf');

    txt_cpf.addEventListener("blur", function (event) {
      document.getElementById('validation_cpf').style.display = 'none'
      if (this.value != '' && this.value.length == 14) { } else {
        document.getElementById('validation_cpf').style.display = 'block'
      }
    }, true);

    txt_email.addEventListener("blur", function (event) {
      document.getElementById('validation_email').style.display = 'none'
      if (this.value != '' && this.value.indexOf('@') > 0 && this.value.indexOf('.') > 0) { } else {
        document.getElementById('validation_email').style.display = 'block'
      }
    }, true);

    document.body.addEventListener("click", (e) => {

      switch (e.target.id) {
        case "login":

          if (txt_email.value != '' && txt_email.value.indexOf('@') > 0 && txt_email.value.indexOf('.') > 0) { } else {
            document.getElementById('validation_email').style.display = 'block'
            txt_email.focus()
          }

          if (txt_cpf.value != '' && txt_cpf.value.length == 14) { } else {
            document.getElementById('validation_cpf').style.display = 'block'
            txt_cpf.focus()
          }

          e.target.style = 'background-color:black;pointer-events:none;'

          var formData = {
            email: txt_email.value,
            cpf: txt_cpf.value,
          };

          document.getElementById('loading').style.display = 'block'
          document.getElementById('mainPageNOK').style.display = 'none'

          postPublicPortal("v1/auth/login", formData)
            .then((resp) => {
              if (resp.ok == true) {
                document.getElementById('loading').style.display = 'none'
                localStorage.setItem("token", resp.payload.token);
                localStorage.setItem("userName", resp.payload.userName);
                localStorage.setItem("mobile", resp.payload.mobile);
                window.location.href = '/production';
              }
              else {
                document.getElementById('loading').style.display = 'none'
                document.getElementById('mainPageNOK').style.display = 'block'
                document.getElementById('failMsg').innerHTML = buildErrorMsg(resp.msg)
                e.target.style = 'background-color:red;pointer-events:all;'
              }
            })
            .catch((resp) => {
              document.getElementById('loading').style.display = 'none'
              document.getElementById('mainPageNOK').style.display = 'block'
              document.getElementById('failMsg').innerHTML = buildErrorMsg()
              e.target.style = 'background-color:red;pointer-events:all;'
            });
          break;
      }
    });
  }

  getHtml() {
    return ViewLogin.getHtml();
  }
}
