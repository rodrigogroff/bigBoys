
import Catalogo from "@app/Database/CatalogoPosters";

export default class {

  static getHtml(filter) {
    
    var db = Catalogo.getAll(filter);

    var fullHtml = `<div class="wpb_wrapper">
                    <div id="owl-carousel-lancs" class="owl-carousel" 
					          data-owloptions='{"items":4,"itemsDesktop":4,"itemsDesktopSmall":3,"itemsTablet":2,"itemsMobile":1,"slideSpeed":200,"paginationSpeed":800,"rewindSpeed":1000,"rewindNav":true,"singleItem":false,"autoPlay":0,"stopOnHover":false,"navigation":false,"navigationTextNext":"Next","navigationTextPrev":"Prev","pagination":true,"paginationNumbers":false,"itemsScaleUp":false,"scrollPerPage":false,"responsive":true,"responsiveRefreshRate":200,"lazyLoad":false,"lazyFollow":false,"autoHeight":false,"dragBeforeAnimFinish":true,"mouseDrag":true,"touchDrag":true,"addClassActive":false}'>
                    `
	
	  var liItem = 1;
    for(let a = 0; a < db.items.length; ++a)
    {
      liItem++;
      var m = db.items[a];
      if (m.active == false)
        continue;
      fullHtml +=  `<div style='margin-left:8px'>
                      <a class="car_image ${liItem}" href="${m.link}">
                        <img alt="image" src="${m.image}" />
                      </a>
                      <style> .car_image.${liItem}:after { background-color: rgba(0, 0, 0, 0.3) } </style>
                      <a href="" class="ncategory" style="background-color: red !important"> ${m.patreon} </a>
                        <div class="car_title">
                          <a class="car_inner_title" href="${m.link}">${m.text}</a>
                          <p class="carousel-text">${m.subtext}</p>
                          <p class="post-meta"><span>${m.date}</span></p>
                        </div>
                      </a>
                    </div>`;
	}

    fullHtml +=  `</div></div>`
    
    return fullHtml;
  }
}
