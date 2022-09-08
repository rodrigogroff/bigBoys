
export default class {

  static getHtml() {

    var userName = localStorage.getItem("userName")

    if (userName != "null" && userName != undefined)
      document.getElementById('myAppUserLogin').innerHTML = `Bem-vindo, <strong><a href='/cart' style='color:white'> ${userName} </a></strong><br>`
    else
      document.getElementById('myAppUserLogin').innerHTML = `Clique <strong><a href='/login' style='color:white'> aqui </a></strong> para fazer login<br>`

    return ``
  }
}
