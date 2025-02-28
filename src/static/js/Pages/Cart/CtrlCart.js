
import ViewCart from "./Views/ViewCart";
import { postTokenPortal, buildErrorMsg } from "@app/Infra/Util"

export default class {
  constructor(params) {
    this.params = params;
    document.body.addEventListener("click", (e) => {
      switch (e.target.id) {

        case "cancelar_item":

          e.target.style = 'background-color:black;pointer-events:none;'

          postTokenPortal("v1/sale/cart_remove", {
            productId: e.target.attributes[2].value,
            cartId: e.target.attributes[3].value
          })
            .then((resp) => {
              var redir_cart = function () {
                window.location.href = '/cart';
              }
              setTimeout(redir_cart, 500);
            })
            .catch((resp) => {
              e.target.style = 'background-color:red;pointer-events:all;'
            })
          break;

        case "confirm_register":

          e.target.style = 'background-color:black;pointer-events:none;'

          postTokenPortal("v1/sale/register", {})
            .then((resp) => {
              window.location.href = '/cart';
            });
          break;

        case "confirm_gmap":

          e.target.style = 'background-color:black;pointer-events:none;'

          var txt_location = document.getElementById('location');
          postTokenPortal("v1/sale/confirm_sale", { gmap: txt_location.value })
            .then((resp) => {
              window.location.href = '/cart';
            })
            .catch((resp) => {
              e.target.style = 'background-color:red;pointer-events:all;'
            })
          break;

        case "cancel_cart":

          e.target.style = 'background-color:black;pointer-events:none;'

          postTokenPortal("v1/sale/cancel_cart", {})
            .then((resp) => {
              window.location.href = '/cart';
            })
            .catch((resp) => {
              e.target.style = 'background-color:red;pointer-events:all;'
            })
          break;

        case "confirm_buy":
          break;
      }
    });
  }

  getHtml() {
    var userName = localStorage.getItem("userName")
    if (userName == null || userName == undefined)
      document.getElementById('warningPage').style.display = 'block'
    else
      document.getElementById('mainPage').style.display = 'block'

    ViewCart.getHtml();

    document.getElementById('loading').style.display = 'block'

    postTokenPortal("v1/sale/cart_list", {})
      .then((resp) => {
        document.getElementById('loading').style.display = 'none'
        if (resp.ok == true) {
          // --------------------------
          // somente no carrinho
          // --------------------------
          if (resp.payload.saleStage === 0) {
            var html_cart = "<div style='background-color: rgba(5,5,5,0.25); margin-left:4px;margin-right:4px;'><br><h3>Itens em sua sacola</h3><br>"
            html_cart += "<table><tr><td width='120px'></td><td width='16px'></td><td width='120px'></td><td></td><td width='8px'></td><td></td></tr>";
            for (let i = 0; i < resp.payload.cart.length; i = i + 1) {
              var c = resp.payload.cart[i]
              var tipo = 'Quadro ';
              if (parseInt(c.productOption) >= 1) {
                if (c.productOption == 1)
                  tipo += 'A3';
                else
                  tipo += 'A2';
              }
              else
                tipo = 'Miniatura';
              html_cart += `<tr height='70px'><td><a href='/item?id=${c.productId}'>
                            <img src="src/static/products/${c.productId}/promoBig.jpg" style='max-height:66px' /></a></td><td></td>
                            <td><br>${tipo}<br>Item ${c.productId}</td>
                            <td><br>R$ ${c.price}</td>
                            <td></td>
                            <td><p style='margin-top:20px'><div id='cancelar_item' class='button' option1='${c.productId}' option2='${c.cartId}' style='width:32px;'>X</div></p></tr>`
            }
            if (resp.payload.cart.length > 0) {
              html_cart += "</table>";
              html_cart += `<br><h4>TOTAL: <strong>R$ ${resp.payload.total}</strong></h4><br>`;
              html_cart += `<br><div id='confirm_register' class='button' style='background-color:green''>Registrar (1/3)</div><br><br></div>`;
            }
            else {
              html_cart += "</table>";
              html_cart += `<br><br>Nenhum item selecionado<br><br><br><br>`;
            }
            document.getElementById('myAppCart').innerHTML = html_cart;
          }
          // ----------------------------------------------------
          // registrado, aguardando local de entrega
          // ----------------------------------------------------
          else if (resp.payload.saleStage === 1) {
            var html_cart = "<div style='background-color: rgba(5,5,5,0.25); margin-left:4px;margin-right:4px;'><br><h3>Confirme seu local de entrega</h3><br>"


            html_cart += `<div class="gmap_canvas" style="height:370px">
                                        <iframe
                                          width="600"
                                          height="350"
                                          id="gmap_canvas"
                                          style="display: block"
                                          src="https://maps.google.com/maps?q=${resp.payload.gmap}&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                          frameborder="0"
                                          scrolling="no"
                                          marginheight="0"
                                          marginwidth="0"
                                        ></iframe
                                        ><a href="https://putlocker-is.org"></a
                                        ><br /><style>
                                          .mapouter {
                                            position: relative;
                                            text-align: right;
                                            height: 500px;
                                            width: 600px;
                                          }</style
                                        ><a
                                          href="https://www.embedgooglemap.net"
                                          >google map html code</a
                                        ><style>
                                          .gmap_canvas {
                                            overflow: hidden;
                                            background: none !important;
                                            height: 500px;
                                            width: 600px;
                                          }
                                        </style>
                                      </div>`

            html_cart += `<div class="form__group field">
                            <input
                              type="input"
                              class="form__field"
                              name="location"
                              id="location"
                              required
                            />
                            <label for="location" class="form__label"
                              >Novo endereço de entrega</label
                            >
                            <div
                              id="validation_location"
                              class="button_verif"
                              style="display: none"
                            >
                              Valor inválido
                            </div>
                          </div><br>`

            html_cart += "<table><tr><td width='120px'></td><td width='16px'></td><td width='120px'></td><td></td><td width='8px'></td><td></td></tr>";

            for (let i = 0; i < resp.payload.cart.length; i = i + 1) {
              var c = resp.payload.cart[i]
              var tipo = 'Quadro ';
              if (parseInt(c.productOption) >= 1) {
                if (c.productOption == 1)
                  tipo += 'A3';
                else
                  tipo += 'A2';
              }
              else
                tipo = 'Miniatura';
              html_cart += `<tr height='70px'><td><a href='/item?id=${c.productId}'>
                            <img src="src/static/products/${c.productId}/promoBig.jpg" style='max-height:66px' /></a></td><td></td>
                            <td><br>${tipo}<br>Item ${c.productId}</td>
                            <td><br>R$ ${c.price}</td>
                            <td></td>
                            <td><p style='margin-top:20px'><div id='cancelar_item' class='button' option1='${c.productId}' option2='${c.cartId}' style='width:32px;'>X</div></p></tr>`
            }
            if (resp.payload.cart.length > 0) {
              html_cart += "</table>";
              html_cart += `<br><h4>TOTAL: <strong>R$ ${resp.payload.total}</strong></h4><br>`;
              html_cart += `<br><div id='confirm_gmap' class='button' style='background-color:green''>Confirmar (2/3)</div><br><br></div>`;
            }

            document.getElementById('myAppCart').innerHTML = html_cart;

            var add_listener = function () {
              var txt_location = document.getElementById('location');

              txt_location.value = resp.payload.gmap

              txt_location.addEventListener("blur", function (event) {
                document.getElementById('validation_location').style.display = 'none'
                if (this.value != '' && this.value.length > 25) { } else {
                  document.getElementById('validation_location').style.display = 'block'
                }
              }, true);
              txt_location.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                  document.getElementById('gmap_canvas').src = 'https://maps.google.com/maps?q=' + txt_location.value + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
                }
              });
            }
            setTimeout(add_listener, 300);
          }
          // --------------------------
          // confirmado endereço de entrega
          // --------------------------
          else if (resp.payload.saleStage === 2) {

            var html_cart = "<div style='background-color: rgba(5,5,5,0.25); margin-left:4px;margin-right:4px;'><br><h3>Pronto!</h3><br>"
            html_cart += "<table><tr><td width='120px'></td><td width='16px'></td><td width='120px'></td><td></td><td width='8px'></td><td></td></tr>";
            for (let i = 0; i < resp.payload.cart.length; i = i + 1) {
              var c = resp.payload.cart[i]
              var tipo = 'Quadro ';
              if (parseInt(c.productOption) >= 1) {
                if (c.productOption == 1)
                  tipo += 'A3';
                else
                  tipo += 'A2';
              }
              else
                tipo = 'Miniatura';
              html_cart += `<tr height='70px'><td><a href='/item?id=${c.productId}'>
                            <img src="src/static/products/${c.productId}/promoBig.jpg" style='max-height:66px' /></a></td><td></td>
                            <td><br>${tipo}<br>Item ${c.productId}</td>
                            <td><br>R$ ${c.price}</td>
                            <td></td>
                            <td><p style='margin-top:20px'><div id='cancelar_item' class='button' option1='${c.productId}' option2='${c.cartId}' style='width:32px;'>X</div></p></tr>`
            }
            if (resp.payload.cart.length > 0) {
              html_cart += "</table>";
              html_cart += `<br><h4>TOTAL: <strong>R$ ${resp.payload.total}</strong></h4><br>`;
              html_cart += `<br><h4>Local de entrega:<br><br> <strong>${resp.payload.gmap}</strong></h4><br>`;
              html_cart += `<br><div id='confirm_buy' style='background-color:green' class='button'>Pagar (3/3)</div>`;
              html_cart += `<br><div id='cancel_cart' class='button'>Cancelar carrinho</div><br><br><br><br></div>`;
              html_cart += '<br><br><br><br><br></div>'
            }
            document.getElementById('myAppCart').innerHTML = html_cart;
          }
        }
        else {
          document.getElementById('mainPageNOK').style = "display:block"
          document.getElementById('failMsg').innerHTML = buildErrorMsg()
        }
      })
      .catch((resp) => {
        document.getElementById('loading').style.display = 'none'
        document.getElementById('mainPageNOK').style = "display:block"
        document.getElementById('failMsg').innerHTML = buildErrorMsg(resp.msg)
      })

    return "";
  }
}
