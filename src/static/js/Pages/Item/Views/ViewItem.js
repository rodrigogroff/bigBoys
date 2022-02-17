
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import ItemGallery from "@app/Components/ItemGallery";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
    document.getElementById('myAppItemGallery').innerHTML = ItemGallery.getHtml() 
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict