
import ViewCatalog from "./Views/ViewCatalog";

export default class {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return ViewCatalog.getHtml();
  }
}
