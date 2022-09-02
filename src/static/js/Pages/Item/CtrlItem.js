
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
      return formData;
    }

    var token = localStorage.getItem("token");

    if (token != null && token != undefined) {
      postTokenPortal("v1/view/register", getFormData())
        .then((resp) => { })
        .catch((resp) => { });
      postTokenPortal("v1/pref/pref_list", getFormData())
        .then((resp) => {
          var _par = Object.fromEntries(new URLSearchParams(location.search))
          var found = false;
          for (let i = 0; i < resp.payload.items.length; i++) {
            var a = resp.payload.items[i]
            if (a.productId == _par.id) {
              found = true;
              break;
            }
          }
          if (found == true) {
            document.getElementById('wishlist_rem').style.display = 'block'
            document.getElementById('wishlist').style.display = 'none'
          }
          else {
            document.getElementById('wishlist_rem').style.display = 'none'
            document.getElementById('wishlist').style.display = 'block'
          }
        })
        .catch((resp) => { });
    }
    else {
      postPublicPortal("v1/view/register_anon", getFormData())
        .then((resp) => {

        })
        .catch((resp) => { });
    }

    document.body.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "wishlist":
          {
            if (token != null && token != undefined) {
              postTokenPortal("v1/pref/register", getFormData())
                .then((resp) => {
                  document.getElementById('wishlist').style.display = 'none'
                  document.getElementById('wishlist_rem').style.display = 'block'
                })
                .catch((resp) => { });
            }
            else
              window.location.href = '/login';
            break;
          }

        case "wishlist_rem":
          {
            if (token != null && token != undefined) {
              postTokenPortal("v1/pref/pref_remove", getFormData())
                .then((resp) => {
                  document.getElementById('wishlist').style.display = 'block'
                  document.getElementById('wishlist_rem').style.display = 'none'
                })
                .catch((resp) => { });
            }
            else
              window.location.href = '/login';
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
