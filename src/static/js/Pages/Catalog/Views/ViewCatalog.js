
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import Catalogo from "@app/Components/Catalogo";
import CatalogoDb from "@app/Database/CatalogoMinis";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()     
    var items = CatalogoDb.getAll();      
    document.getElementById('myAppCatalog').innerHTML = Catalogo.getHtml(items)     
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict