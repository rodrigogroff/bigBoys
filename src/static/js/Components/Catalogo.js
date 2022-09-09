
import Shuffle from "@app/Components/Shuffle";

export default class {

    static getHtml(objects) {

        var html = "<div align='center'><div class='flex-container'>";

        objects = Shuffle.sort(objects)

        for (let a = 0; a < objects.length; a++) {
            var m = objects[a];
            var id = m.id;
            if (id == undefined) id = m.productId;
            html += `<div id='${id}'>
                        <img src="src/static/products/${id}/promoBig.jpg" alt="cat figure" 
                        style='cursor:pointer;height:320px' onclick="document.location = '/item?id=' + ${id}" >
                    </div>`
        }

        if (objects.length > 0)
            html += "</div></div>";

        return html;
    }
}
