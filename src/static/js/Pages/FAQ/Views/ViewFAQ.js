
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import PortalTitle from "@app/Components/PortalTitle";
import UserLogin from "@app/Components/UserLogin";

export default class {
  static getHtml() {
    PortalTitle.getHtml();
    UserLogin.getHtml();
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict