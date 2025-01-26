
// 1. REGISTRO DE USUARIO NUEVO CON LA FUNCION CONTRUCTORA.
// 2. EVENTO PARA TOMAR LOS VALORES, SUBIRLOS AL LOCALSTORAGE, CON UN CONDICIONAL PARA VALIDAR LOS DATOS INGRESADOS.
// 3. TOMO DEL LOCALSTORAGE EL USUARIO NUEVO Y LOS MUESTRO EN EL BOTON DE INICIO DE SESION. APARECE EL BOTON DE CERRAR FUNCION.
// 4. HAGO UN BOTON DE CERRAR SESION QUE LIMPIA EL LOCALSTORAGE (VER COMO ELIMINAR INDIVIDUALMENTE CADA USUARIO)

//***1***//

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

//***2***//

let ingresar = document.getElementsByClassName(`botonLogin`)[0];

ingresar.addEventListener("click", function registro() {
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioMail = document.getElementById("mail").value;
    let usuarioUsuario = document.getElementById("usuario").value;
    let usuarioContrasena = document.getElementById("contrasena").value;
    let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value;

    if (usuarioNombre === "" || usuarioApellido === "" || usuarioMail === "" || usuarioUsuario === "" || usuarioContrasena.length < 8 || usuarioContrasena.length > 12 || usuarioContrasena !== usuarioRepetirContrasena) {
        contrasenaIncorrecta.innerHTML = `<p>Acceso denegado, vuelva a intentarlo.</p>`;
        return;
    } else {
        const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioContrasena);
        registroUsuario.push(nuevoUsuario);
        localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));
        localStorage.setItem("usuarioLogueado", usuarioUsuario);
        let cambiarBoton = document.getElementById("botonCambiar");
        cambiarBoton.innerHTML = `<button class="botonLog">${usuarioUsuario}</button>
                                  <button id="logoutBoton" class="botonLog">Cerrar sesión</button>`;                          
        contrasenaIncorrecta.innerHTML = `<p>Bienvenido ${usuarioUsuario}, registro exitoso !!!</p>`;
        const logoutBoton = document.getElementById("logoutBoton");
        logoutBoton.addEventListener("click", cerrarSesion);
    }
});

//***3***//

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

mostrarUsuarioLogueado();

//***4***//

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    let cambiarBoton = document.getElementById("botonCambiar");
    cambiarBoton.innerHTML = `<button class="botonLog"><a href="./login.html">Iniciar sesión</a></button>`;
}

