//FUNCION PARA MOSTRAR LOS USUARIOS INGRESADOS EN EL LOCALSTORAGE Y EL BOTON CERRAR SESION

function mostrarUsuarioLogueado() {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");
    if (usuarioLogueado) {
        let cambiarBoton = document.getElementById("botonCambiar");
        cambiarBoton.innerHTML = `<button class="botonLog">${usuarioLogueado}</button>
                                  <button id="logoutBoton">Cerrar sesión</button>`;
        const logoutBoton = document.getElementById("logoutBoton");
        logoutBoton.addEventListener("click", cerrarSesion);
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    let cambiarBoton = document.getElementById("botonCambiar");
    cambiarBoton.innerHTML = `<button class="botonLog"><a href="./login.html">Iniciar sesión</a></button>`;
}

mostrarUsuarioLogueado();