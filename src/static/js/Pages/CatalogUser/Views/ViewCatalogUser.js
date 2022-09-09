
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import UserLogin from "@app/Components/UserLogin";
import PortalTitle from "@app/Components/PortalTitle";
import Catalogo from "@app/Components/Catalogo";
import { postTokenPortal } from "@app/Infra/Util"

export default class {
  static getHtml() {
    PortalTitle.getHtml();
    UserLogin.getHtml();
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()

    postTokenPortal("v1/pref/pref_list", {})
      .then((resp) => {
        document.getElementById('myAppCatalog').innerHTML = Catalogo.getHtml(resp.payload.items)
      });

    return '';
  }
}
