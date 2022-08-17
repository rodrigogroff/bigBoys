
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import Noticias from "@app/Components/Noticias";
import Footer from "@app/Components/Footer";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppLancamentos').innerHTML = Lancamentos.getHtml()     
    //document.getElementById('myAppNoticias').innerHTML = Noticias.getHtml() 
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
    return '';
  }
}

/*

	<div style="width:0;height:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;border-top:0;border-right:0;border-bottom:0;border-left:0;font-family:0;font-size:0;line-height:0;color:0;background:0;border-radius:0;top:343px;left:721px;"
													class="ls-l"
													data-ls="offsetxin:80;offsetxout:-80;durationout:400;parallaxlevel:0;">
													<h2>ARTE EM MINIATURA</h2>
													<p><strong>Estatuetas de alta qualidade</strong> vindas de<br>
														patreons digitais autorizados do mundo todo.
													</p>
													<a class="button-medium btninvert" href="/catalog">Confira!</a>
												</div>

                        */

//https://skywarriorthemes.com/gameaddict