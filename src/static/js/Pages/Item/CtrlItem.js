
import ViewItem from "./Views/ViewItem";
import { postTokenPortal, postPublicPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {
  constructor(params) {
    this.params = params;

    function getFormData() {
      var _par = Object.fromEntries(new URLSearchParams(location.search))
      var formData = {
        productId: _par.id,
      };
      return formData;
    }

    var token = localStorage.getItem("token");

    if (token != null && token != undefined) {
      postTokenPortal("v1/view/register", getFormData())
        .then((resp) => { })
        .catch((resp) => { });
      postTokenPortal("v1/pref/pref_list", {})
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
            e.target.style = 'background-color:black;pointer-events:none;'
            if (token != null && token != undefined) {
              postTokenPortal("v1/pref/register", getFormData())
                .then((resp) => {
                  e.target.style = 'background-color:red;pointer-events:all;'
                  document.getElementById('wishlist').style = 'display:none'
                  document.getElementById('wishlist_rem').style = 'display:block'
                })
                .catch((resp) => {
                  e.target.style = 'background-color:red;pointer-events:all;'
                  document.getElementById('wishlist').style = 'display:none'
                  document.getElementById('wishlist_rem').style = 'display:block'
                });
            }
            break;
          }

        case "wishlist_rem":
          {
            e.target.style = 'background-color:black;pointer-events:none;'
            if (token != null && token != undefined) {
              postTokenPortal("v1/pref/pref_remove", getFormData())
                .then((resp) => {
                  e.target.style = 'background-color:red;pointer-events:all;'
                  document.getElementById('wishlist_rem').style = 'display:none'
                  document.getElementById('wishlist').style = 'display:block'
                })
                .catch((resp) => {
                  e.target.style = 'background-color:red;pointer-events:all;'
                  document.getElementById('wishlist_rem').style = 'display:none'
                  document.getElementById('wishlist').style = 'display:block'
                });
            }
            break;
          }

        case "add":
          {
            e.target.style = 'background-color:black;pointer-events:none;'
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
                  e.target.style = 'background-color:red;pointer-events:all;'
                }
              })
              .catch((resp) => {
                console.log(resp)
                document.getElementById('loading').style.display = 'none'
                document.getElementById('mainPageNOK').style = "display:block"
                document.getElementById('failMsg').innerHTML = buildErrorMsg(resp.msg)
                e.target.style = 'background-color:red;pointer-events:all;'
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
