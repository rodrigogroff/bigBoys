
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import Noticias from "@app/Components/Noticias";

//https://skywarriorthemes.com/gameaddict

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppLancamentos').innerHTML = Lancamentos.getHtml('!RPG') 
    document.getElementById('myAppLancamentosRPG').innerHTML = Lancamentos.getHtml('RPG') 
    document.getElementById('myAppNoticias').innerHTML = Noticias.getHtml() 
    return '';
  }
}
