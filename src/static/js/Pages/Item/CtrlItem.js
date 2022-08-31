
import ViewItem from "./Views/ViewItem";

export default class {
  constructor(params) {
    this.params = params;   

    document.body.addEventListener("click", (e) => {

      console.log(e.target)

      switch (e.target.id) {        
        case "wishlist":
          break;
        case "add":
          break;          
      }

    });
  }

  getHtml() {
    return ViewItem.getHtml();
  }
}
