
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import ItemGallery from "@app/Components/ItemGallery";
import UserLogin from "@app/Components/UserLogin";
import Loader from "@app/Components/Loader";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
    document.getElementById('myAppLoader').innerHTML = Loader.getHtml()
    UserLogin.getHtml()
    ItemGallery.getHtml()
    return '';
  }
}
