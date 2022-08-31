
import ViewItem from "./Views/ViewItem";
import Catalogo from "@app/Database/CatalogoMinis";
import CatalogoPoster from "@app/Database/CatalogoPosters";
import { postTokenPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {
  constructor(params) {
    this.params = params;

    document.body.addEventListener("click", (e) => {

      console.log(e.target)

      switch (e.target.id) {
        case "wishlist":
          break;

        case "add":

          var _par = Object.fromEntries(new URLSearchParams(location.search))
          var obj = Catalogo.getAll('', _par.id);

          if (obj == null)
            obj = CatalogoPoster.getAll('', _par.id);

          var formData = {
            productId: obj.id,
            productOption: e.target.attributes[3].value,
          };

          document.getElementById('loading').style.display = 'block'

          postTokenPortal("v1/sale/cart_add", formData)
            .then((resp) => {
              document.getElementById('loading').style.display = 'none'
              if (resp.ok == true) {
                window.location.href = '/production';
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

    });
  }

  getHtml() {
    return ViewItem.getHtml();
  }
}
