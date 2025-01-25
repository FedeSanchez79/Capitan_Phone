// ESTABLEZCO 5 MINUTOS PARA REGISTRO DE USUARIO

let registroUsuario = JSON.parse(localStorage.getItem("registroUsuario")) || [];

class DatosUsuario {
    constructor(nombre, apellido, mail, usuario, contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.usuario = usuario;
        this.contrasena = contrasena;
    };
}

// Obtener el botón de login
let ingresar = document.getElementsByClassName(`botonLogin`)[0];

// Verificar si ya hay un usuario logueado y mostrarlo
function mostrarUsuarioLogueado() {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");
    if (usuarioLogueado) {
        let cambiarBoton = document.getElementById("botonCambiar");
        cambiarBoton.innerHTML = `<button class="botonLog">${usuarioLogueado}</button>
                                  <button id="logoutBtn" class="botonLog">Cerrar sesión</button>`;
        
        // Asociar el evento de cerrar sesión al botón de logout
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", cerrarSesion);
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    // Eliminar el usuario logueado del localStorage
    localStorage.removeItem("usuarioLogueado");

    // Actualizar el botón para mostrar la opción de "Iniciar sesión"
    let cambiarBoton = document.getElementById("botonCambiar");
    cambiarBoton.innerHTML = `<button class="botonLog"><a href="./login.html">Iniciar sesión</a></button>`;
}

// Evento para el registro de usuario
ingresar.addEventListener("click", function() {
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioMail = document.getElementById("mail").value;
    let usuarioUsuario = document.getElementById("usuario").value;
    let usuarioContrasena = document.getElementById("contrasena").value;
    let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value;

    // Verificar que todos los campos sean válidos
    if (usuarioNombre === "" || usuarioApellido === "" || usuarioMail === "" || usuarioUsuario === "" || usuarioContrasena.length < 8 || usuarioContrasena.length > 12 || usuarioContrasena !== usuarioRepetirContrasena) {
        contrasenaIncorrecta.innerHTML = `<p>Acceso denegado, vuelva a intentarlo.</p>`;
        return;
    } else {
        const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioContrasena);
        registroUsuario.push(nuevoUsuario);
        localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));

        // Guardar el nombre del usuario logueado en localStorage
        localStorage.setItem("usuarioLogueado", usuarioUsuario);

        // Actualizar el botón para mostrar el nombre del usuario y el botón de logout
        let cambiarBoton = document.getElementById("botonCambiar");
        cambiarBoton.innerHTML = `<button class="botonLog">${usuarioUsuario}</button>
                                  <button id="logoutBtn" class="botonLog">Cerrar sesión</button>`;

        // Asociar el evento de cerrar sesión al botón de logout
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", cerrarSesion);
    }
});

// Ejecutar al cargar la página para mostrar al usuario si ya está logueado
mostrarUsuarioLogueado();
