
import ViewCatalogUser from "./Views/ViewCatalogUser";

export default class {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return ViewCatalogUser.getHtml();
  }
}
