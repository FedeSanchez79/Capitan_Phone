// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar LISTO(en usuarios.js), recuperar LISTO(en catalogo.js), modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (PENDIENTE)

// -NADA de JS en el html (LISTO)




//PENDIENTE -- 1. AL RECARGAR LA PAGINA SE BORRA EL CONTENIDO -- 2.VER COMO RECUPERAR, MODIFICAR Y ELIMINAR DEL LOCALSTORAGE

//CREAR UN FORM

const items = document.getElementById("items");
const menuCarga = document.createElement("div");
menuCarga.innerHTML = ` <form id="menuCargaCatalogo" action="" method="post">
                        <p>Nuevo Item</p>
                        <input type="text" id="marca" placeholder="Ingrese la marca">
                        <input type="text" id="modelo" placeholder="Ingrese el modelo">
                        <input type="number" id="precio" placeholder="Ingrese el precio">
                        <button id="agregar" type="button">Agregar</button>
                        </form>`;
items.appendChild(menuCarga);

//FUNCIÓN CONSTRUCTORA PARA CREAR LOS OBJETOS

const productos = [];

class datoProducto {
    static id = 0;
    constructor(marca, modelo, precio) {
        this.id = ++datoProducto.id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};

//ACCESO AL DOM Y ALMACENAR EN LOCALSTORAGE

function agregarProducto() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const precio = parseInt(document.getElementById("precio").value);
    const nuevoProducto = new datoProducto(marca, modelo, precio);
    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
};

//ACCESO AL DOM Y MÉTODO FOREACH PARA PODER MOSTRAR CADA PRODUCTO AGREGADO EN LA FUNCION ANTERIOR

function mostrarProductos() {
    const catalogoCard = document.getElementById("contenedorProductos");
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>Marca: ${producto.marca}</h3>
                          <p>Modelo: ${producto.modelo}</p>
                          <p>Precio: $${producto.precio}</p>`;
        catalogoCard.appendChild(card);
    });
};

//EVENTO CLICK PARA INICIALIZAR LA FUNCIÓN DE AGREGAR PRODUCTOS

const botonAgregar = document.getElementById("agregar");
botonAgregar.onclick = (e) => {agregarProducto();};
