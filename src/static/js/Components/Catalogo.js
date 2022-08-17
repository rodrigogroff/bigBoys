
export default class {

    static getHtml(objects) {
      
        var html = '';

        if ( objects.items.length == 0)
            return 'Peças em fase de aquisição / fabricação<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
        
        for(let a=0; a < objects.items.length; a++ )
        {
            var m = objects.items[a];
            if (m.active == true)
                html += `<div class="wpb_fadeInDown fadeInDown wpb_column vc_column_container vc_col-sm-4" id='${m.id}' style='width:30%'>
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                        <div class="member">
                                            <img src="${m.imageBig}" alt="cat figure">
                                            <h3 class="widget-title" style='top:300px;left:40px'><a href="${m.link}">${m.text}</a></h3>
                                            <div class="content"><p></p></div>
                                            <div class="blacksq"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }

        return html;
    }
  }
  
  
  
  
  