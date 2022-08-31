

export default class {

  static getHtml() {

    var userName = localStorage.getItem("userName")

    if (userName != "null" && userName != undefined)
      document.getElementById('myAppUserLogin').innerHTML = `Bem-vindo, <strong><a href='/cart' style='color:white'> ${userName} </a></strong><br>`

    return ``
  }
}



