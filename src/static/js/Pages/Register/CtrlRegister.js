
import ViewRegister from "./Views/ViewRegister";

export default class {
  constructor(params) {
    this.params = params;   

    document.getElementById('name').focus();
    

    document.body.addEventListener("click", (e) => {  
      switch (e.target.id) {
        case "continue":
          var txt_name = document.getElementById('name');
          var txt_mobile = document.getElementById('mobile');
          var txt_email = document.getElementById('email');
          var txt_location = document.getElementById('location');

          txt_location.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
              document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=' + txt_location.value + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
            }
          });

          txt_name.addEventListener("blur", function( event ) {          
            document.getElementById('validation_name').style.display = 'none'
            if (this.value != '' && this.value.trim().indexOf(' ') > 0) { } else {
              document.getElementById('validation_name').style.display = 'block'          
            }
          }, true);

          txt_mobile.addEventListener("blur", function( event ) {          
            document.getElementById('validation_mobile').style.display = 'none'
            if (this.value != '' && this.value.length == 16) { } else {
              document.getElementById('validation_mobile').style.display = 'block'          
            }
          }, true);

          txt_email.addEventListener("blur", function( event ) {          
            document.getElementById('validation_email').style.display = 'none'
            if (this.value != '' && this.value.indexOf('@') > 0 && this.value.indexOf('.') > 0) { } else {
              document.getElementById('validation_email').style.display = 'block'          
            }
          }, true);

          txt_location.addEventListener("blur", function( event ) {          
            document.getElementById('validation_location').style.display = 'none'
            if (this.value != '' && this.value.length > 25 ) {} else {
              document.getElementById('validation_location').style.display = 'block'          
            }
          }, true);

          document.getElementById('validation_name').style.display = 'none'
          document.getElementById('validation_mobile').style.display = 'none'
          document.getElementById('validation_email').style.display = 'none'
          document.getElementById('validation_location').style.display = 'none'

          var passed = true;

          if (txt_location.value != '' && txt_location.value.length > 25 ) {} else 
          {
            document.getElementById('validation_location').style.display = 'block'            
            passed = false;
            txt_location.focus()
          }

          if (txt_email.value != '' && txt_email.value.indexOf('@') > 0 && txt_email.value.indexOf('.') > 0) { } else 
          {
            document.getElementById('validation_email').style.display = 'block'          
            passed = false;
            txt_email.focus()
          }

          if (txt_mobile.value != '' && txt_mobile.value.length == 16) { } else 
          {
            document.getElementById('validation_mobile').style.display = 'block'          
            passed = false;
            txt_mobile.focus()
          }

          if (txt_name.value != '' && txt_name.value.trim().indexOf(' ') > 0) { } else 
          {
            document.getElementById('validation_name').style.display = 'block'          
            passed = false;
            txt_name.focus()
          }

          if (passed == true)
          {
            document.getElementById('form_register_btn_continue').style.display = 'none'
            document.getElementById('form_register_btn_confirm').style.display = 'block'
            document.getElementById('mapOuter').style.display = 'block'
            document.getElementById('gmap_canvas').style.display = 'block'
            document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=' + txt_location.value + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
          }

        break;
      }      
    });
    
  }

  getHtml() {
    return ViewRegister.getHtml();
  }
}
