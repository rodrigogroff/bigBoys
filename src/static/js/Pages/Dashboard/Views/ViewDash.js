
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import DashGallery from "@app/Components/DashGallery";
import Footer from "@app/Components/Footer";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()     
    document.getElementById('myAppShow').innerHTML = DashGallery.getHtml(
      [
        { image: 'src/static/img/dash_1.png' },
      ])
    document.getElementById('myAppLancamentos1').innerHTML = Lancamentos.getHtml('GND P1')
    document.getElementById('myAppLancamentos2').innerHTML = Lancamentos.getHtml('GND P2')
    document.getElementById('myAppLancamentos3').innerHTML = Lancamentos.getHtml('GUNS')
    document.getElementById('myAppLancamentos4').innerHTML = Lancamentos.getHtml('FUTURE')    
    document.getElementById('myAppLancamentos5').innerHTML = Lancamentos.getHtml('CHARS1')        
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict