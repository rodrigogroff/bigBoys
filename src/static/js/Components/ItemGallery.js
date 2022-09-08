
import { postTokenPortal } from "@app/Infra/Util"

export default class {

    static getHtml() {

        var _par = Object.fromEntries(new URLSearchParams(location.search))

        postTokenPortal("v1/sale/sale_detail", { sale_id: _par.id })
            .then((resp) => {

                var m = resp.payload.detail

                var carousel = '<ol class="carousel-indicators">';

                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="0" class="active"></li>`
                carousel += `</ol><div class="carousel-inner">`

                if (m.id < 8000)
                    carousel += `<div class="active item " data-slide-no="0"><a href='src/static/products/${m.id}/preview.jpg'><img alt="img0" src="src/static/products/${m.id}/promoBig.jpg" /></a></div>`
                else
                    carousel += `<div class="active item " data-slide-no="0"><a href='src/static/products/${m.id}/promoBig.jpg'><img alt="img0" src="src/static/products/${m.id}/promoBig.jpg" /></a></div>`

                /*
            for (var a = 0; a < obj.gallery.length; a++) {
                var b = 8 - a;
                var c = obj.gallery[a]
                if (a == 0)
                    carousel += `<div class="active item " data-slide-no="${a}"><a href='${c.image}'><img alt="${b}" src="${c.image}" /></a></div>`
                else
                    carousel += `<div class="item " data-slide-no="${a}"><a href='${c.image}'><img alt="${b}" src="${c.image}" /></a></div>`
            } */

                carousel += `</div><a class="carousel-control left" href="#bootstrap-carousel" data-slide="prev"></a><a
                class="carousel-control right" href="#bootstrap-carousel" data-slide="next"></a>`

                var buyer = `<span style='text-size:small'>Opções de compra</span><br>
                <h4 style='color:green'>
                    A3 - R$ 138,00<br>
                    Altura: 42cm, Largura: 30cm<br>
                    <br>
                    <div id="add" class="button" data="${m.id}" option="1"> Acrescentar no carrinho </div>
                    <br>
                    A2 - R$ 180,00<br>
                    Altura: 60cm, Largura: 42cm<br>
                    <br>
                    <div id="add" class="button" data="${m.id}" option="2"> Acrescentar no carrinho </div>
                    <br>
                </h4>
                <br>`

                if (m.sculptPrice != null && m.sculptPrice != undefined) {
                    buyer = `<h4 style='color:green'>
                    <div id="add" class="button" data="${m.id}" option="2"> Acrescentar no carrinho </div><br>
                    ${m.sculptPrice}<br>
                    ${m.catalogText}<br>
                    </h4>`
                }

                document.getElementById('myAppCarousel').innerHTML = carousel;
                document.getElementById('myAppInfo').innerHTML = `<span style='text-size:small'>Criado por:</span><br>
                                                                    <h4 style='color:black'>${m.patreon}</h4>
                                                                    <br>
                                                                    ${buyer}                
                                                                    `;
            })
            .catch((resp) => { });

        return ""
    }
}
