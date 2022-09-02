
import ViewItem from "./Views/ViewItem";
import Catalogo from "@app/Database/CatalogoMinis";
import CatalogoPoster from "@app/Database/CatalogoPosters";
import { postTokenPortal, postPublicPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {
  constructor(params) {
    this.params = params;

    function getFormData() {

      var _par = Object.fromEntries(new URLSearchParams(location.search))
      var obj = Catalogo.getAll('', _par.id);

      if (obj == null)
        obj = CatalogoPoster.getAll('', _par.id);

      var formData = {
        productId: obj.id,
      };

      console.log('formData');
      console.log(formData);

      return formData;
    }

    var token = localStorage.getItem("token");

    if (token != null && token != undefined) {

      console.log('1');

      postTokenPortal("v1/view/register", getFormData())
        .then((resp) => { })
        .catch((resp) => { });
    }
    else {

      console.log('2');

      postPublicPortal("v1/view/register_anon", getFormData())
        .then((resp) => { })
        .catch((resp) => { });
    }

    document.body.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "wishlist":
          {
            if (token != null && token != undefined) {
              postTokenPortal("v1/pref/register", getFormData())
                .then((resp) => { })
                .catch((resp) => { });
            }
            else {
              window.location.href = '/login';
            }
            break;
          }

        case "add":
          {
            var formData = getFormData();
            formData.productOption = e.target.attributes[3].value;

            document.getElementById('loading').style.display = 'block'

            postTokenPortal("v1/sale/cart_add", formData)
              .then((resp) => {
                document.getElementById('loading').style.display = 'none'
                if (resp.ok == true) {
                  window.location.href = '/cart';
                }
                else {
                  document.getElementById('mainPageNOK').style = "display:block"
                  document.getElementById('failMsg').innerHTML = buildErrorMsg(resp.msg)
                }
              })
              .catch((resp) => {

                document.getElementById('loading').style.display = 'none'
                document.getElementById('mainPageNOK').style = "display:block"
                document.getElementById('failMsg').innerHTML = buildErrorMsg()
              });

            break;
          }
      }

    });
  }

  getHtml() {
    return ViewItem.getHtml();
  }
}
