// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar LISTO(en usuarios.js), recuperar LISTO(en catalogo.js), modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (forEach en catalogo)

// -NADA de JS en el html (LISTO)


//PENDIENTE -- AL RECARGAR LA PAGINA SE BORRA EL CONTENIDO 

//CREAR UN FORM USANDO DOM

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

const productos = JSON.parse(localStorage.getItem("productos"));

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
        if(marca === "samsung" || marca === "iphone" || marca === "xiaomi" || marca === "motorola"){
        const nuevoProducto = new datoProducto(marca, modelo, precio);
        productos.push(nuevoProducto);
        localStorage.setItem("productos", JSON.stringify(productos)); 
        mostrarProductos();
        }else{
            marcaIncorrecta.innerHTML = `<p>Marca ingresada incorrecta. Ingrese: Samsung, Motorola, Xiaomi o Iphone únicamente</p>`
        }
};

//ACCESO AL DOM Y MÉTODO FOREACH PARA PODER MOSTRAR CADA PRODUCTO AGREGADO EN LA FUNCION ANTERIOR

function mostrarProductos() {
    const catalogoCard = document.getElementById("contenedorProductos");
    catalogoCard.innerHTML = "";
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>Marca: ${producto.marca}</h3>
                          <p>Modelo: ${producto.modelo}</p>
                          <p>Precio: $${producto.precio}</p>
                          <button class="botonEliminar">Eliminar Item</button>`;
        catalogoCard.appendChild(card);
        const botonEliminar = card.querySelector(".botonEliminar");
        botonEliminar.onclick = () => eliminarDelCatalogo(producto.id);
    });
};

//FUNCIÓN PARA ELIMINAR LOS OBJETOS CREADOS PREVIAMENTE USANDO EL EVENTO ONLICK DENTRO DE LA FUNCIÓN mostrarProductos()

function eliminarDelCatalogo(id) {
    const nuevoCatalogo = productos.filter(producto => producto.id !== id);
    productos.length = 0;
    nuevoCatalogo.forEach(producto => productos.push(producto));
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
};

const botonAgregar = document.getElementById("agregar");
botonAgregar.onclick = (e) => {agregarProducto();};

//INPUT PARA FILTRAR POR PRECIO CON EL MÉTODO FILTER



//USO DE FOR OF PARA CREAR EL LISTADO DE MARCAS EN EL ASIDE

const marcas = ["iphone", "motorola", "xiaomi", "samsung"];
const listaMarcas = document.getElementById("marcas")
for (const marca of marcas){
    let marcaTelefonos = document.createElement("li")
    marcaTelefonos.innerHTML = marca
    listaMarcas.appendChild(marcaTelefonos)                            
}
