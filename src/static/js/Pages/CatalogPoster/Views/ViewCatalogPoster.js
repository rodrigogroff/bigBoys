
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import Catalogo from "@app/Components/Catalogo";
import UserLogin from "@app/Components/UserLogin";
import PortalTitle from "@app/Components/PortalTitle";
import { postPublicPortal } from "@app/Infra/Util"

export default class {
  static getHtml() {

    PortalTitle.getHtml();
    UserLogin.getHtml();

    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()

    postPublicPortal("v1/sale/sale_detail_listing", { option: 1, catalog: '' })
      .then((resp) => {
        document.getElementById('myAppCatalog').innerHTML = Catalogo.getHtml(resp.payload.items)
      });

    return '';
  }
}
