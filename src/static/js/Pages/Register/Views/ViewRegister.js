
import Menu from "@app/Components/Menu";
import Footer from "@app/Components/Footer";
import Loader from "@app/Components/Loader";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
    document.getElementById('myAppLoader').innerHTML = Loader.getHtml() 

    IMask(document.getElementById('mobile'), { mask: [ { mask: '(00) 0 0000-0000' } ]  });

    return '';
  }
}

//https://skywarriorthemes.com/gameaddict