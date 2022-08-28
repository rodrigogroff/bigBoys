
export default class {

    static getHtml() {

        var w = localStorage.getItem('wall');

        if (w == null || w == undefined) 
          w = 2;
        else 
          w= parseInt(w);    
        document.getElementById('mainBody').style = `background:url(/src/static/img/bg${w.toString()}.jpg);background-size: contain;background-repeat: no-repeat;background-color: black;`
        w = w + 1;
        if (w > 7) w = 2;
        localStorage.setItem('wall', w.toString());
    

    }
}
