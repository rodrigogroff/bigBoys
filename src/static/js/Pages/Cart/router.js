
import Controller from "./CtrlCart";

class AppRouter {
  constructor(url) {
    this.url = url;
  }

  getHtml() {
    var newState = this.url;
    var params = { id: null };
    var route_values = newState.split("/");
    newState = "/" + route_values[1];
    if (route_values.length >= 2) params.id = route_values[2];
    return `${new Controller(params).getHtml()}`;
  }
}

export default class {
  constructor(params) {
    this.params = params;
  }
  getHtml() {
    return new AppRouter(this.params).getHtml();
  }
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  document.querySelector("#myApp").innerHTML = new AppRouter(
    window.location.pathname
  ).getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
