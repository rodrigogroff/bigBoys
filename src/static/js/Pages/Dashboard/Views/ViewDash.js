
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import DashGallery from "@app/Components/DashGallery";
import Footer from "@app/Components/Footer";
import WallpaperControl from "@app/Components/WallpaperControl";
import Shuffle from "@app/Components/Shuffle";

export default class {
  static getHtml() {
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
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 

    WallpaperControl.getHtml() 

    $("[data-lazy-load-image]").each(function (index, element) {
      var img = new Image();
      img.src = $(element).data("lazy-load-image");
      if (typeof $(element).data("image-classname" !== "undefined"))
          img.className = $(element).data("image-classname");
      $(element).append(img);
    });
    
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict