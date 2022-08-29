
import Shuffle from "@app/Components/Shuffle";

export default class {

    static getHtml(objects, collection) {
      
        var html = '';

        if (objects.items.length == 0)
            return 'Peças em fase de aquisição / fabricação<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'
        else
            html  += "<div align='center'><div class='flex-container'>";

        objects.items = Shuffle.sort(objects.items)

        for(let a=0; a < objects.items.length; a++ )
        {
            var m = objects.items[a];
            if (m.active == true)
            {
                if (collection != null && collection != "")
                {
                    if (m.collection == collection)
                    {
                        html += `<div id='${m.id}'>
                                    <img src="${m.imageBig}" alt="cat figure" style='cursor:pointer;height:320px' onclick="document.location = '/item?id=' + ${m.id}" >
                                </div>`    
                    }
                }
                else
                    html += `<div id='${m.id}'>
                            <img src="${m.imageBig}" alt="cat figure" style='cursor:pointer;height:320px' onclick="document.location = '/item?id=' + ${m.id}" >
                        </div>`
            }
        }

        if (objects.items.length > 0)
            html  += "</div></div>";

        return html;
    }
  }
  
  
  
  
  