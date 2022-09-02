
import Shuffle from "@app/Components/Shuffle";
import CatalogoDbPoster from "@app/Database/CatalogoPosters";
import CatalogoDbMini from "@app/Database/CatalogoMinis";
import { postTokenPortal } from "@app/Infra/Util"

export default class {

    static getHtml() {

        postTokenPortal("v1/pref/pref_list", {})
            .then((resp) => {

                var html = "<div align='center'><div class='flex-container'>";
                var list = resp.payload.items;

                list = Shuffle.sort(list)

                console.log(list)

                for (let a = 0; a < list.length; a++) {
                    var m = list[a];

                    var obj = CatalogoDbPoster.getAll('', m.productId);
                    if (obj == null)
                        obj = CatalogoDbMini.getAll('', m.productId);

                    console.log(obj)

                    html += `<div id='${obj.id}'>
                            <img src="${obj.imageBig}" alt="cat figure" style='cursor:pointer;height:320px' onclick="document.location = '/item?id=' + ${obj.id}" >
                            </div>`

                }

                if (list.length > 0)
                    html += "</div></div>";

                console.log(html)

                document.getElementById('myAppCatalog').innerHTML = html;
            })
            .catch((resp) => { });
    }
}
