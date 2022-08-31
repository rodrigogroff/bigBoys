
import ViewProduction from "./Views/ViewProduction";

export default class {
  constructor(params) {
    this.params = params;
  }
  getHtml() {
    var userName = localStorage.getItem("userName")
    if (userName == null || userName == undefined)
      document.getElementById('warningPage').style.display = 'block'
    else
      document.getElementById('mainPage').style.display = 'block'
    return ViewProduction.getHtml();
  }
}
