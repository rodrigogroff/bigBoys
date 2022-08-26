
export default class {

    static getHtml(gallery) {

        var carousel = '<ol class="carousel-indicators">';

        for (var a = 0; a < gallery.length; a++) {            
            if (a == 0)
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class="active"></li>`
            else
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class=""></li>`
        }

        carousel += `</ol><div class="carousel-inner">`

        for (var a = 0; a < gallery.length; a++) {
            var b = 8 - a;
            var c = gallery[a]
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
      </div>
      <br><br>
  </div>`
    }
}
