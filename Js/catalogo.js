// 1. TOMANDO LA INFORMACION CON UN FETCH DEL ARCHIVO DATA.JSON
// 2. A PARTIR DEL ARRAY, CREO LA FUNCION mostrarProductos() PARA MOSTRAR LOS PRODUCTOS USANDO DOM.
// 3. EN mostrarProductos() INCLUYO LA FUNCION agregarEventoCantidad() PARA QUE AGREGUE A CADA OBJETO CREADO UNA CANTIDAD Y PODER APLICARLA EN LA SIGUIENTE FUNCION.
// 4. A CONTINUACION SE EJECUTA agregarEventoBotones(), LA CUAL A TRAVES DE UN EVENTO CLICK TOMA LA CANTIDAD INGRESADA (SI NO LO HAY DA EL MENSAJE DE ERROR), Y A TRAVES
// DEL SEGUNDO CONDICIONAL CREA UN NUEVO OBJETO POR CADA CLAICK Y LO AGREGA AL LOCALSTORAGE
// 5. DENTRO DE ESTA FUNCION SE EJECUTA LA FUNCION incrementarCarrito() QUE A TRAVES DE DOM TOMA EL ELEMENTO NUMERO 1 Y LO VA INCREMENTANDO POR CADA CLICK HECHO.
// 6. CREO UN ARRAY LLAMADO marcasUnicas PARA PODER, PRIMERO A TARVES DE UN INCLUDES PODER PUSHEAR LOS OBJETOS ENCONTRADOS Y LUEGO A TRAVES DE UN FOREACH FILTRAR ESOS
// PRODUCTOS Y ESTABLECERLOS COMO PARAMETROS EN LA FUNCION mostrarProductos().


//***1***//

fetch("../Db/data.json")
    .then(response => response.json())
    .then(productos => {

        const listado = document.getElementById("contenedorProductos");

        //***2***//

        function mostrarProductos(productos) {
            listado.innerHTML = "";
            productos.forEach((producto) => {
                const card = document.createElement("div");
                card.classList.add("producto-card");
                card.innerHTML = `
                    <img class="productoImagen" src="${producto.url}" alt="imagen de un producto">
                    <div class="productoInfo">
                        <h3 class="modelo">${producto.marca}</h3>
                        <p class="modelo">${producto.modelo}</p>
                        <p class="precio">u$s ${producto.precio}</p>
                        <button class="agregar" idInfo="${producto.id}">Agregar</button>
                        <p>Cantidad: </p>
                        <input type="number" id="cantidad-${producto.id}" min="1" value="0" placeholder="0">
                    </div>`;
                listado.appendChild(card);
            });

            agregarEventoCantidad(); 
            agregarEventoBotones(); 
        }

        mostrarProductos(productos); 

        //***3***//

        function agregarEventoCantidad() {
            productos.forEach((producto) => {
                const inputCantidad = document.getElementById(`cantidad-${producto.id}`);
                
                if (!inputCantidad) {
                    return;
                }

                let mensajeError = document.getElementById(`error-${producto.id}`);
                
                if (!mensajeError) {
                    mensajeError = document.createElement("p");
                    mensajeError.id = `error-${producto.id}`;
                    inputCantidad.parentNode.appendChild(mensajeError);
                }

                inputCantidad.addEventListener("change", (e) => {
                    const nuevaCantidad = parseInt(e.target.value, 10);
                    if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
                        mensajeError.textContent = "Agregue cantidad válida.";
                        producto.cantidad = 0;
                    } else {
                        mensajeError.textContent = "";
                        producto.cantidad = nuevaCantidad;
                    }
                });
            });
        }

        //***5***//

        const numero = document.getElementById("numero1");
        let contadorCarrito = 0;

        function incrementarCarrito() {
            contadorCarrito++;
            numero.textContent = contadorCarrito;
        }

        function cargarCarrito() {
            const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
            contadorCarrito = carritoGuardado.length;
            numero.textContent = contadorCarrito;
        }

        cargarCarrito();

        //***4***//

        function agregarEventoBotones() {
            const botonesAgregar = document.querySelectorAll(".agregar");
            botonesAgregar.forEach((boton) => {
                boton.onclick = () => {
                    const productoId = parseInt(boton.getAttribute("idInfo"));
                    const productoSeleccionado = productos.find((p) => p.id === productoId);
                    const cantidadProducto = productoSeleccionado.cantidad;

                    if (cantidadProducto === 0 || isNaN(cantidadProducto)) {
                        Toastify({
                            text: "Ingrese una cantidad",
                            duration: 1500,
                            destination: "",
                            newWindow: true,
                            gravity: "bottom", 
                            position: "center",
                            stopOnFocus: true, 
                            style: {
                            background: "linear-gradient(to right,rgb(253, 104, 104),rgb(184, 0, 0))",
                            },
                            onClick: function(){}
                        }).showToast();
                        return; 
                    }

                    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

                    const productoEnCarrito = carritoActual.find((p) => p.id === productoSeleccionado.id);
                    if (productoEnCarrito) {
                        productoEnCarrito.cantidad += productoSeleccionado.cantidad;
                    } else {
                        class Producto {
                            constructor(marca, precio, cantidad) {
                                this.marca = marca;
                                this.precio = precio;
                                this.cantidad = cantidad;
                            }
                        }
                        
                        let copiaProducto = new Producto(
                            productoSeleccionado.marca,
                            productoSeleccionado.precio,
                            productoSeleccionado.cantidad
                        );
                        carritoActual.push(copiaProducto);
                    }
                      Swal.fire({
                        title: "Producto agregado al carrito",
                        color:"rgb(255, 255, 255)",
                        background:"rgb(53, 53, 53)",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        },
                        timer: 1200
                      });

                    localStorage.setItem("carrito", JSON.stringify(carritoActual));
                    incrementarCarrito();
                };
            });
        }

        //***6***//

        let listaMarcas = document.getElementById("marcas");

        const marcasUnicas = [];
        for (let i = 0; i < productos.length; i++) {
            const marca = productos[i].marca;
            if (!marcasUnicas.includes(marca)) {
                marcasUnicas.push(marca);
            }
        }

        marcasUnicas.forEach((marca) => {
            const marcaItem = document.createElement("li");
            marcaItem.textContent = marca;
            marcaItem.classList.add("marca-item");

            marcaItem.onclick = () => {
                const productosFiltrados = productos.filter((producto) => producto.marca.toLowerCase() === marca.toLowerCase());
                mostrarProductos(productosFiltrados);
            };

            listaMarcas.appendChild(marcaItem);
        });

    })


