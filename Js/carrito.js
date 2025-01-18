

const productos = JSON.parse(localStorage.getItem("productos"));

//HACER UN FILTER PARA PODER TRAER LOS ELEMENTO DE ACUERDO A LA LLAMADA


let carritoListado = document.getElementsByClassName("contenedorCarrito")[0];
carritoListado.innerHTML = `<p class="carritoVacio">Tu carrito esta vacio <i class="bi bi-emoji-frown"></i></p>`
let nuevoListado = document.createElement("div")
nuevoListado.className = "carritoProductos"
carritoListado.appendChild(nuevoListado)
let carritoCard = document.createElement("div");
carritoCard.className = "carritoProducto";
nuevoListado.appendChild(carritoCard);

// NO ME TOMA LA IMAGEN, VER PORQUE (**PENDIENTE**)

// let carritoImagen = document.createElement("img");
// carritoImagen.className = "carritoImagen";
// carritoImagen.innerHTML = `<img" src="../assets/images/iphone.png" alt="imagen de un iphone">`;
// carritoCard.appendChild(carritoImagen);

let carritoProductoTitulo = document.createElement("div");
carritoProductoTitulo.innerHTML = `<small>Celular</small>
                                   <h3>${productos.marca}</h3>`;
carritoCard.appendChild(carritoProductoTitulo);
let carritoProductoCantidad = document.createElement("div");
carritoProductoCantidad.innerHTML = `<small id="tituloCantidad">Cantidad</small></br> 
                                     <input type=""number"></input>`;
                                     //no se si es una buena practica agregar un id aca pero lo hago por el margin que tiene el input
carritoCard.appendChild(carritoProductoCantidad);  
let carritoProductoPrecio = document.createElement("div");
carritoProductoPrecio.innerHTML = `<small>Precio</small>
                                   <p>${productos.precio}</p>`;
carritoCard.appendChild(carritoProductoPrecio);
let carritoProductoSubtotal = document.createElement("div");
carritoProductoSubtotal.innerHTML = `<small>Subtotal</small>
                                     <p></p>`;
carritoCard.appendChild(carritoProductoSubtotal);
let botonEliminarCarrito = document.createElement("button");
botonEliminarCarrito.className = "carritoProductoEliminar"
botonEliminarCarrito.innerHTML = `<i class="bi bi-trash"></i>`
carritoCard.appendChild(botonEliminarCarrito)    

//sujeto a modificacion de acuerdo a como una al catalogo con el carrito

// let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0); 