
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
                carousel += `<div class="active item " data-slide-no="${a}"><img alt="${b}" src="${c.image}" /></div>`
            else
                carousel += `<div class="item " data-slide-no="${a}"><img alt="${b}" src="${c.image}" /></div>`
        }

        carousel += `</div><a class="carousel-control left" href="#bootstrap-carousel" data-slide="prev"></a><a
        class="carousel-control right" href="#bootstrap-carousel" data-slide="next"></a>`

        return `<div class="container-fluid portfolio">
      <div class="container">
          <div class="col-md-12 col-lg-12">              
              <div id="myCarousel" style='padding-top:20px'>
                  <div id="bootstrap-carousel" class="carousel slide ">${carousel}</div>
                  <script type="text/javascript">
                      // <![CDATA[
                      jQuery(document).ready(function () {
                          jQuery('#bootstrap-carousel').carousel({ interval: 5000, pause: "hover" });
                      });
                      // ]]>
                  </script>
              </div>
          </div>
          <div class="col-md-4 col-lg-4">              
              <div class="wcontainer pinfo" style='margin-top:20px'>
                <span style='text-size:small'>Criado por:</span><br>
                <h4 style='color:black'>${obj.patreon}</h4>
                <span style='text-size:small'>Preço</span><br>
                <h4 style='color:green'>
                    <a style='text-size:large;color:green' href='https://api.whatsapp.com/send?phone=5551995152432&text=Big%20Boys%20Store - Venda PIX Item ${obj.id}'>${obj.price}</a><br>
                </h4>
                <br>                
                <span style='text-size:small'>Sobre o item</span><br>
                <h4 style='color:black'>${obj.catalogText}</h4>
              </div>
          </div>
      </div>
      <br><br>
  </div>`
    }
}
