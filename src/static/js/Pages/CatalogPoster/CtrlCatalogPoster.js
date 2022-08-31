
import ViewCatalogPoster from "./Views/ViewCatalogPoster";

export default class {
  constructor(params) {
    this.params = params;
  }

  getHtml() {
    return ViewCatalogPoster.getHtml();
  }
}
