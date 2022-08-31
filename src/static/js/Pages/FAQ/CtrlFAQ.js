
import ViewFAQ from "./Views/ViewFAQ";

export default class {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return ViewFAQ.getHtml();
  }
}
