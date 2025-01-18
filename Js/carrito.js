// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (forEach y filter en catalogo)

// -NADA de JS en el html (LISTO)

//variable del total del carrito de compras

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

// NO ME TOMA LA IMAGEN, VER PORQUE
// let carritoImagen = document.createElement("img");
// carritoImagen.className = "carritoImagen";
// carritoImagen.innerHTML = `<img" src="../assets/images/iphone.png" alt="imagen de un iphone">`;
// carritoCard.appendChild(carritoImagen);

let carritoProductoTitulo = document.createElement("div");
carritoProductoTitulo.innerHTML = `<small>Celular</small>
                                   <h3>${productos.marca}</h3>`;
carritoCard.appendChild(carritoProductoTitulo);
let carritoProductoCantidado = document.createElement("div");
carritoProductoCantidado.innerHTML = `<small>Cantidad</small>
                                      <p></p>`;
carritoCard.appendChild(carritoProductoCantidado);  
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


// let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0); //sujeto a modificacion de acuerdo a como una al catalogo con el carrito