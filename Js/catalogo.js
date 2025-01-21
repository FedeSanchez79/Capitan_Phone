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

const productos = JSON.parse(localStorage.getItem("productos")) || [];

class datoProducto {
    static id = productos.length;
    constructor(marca, modelo, precio) {
        this.id = ++datoProducto.id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};

//ACCESO AL DOM, ALMACENAR EN LOCALSTORAGE Y VERIFICAR QUE LOS DATOS INGRESADOS SEAN CORRECTOS

function agregarProducto() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const precio = document.getElementById("precio").value;
    const nuevoProducto = new datoProducto(marca, modelo, precio);
    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("productosCarrito", JSON.stringify(productos));
    tryFunction()
};

//ASINCRONISMO Y PROMESAS

function tryFunction(){
    const catalogoCard = document.getElementById("contenedorProductosAdmin");
    marcaIncorrecta = document.createElement("div");
    marcaIncorrecta.id = "marcaIncorrecta";
    let marcaIncorrecta = document.getElementById("marcaIncorrecta");
    catalogoCard.appendChild(marcaIncorrecta);

    
    function modeloChecker(modelo){
        return new Promise(resolve, reject) 
    }
        // try{
        //     if (productos.marca === "xiaomi" || productos.marca === "motorola" || productos.marca === "iphone" || productos.marca === "samsung"){
        //         marcaIncorrecta.textContent = "Marca ingresada de forma correcta";
        //     }else{
        //         throw new Error("Marca ingresada incorrecta. Ingrese: Samsung, Motorola, Xiaomi o iPhone únicamente.")
        //     }       
        // }catch(err){
        //     marcaIncorrecta = err
        // }finally{
        //     mostrarProductos();
        // }   
}

//ACCESO AL DOM Y MÉTODO FOREACH PARA PODER MOSTRAR CADA PRODUCTO AGREGADO EN LA FUNCIÓN ANTERIOR

function mostrarProductos() {
    const catalogoCard = document.getElementById("contenedorProductosAdmin");
    catalogoCard.innerHTML = "";
    productos.forEach(producto => {
        const card = document.createElement("div"); 
        card.className = "contenedor"
        card.innerHTML = `<img class="productoImagen" src="../assets/images/iphone_imagen.jpg" alt="imagen de un iphone">
                          <h3 class="modelo">${producto.marca}</h3>
                          <p class="modelo">${producto.modelo}</p>
                          <p class="precio">u$s ${producto.precio}</p>
                          <button class="agregar">Comprar</button>
                          <button class="botonEliminar">Eliminar Item</button>`;                 
        catalogoCard.appendChild(card);
        const botonEliminar = card.querySelector(".botonEliminar");
        botonEliminar.onclick = () => eliminarDelCatalogo(producto.id);
    });
    agregarEventoBotones();
};


//FUNCIÓN PARA ELIMINAR LOS OBJETOS CREADOS PREVIAMENTE USANDO EL EVENTO ONLICK DENTRO DE LA FUNCIÓN mostrarProductos()

function eliminarDelCatalogo(id) {
    const nuevoCatalogo = productos.filter(producto => producto.id !== id);
    productos.length = 0;
    nuevoCatalogo.forEach(producto => productos.push(producto));
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
};

//EVENTO ONCLICK PARA AGREGAR PRODUCTO

const botonAgregar = document.getElementById("agregar");
botonAgregar.onclick = (e) => {agregarProducto();};


function carritoAgregar(marca, precio){
const carritoMarca = productos.filter(producto => producto.marca !== marca)
productos.length = 0;
carritoMarca.forEach(producto => productos.push(producto))
const carritoPrecio = productos.filter(producto => producto.precio !== precio)
productos.length = 0;
carritoPrecio.forEach(producto => productos.push(producto))
localStorage.setItem("productosCarrito", JSON.stringify(productos));
mostrarProductos();
}
//EJECUTO LA FUNCIÓN PARA MOSTRAR LOS PRODUCTOS

mostrarProductos();

//USO DE FOR OF PARA CREAR EL LISTADO DE MARCAS EN EL ASIDE

const marcas = ["iphone", "motorola", "xiaomi", "samsung"];
const listaMarcas = document.getElementById("marcas")
for (const marca of marcas){
    let marcaTelefonos = document.createElement("li")
    marcaTelefonos.innerHTML = marca
    listaMarcas.appendChild(marcaTelefonos)                            
}

//MODIFICAR EL NUMERO EN CARRITO A MEDIDA QUE AGREGAMOS UN ITEM A CARRITO (Falta ver como evitar que al hacer refresh se borre -- localStorage)

let contadorCarrito = 0;
const numero = document.getElementById("numero1");

function incrementarCarrito() {
    contadorCarrito++;
    numero.textContent = contadorCarrito;
}
function agregarEventoBotones() {
    const botonesAgregar = document.querySelectorAll(".agregar");
    botonesAgregar.forEach(boton => {
        boton.onclick = incrementarCarrito;
    });
}

//FUNCIÓN Y MÉTODOS PARA PODER USAR EL SELECT Y FILTRAR POR OPCIÓN ELEGIDA (**PENDIENTE**)

let seleccion = JSON.parse(localStorage.getItem("productos"))
let seleccionMarca = document.getElementById("select1")
