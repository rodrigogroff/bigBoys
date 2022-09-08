
import Shuffle from "@app/Components/Shuffle";

export default class {

    static getHtml(objects) {

        var html = "<div align='center'><div class='flex-container'>";

        objects = Shuffle.sort(objects)

        for (let a = 0; a < objects.length; a++) {
            var m = objects[a];
            html += `<div id='${m.id}'>
                        <img src="src/static/products/${m.id}/promoBig.jpg" alt="cat figure" 
                        style='cursor:pointer;height:320px' onclick="document.location = '/item?id=' + ${m.id}" >
                    </div>`
        }

        if (objects.length > 0)
            html += "</div></div>";

        return html;
    }
}
