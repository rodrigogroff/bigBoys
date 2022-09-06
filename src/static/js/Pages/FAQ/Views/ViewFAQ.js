
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import PortalTitle from "@app/Components/PortalTitle";

export default class {
  static getHtml() {
    PortalTitle.getHtml();
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict