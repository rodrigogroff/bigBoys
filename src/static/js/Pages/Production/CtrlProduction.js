
import ViewProduction from "./Views/ViewProduction";

export default class {
  constructor(params) {
    this.params = params;   

    var userName = localStorage.getItem("userName")
    
    if (userName == null || userName == undefined) 
    {
        window.location.href = '/login';
        return;
    }
  }

  getHtml() {
    return ViewProduction.getHtml();
  }
}
