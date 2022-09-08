
import Shuffle from "@app/Components/Shuffle";
import { postTokenPortal } from "@app/Infra/Util"

export default class {
    static getHtml() {
        postTokenPortal("v1/pref/pref_list", {})
            .then((resp) => {
                var html = "<div align='center'><div class='flex-container'>";
                var list = resp.payload.items;
                list = Shuffle.sort(list)
                for (let a = 0; a < list.length; a++) {
                    var m = list[a];
                    html += `<div id='${m.id}'><img src="src/static/products/${m.id}/promoBig.jpg" 
                            alt="cat figure" style='cursor:pointer;height:320px' 
                            onclick="document.location='/item?id=' + ${m.id}" ></div>`
                }
                if (list.length > 0)
                    html += "</div></div>";
                document.getElementById('myAppCatalog').innerHTML = html;
            })
            .catch((resp) => { });
    }
}
