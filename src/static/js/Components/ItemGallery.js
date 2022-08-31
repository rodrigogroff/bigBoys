
import Catalogo from "@app/Database/CatalogoMinis";
import CatalogoPoster from "@app/Database/CatalogoPosters";

export default class {

    static getHtml() {

        var _par = Object.fromEntries(new URLSearchParams(location.search))
        var obj = Catalogo.getAll('', _par.id );

        if (obj == null)
            obj = CatalogoPoster.getAll('', _par.id );

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
            <a style='text-size:large;color:green' href='https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Venda PIX Item ${obj.id} - A3 138,00'>A3 - R$ 138,00</a><br>
            Altura: 42cm, Largura: 29,7cm
        </h4>
        <br>
        <h4 style='color:green'>
            <a style='text-size:large;color:green' href='https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Venda PIX Item ${obj.id} - A2 180,00'>A2 - R$ 180,00</a><br>
            Altura: 59,4cm, Largura: 42cm
        </h4>` 

        if (obj.sculptPrice != null && obj.sculptPrice != undefined)
        {
            buyer = `<h4 style='color:green'>
            <p style='text-size:large;color:green' href='https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Venda PIX Mini Item ${obj.id} - ${obj.sculptPrice}'>${obj.sculptPrice}</p><br>
            ${obj.catalogText}<br>
            </h4>`
        }

        document.getElementById('myAppCarousel').innerHTML = carousel;
        document.getElementById('myAppInfo').innerHTML = `<span style='text-size:small'>Criado por:</span><br>
                                                            <h4 style='color:black'>${obj.patreon}</h4>
                                                            <br>
                                                            ${buyer}                
                                                            <br>
                                                            <br>
                                                            <a style='color:red' href='/faq'>Clique aqui para dúvidas</a><br>`;

        return ""
    }
}
