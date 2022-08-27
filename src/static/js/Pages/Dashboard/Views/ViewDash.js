
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import DashGallery from "@app/Components/DashGallery";
import Footer from "@app/Components/Footer";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()     
    document.getElementById('myAppShow').innerHTML = DashGallery.getHtml(
      [        
        { image: 'src/static/img/dash_4.jpg', width: '1080px', height: '643px' },        
        { image: 'src/static/img/dash_9.jpg', width: '1080px', height: '643px' },        
        { image: 'src/static/img/dash_3.jpg', width: '1080px', height: '643px' },
        { image: 'src/static/img/dash_6.jpg', width: '1080px', height: '643px' },
        { image: 'src/static/img/dash_7.jpg', width: '857px', height: '643px' },
        { image: 'src/static/img/dash_8.jpg', width: '943px', height: '643px' },
        { image: 'src/static/img/dash_1.jpg', width: '1080px', height: '643px' },
        { image: 'src/static/img/dash_2.jpg', width: '883px', height: '643px' },
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