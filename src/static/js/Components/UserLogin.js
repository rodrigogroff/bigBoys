

export default class {

    static getHtml() {

    var userName = localStorage.getItem("userName")

    if (userName != "null" && userName != undefined) 
        document.getElementById('myAppUserLogin').innerHTML = "Bem-vindo, <strong><span style='color:white'>" + userName + "</span></strong><br>"

      return ``
    }
  }
  


