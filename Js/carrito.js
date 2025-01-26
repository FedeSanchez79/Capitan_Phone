let carrito = document.getElementById("items");
let mensajeCarrito = document.getElementById("mensajeCarrito");
let menuTotal = document.getElementById("menuTotal");

let itemsCatalogo = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(carritoItems) {
    if (!carritoItems || carritoItems.length === 0) {
        return actualizarVistaCarrito();
    }

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

    actualizarTotal();

    const botonVaciar = document.createElement("div");
    botonVaciar.innerHTML = `<button id="vaciar">Vaciar carrito</button>`;
    menuTotal.appendChild(botonVaciar);

    const botonCancelar = document.createElement("div");
    botonCancelar.style.display = "none";
    botonCancelar.innerHTML = `<img src="../assets/images/Timer.gif" alt="Cuenta regresiva" width="100" height="50">
                               <button id="cancelar">Cancelar</button>`;
    menuTotal.appendChild(botonCancelar);

    let temporizador;

    const vaciar = document.getElementById("vaciar");
    const cancelar = botonCancelar.querySelector("#cancelar");

    vaciar.addEventListener("click", () => {
        botonCancelar.style.display = "flex";
        temporizador = setTimeout(() => {
            limpiarLocal();
            botonCancelar.style.display = "none";
        }, 9700);
    });

    cancelar.addEventListener("click", () => {
        clearTimeout(temporizador);
        botonCancelar.style.display = "none";
    });

}

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

function limpiarLocal() {
    localStorage.removeItem("carrito");
    itemsCatalogo.length = 0;
    actualizarVistaCarrito();
    actualizarTotal();
}

function actualizarVistaCarrito() {
    mensajeCarrito.innerHTML = "";
    menuTotal.innerHTML = "";
    mensajeCarrito.innerHTML = `<p class="carritoVacio">Tu carrito está vacío <i class="bi bi-emoji-frown"></i></p>`;
}

mostrarCarrito(itemsCatalogo);
