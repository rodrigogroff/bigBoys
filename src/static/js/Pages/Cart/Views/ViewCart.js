
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import UserLogin from "@app/Components/UserLogin";
import Loader from "@app/Components/Loader";

export default class {
  static getHtml() {

    UserLogin.getHtml();

    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    document.getElementById('myAppLoader').innerHTML = Loader.getHtml()
    document.getElementById('loading').style.display = 'block'

    return '';
  }
}
