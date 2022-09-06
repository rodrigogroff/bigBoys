
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import Loader from "@app/Components/Loader";
import PortalTitle from "@app/Components/PortalTitle";

export default class {
  static getHtml() {
    PortalTitle.getHtml();
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    document.getElementById('myAppLoader').innerHTML = Loader.getHtml()
    IMask(document.getElementById('mobile'), { mask: [{ mask: '(00) 0 0000-0000' }] });
    IMask(document.getElementById('cpf'), { mask: [{ mask: '000.000.000-00' }] });
    return '';
  }
}
