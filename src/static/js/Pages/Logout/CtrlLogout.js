
import ViewLogout from "./Views/ViewLogout";

export default class {

  constructor(params) {
      localStorage.setItem("token", null);
      localStorage.setItem("userName", null);
      window.location.href = '/';
    }
  
    getHtml() {
    return ViewLogout.getHtml();
  }
}
