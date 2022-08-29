
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import DashGallery from "@app/Components/DashGallery";
import Footer from "@app/Components/Footer";
import WallpaperControl from "@app/Components/WallpaperControl";
import Shuffle from "@app/Components/Shuffle";

export default class {
  static getHtml() {

    WallpaperControl.getHtml() 

    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()     

    var gal = [        
      { image: 'src/static/img/dash_1.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_4.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_2.jpg', width: '883px', height: '643px' },
      { image: 'src/static/img/dash_3.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_7.jpg', width: '857px', height: '643px' },
      { image: 'src/static/img/dash_6.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_9.jpg', width: '1080px', height: '643px' },        
    ];

    gal = Shuffle.sort(gal)
    
    document.getElementById('myAppShow').innerHTML = DashGallery.getHtml(gal)

    document.getElementById('myAppLancamentos1').innerHTML = Lancamentos.getHtml('GND P1')
    document.getElementById('myAppLancamentos2').innerHTML = Lancamentos.getHtml('GND P2')
    document.getElementById('myAppLancamentos3').innerHTML = Lancamentos.getHtml('GUNS')
    document.getElementById('myAppLancamentos4').innerHTML = Lancamentos.getHtml('FUTURE')    
    document.getElementById('myAppLancamentos5').innerHTML = Lancamentos.getHtml('CHARS1')        

    document.getElementById('myAppLancamentosM1').innerHTML = Lancamentos.getHtml('ORCS_POWER') 
    document.getElementById('myAppLancamentosM2').innerHTML = Lancamentos.getHtml('HORDE_DREADMARSH')
    document.getElementById('myAppLancamentosM3').innerHTML = Lancamentos.getHtml('TOME_OF_DEMONS')
    document.getElementById('myAppLancamentosM4').innerHTML = Lancamentos.getHtml('AFFLICTION')

    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
 
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict