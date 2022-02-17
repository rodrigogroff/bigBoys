
import ViewItem from "./Views/ViewItem";

export default class {
  constructor(params) {
    this.params = params;   
  }

  getHtml() {
    return ViewItem.getHtml();
  }
}
