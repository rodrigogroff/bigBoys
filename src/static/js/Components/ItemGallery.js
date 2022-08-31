
import Catalogo from "@app/Database/CatalogoMinis";
import CatalogoPoster from "@app/Database/CatalogoPosters";

export default class {

    static getHtml() {

        var _par = Object.fromEntries(new URLSearchParams(location.search))
        var obj = Catalogo.getAll('', _par.id);

        if (obj == null)
            obj = CatalogoPoster.getAll('', _par.id);

        var carousel = '<ol class="carousel-indicators">';

        for (var a = 0; a < obj.gallery.length; a++) {
            if (a == 0)
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class="active"></li>`
            else
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class=""></li>`
        }

        carousel += `</ol><div class="carousel-inner">`

        for (var a = 0; a < obj.gallery.length; a++) {
            var b = 8 - a;
            var c = obj.gallery[a]
            if (a == 0)
                carousel += `<div class="active item " data-slide-no="${a}"><a href='${c.image}'><img alt="${b}" src="${c.image}" /></a></div>`
            else
                carousel += `<div class="item " data-slide-no="${a}"><a href='${c.image}'><img alt="${b}" src="${c.image}" /></a></div>`
        }

        carousel += `</div><a class="carousel-control left" href="#bootstrap-carousel" data-slide="prev"></a><a
        class="carousel-control right" href="#bootstrap-carousel" data-slide="next"></a>`

        var buyer = `<span style='text-size:small'>Opções de compra</span><br>
        <h4 style='color:green'>
            A3 - R$ 138,00<br>
            Altura: 42cm, Largura: 30cm<br>
            <br>
            <div id="add" class="button" data="${obj.id}" option="1"> Acrescentar no carrinho </div>
            <br>
            A2 - R$ 180,00<br>
            Altura: 60cm, Largura: 42cm<br>
            <br>
            <div id="add" class="button" data="${obj.id}" option="2"> Acrescentar no carrinho </div>
            <br>
        </h4>
        <br>`

        if (obj.sculptPrice != null && obj.sculptPrice != undefined) {
            buyer = `<h4 style='color:green'>
            <div id="add" class="button" data="${obj.id}" option="2"> Acrescentar no carrinho </div><br>
            ${obj.sculptPrice}<br>
            ${obj.catalogText}<br>
            </h4>`
        }

        document.getElementById('myAppCarousel').innerHTML = carousel;
        document.getElementById('myAppInfo').innerHTML = `<span style='text-size:small'>Criado por:</span><br>
                                                            <h4 style='color:black'>${obj.patreon}</h4>
                                                            <br>
                                                            ${buyer}                
                                                            `;

        return ""
    }
}
