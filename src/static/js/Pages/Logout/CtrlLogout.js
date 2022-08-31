
import ViewLogout from "./Views/ViewLogout";

export default class {

  constructor(params) {
      document.body.addEventListener("click", (e) => {  
        switch (e.target.id) {
          case "confirmar":
            {
              localStorage.removeItem("token");
              localStorage.removeItem("userName");
              window.location.href = '/';
              break;
            }
        }
      }); 
    }
  
    getHtml() {
    return ViewLogout.getHtml();
  }
}
