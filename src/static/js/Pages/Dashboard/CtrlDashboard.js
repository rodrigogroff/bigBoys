
import ViewDash from "./Views/ViewDash";

export default class {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return ViewDash.getHtml();
  }
}
