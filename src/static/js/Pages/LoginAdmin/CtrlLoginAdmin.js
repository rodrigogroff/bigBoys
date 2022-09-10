
import ViewLogin from "./Views/ViewLoginAdmin";
import { postPublicPortal, postTokenPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {

  constructor(params) {
    this.params = params;
    document.getElementById('cpf').focus();

    var txt_cpf = document.getElementById('cpf');
    var txt_password = document.getElementById('password');

    txt_cpf.addEventListener("blur", function (event) {
      document.getElementById('validation_cpf').style.display = 'none'
      if (this.value != '' && this.value.length == 14) { } else {
        document.getElementById('validation_cpf').style.display = 'block'
      }
    }, true);

    txt_password.addEventListener("blur", function (event) {
      document.getElementById('validation_password').style.display = 'none'
      if (this.value != '') { } else {
        document.getElementById('validation_password').style.display = 'block'
      }
    }, true);

    document.body.addEventListener("click", (e) => {

      switch (e.target.id) {
        case "login":

          if (txt_cpf.value != '' && txt_cpf.value.length == 14) { } else {
            document.getElementById('validation_cpf').style.display = 'block'
            txt_cpf.focus()
          }

          if (txt_password.value != '') { } else {
            document.getElementById('validation_password').style.display = 'block'
            txt_password.focus()
          }

          e.target.style = 'background-color:black;pointer-events:none;'

          var formData = {
            cpf: txt_cpf.value,
            password: txt_password.value,
          };

          document.getElementById('loading').style.display = 'block'
          document.getElementById('mainPageNOK').style.display = 'none'

          postPublicPortal("v1/auth/login_admin", formData)
            .then((resp) => {
              if (resp.ok == true) {
                document.getElementById('loading').style.display = 'none'
                localStorage.setItem("token", resp.payload.token);
                localStorage.setItem("userName", resp.payload.userName);
                localStorage.setItem("mobile", resp.payload.mobile);

                postTokenPortal("v1/admin/stats", {})
                  .then((resp) => {

                  })

                //window.location.href = '/production';
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
