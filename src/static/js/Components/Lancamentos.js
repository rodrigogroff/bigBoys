
import Catalogo from "@app/Database/CatalogoPosters";
import CatalogoMinis from "@app/Database/CatalogoMinis";
import Shuffle from "@app/Components/Shuffle";

export default class {

  static getHtml(filter) {
    
    var db = Catalogo.getAll();
    var db_mini = CatalogoMinis.getAll();

    for (let a=0; a < db_mini.items.length; a++ )
      db.items.push(db_mini.items[a]);

    var max = 4;
    var fullHtml = `<div class="wpb_wrapper">
                    <div id="owl-carousel-lancs" class="owl-carousel" 
					          data-owloptions='{"items":${max},"itemsDesktop":${max},"itemsDesktopSmall":3,"itemsTablet":2,"itemsMobile":1,"slideSpeed":200,"paginationSpeed":800,"rewindSpeed":1000,"rewindNav":true,"singleItem":false,"autoPlay":0,"stopOnHover":false,"navigation":false,"navigationTextNext":"Next","navigationTextPrev":"Prev","pagination":true,"paginationNumbers":false,"itemsScaleUp":false,"scrollPerPage":false,"responsive":true,"responsiveRefreshRate":200,"lazyLoad":false,"lazyFollow":false,"autoHeight":false,"dragBeforeAnimFinish":true,"mouseDrag":true,"touchDrag":true,"addClassActive":false}'>
                    `
	  var liItem = 1;

    db.items = Shuffle.sort(db.items);

    for(let a = 0; a < db.items.length; ++a)
    {
      liItem++;
      var m = db.items[a];
      if (m.active == false)
        continue;
      if (m.collection == filter)
      {
        fullHtml +=  `<div style='margin-left:8px'>
                      <a class="car_image ${liItem}" href="${m.link}"><img alt="image" src="${m.imageBig}" /></a>
                      <style> .car_image.${liItem}:after { background-color: rgba(0, 0, 0, 0.3) } </style>                      
                    </div>`;
      }
      else if (filter == null || filter == undefined)
      {        
        fullHtml +=  `<div style='margin-left:8px'>
                      <a class="car_image ${liItem}" href="${m.link}"><img alt="image" src="${m.imageBig}" /></a>
                      <style> .car_image.${liItem}:after { background-color: rgba(0, 0, 0, 0.3) } </style>                      
                    </div>`;
      }
  	}

    fullHtml +=  `</div></div>`
    
    return fullHtml;
  }
}
