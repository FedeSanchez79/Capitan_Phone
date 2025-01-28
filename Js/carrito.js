// 1. CREO LA FUNCION MOSTRAR CARRITO QUE INCLUYE UN CONDICIONAL PARA VER SI HAY ALGUN PRODUCTO, SI NO ES ASI USA LA FUNCION actualizarVistaCarrito().
// 2. SI HAY UN OBJETO, SE CREA UN ITEM USANDO DOM PARA ACTUALIZAR LAS CANTIDADES INRESADAS, EL SUBTOTAL.
// 3. A MEDIDA QUE SE AGREGAN MAS PRODUCTOS ESTA LA FUNCION actualizarTotal() PARA IR SUMANDO LOS SUBTOTALES Y LAS CANTIDADES DEL TOTAL DE PRODUCTOS.
// 4. AL AGREGAR PRODUCTOS SE MUESTRA EL BOTON VACIAR CARRITO, QUE AL HACER CLICK MUESTRA UN SWEETALERT PARA CONTIUNAR CON LA ACCION O CANCELARLA.
// 5. SI SE EJECUTA LA FUNCION lipiarLocal(), SE MUESTRA EL MENSAJE DE CARRITO VACIO.
// ***RESTA DARLE FUNCIONALIDAD A LOS BOTONES DE ELIMINAR CADA ITEM CREADO***

let carrito = document.getElementById("items");
let menuTotal = document.getElementById("menuTotal");

let itemsCatalogo = JSON.parse(localStorage.getItem("carrito")) || [];

//***1***//

function mostrarCarrito(carritoItems) {
    if (!carritoItems || carritoItems.length === 0) {
        return actualizarVistaCarrito();
    }

    //***2***//

    carritoItems.forEach((listadoItems) => {
        const items = document.createElement("div");
        items.className = "itemCarrito";
        items.innerHTML = `<div><small>Celular</small>
                           <h3>${listadoItems.marca}</h3></div>
                           <div><small id="tituloCantidad">Cantidad</small></br> 
                           <p>${listadoItems.cantidad}</p></div>
                           <div><small>Precio</small>
                           <p>u$s ${listadoItems.precio}</p></div>
                           <div><small>Subtotal</small>
                           <p id="subtotal">u$s ${listadoItems.cantidad * listadoItems.precio} </p></div>
                           <div><i id="deleteCarrito" class="bi bi-trash"></i></div>`;
        mensajeCarrito.appendChild(items);
    });

    let inputTotal = document.createElement("div");
    inputTotal.innerHTML = `<h4>Total:</h4>
                            <input id="total" placeholder="Total" readonly></input>
                            <button id="finalizarCompra"><a href="./construccion.html">Finalizar Compra</button>`;
    menuTotal.appendChild(inputTotal);

    //***3***//

    function actualizarTotal() {
        let total = 0;
        total = itemsCatalogo.reduce((acumulador, producto) => {
            return acumulador + (producto.cantidad * producto.precio);
        }, 0);
        
        const elementoTotal = document.getElementById("total");
        if (elementoTotal) {
            elementoTotal.value = `u$s ${total.toFixed(2)}`;
        }
    }

    actualizarTotal();

    const botonVaciar = document.createElement("div");
    botonVaciar.innerHTML = `<button id="vaciar">Vaciar carrito</button>`;
    menuTotal.appendChild(botonVaciar);

    const vaciar = document.getElementById("vaciar");

    //***4***//

    vaciar.addEventListener("click", () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "¡¡Tenemos muchas promociones y descuentos!!",
            icon: "warning",
            showCancelButton: true,
            color:"rgb(255, 255, 255)",
            background:"rgb(0, 0, 0)",
            confirmButtonColor: "rgb(253, 48, 48)",
            cancelButtonColor: "rgb(117, 116, 116)",
            confirmButtonText: "Vaciar Carrito"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Carrito vacio",
                text: "Tenemos mas ofertas para vos",
                icon: "info",
                color: "rgb(255, 255, 255)",
                background: "rgb(53, 53, 53)"
              });
              function limpiarLocal() {
                localStorage.removeItem("carrito");
                itemsCatalogo.length = 0;
                actualizarVistaCarrito();
                actualizarTotal();
            }
            limpiarLocal()            
            }
          });
    });
}


let mensajeCarrito = document.getElementById("mensajeCarrito");

//***5***/

function actualizarVistaCarrito() {
    mensajeCarrito.innerHTML = "";
    menuTotal.innerHTML = "";
    mensajeCarrito.innerHTML = `<p class="carritoVacio">Tu carrito está vacío <i class="bi bi-emoji-frown"></i></p>`;
}

mostrarCarrito(itemsCatalogo);