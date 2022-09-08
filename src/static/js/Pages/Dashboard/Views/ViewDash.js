
import Menu from "@app/Components/Menu";
import Catalogo from "@app/Components/Catalogo";
import DashGallery from "@app/Components/DashGallery";
import Footer from "@app/Components/Footer";
import WallpaperControl from "@app/Components/WallpaperControl";
import PortalTitle from "@app/Components/PortalTitle";
import Shuffle from "@app/Components/Shuffle";
import UserLogin from "@app/Components/UserLogin";
import { postPublicPortal } from "@app/Infra/Util"

export default class {
  static getHtml() {

    PortalTitle.getHtml();
    WallpaperControl.getHtml();
    UserLogin.getHtml();

    document.getElementById('myAppMenu').innerHTML = Menu.getHtml()

    var gal = [
      { image: 'src/static/img/dash_1.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_4.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_2.jpg', width: '883px', height: '643px' },
      { image: 'src/static/img/dash_3.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_6.jpg', width: '1080px', height: '643px' },
      { image: 'src/static/img/dash_9.jpg', width: '1080px', height: '643px' },
    ];

    gal = Shuffle.sort(gal)

    document.getElementById('myAppShow').innerHTML = DashGallery.getHtml(gal)

    postPublicPortal("v1/sale/sale_detail_listing", { option: 1, catalog: '*' })
      .then((resp) => {
        document.getElementById('myAppLancamentos1').innerHTML = Catalogo.getHtml(resp.payload.items)
      });

    document.getElementById('myAppFooter').innerHTML = Footer.getHtml()
  }
}
