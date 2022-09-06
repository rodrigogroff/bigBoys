
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import CatalogoUser from "@app/Components/CatalogoUser";
import UserLogin from "@app/Components/UserLogin";
import PortalTitle from "@app/Components/PortalTitle";

export default class {
  static getHtml() {
    PortalTitle.getHtml();
    UserLogin.getHtml();
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    CatalogoUser.getHtml()
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict