// SIGNIN USUARIOS

const registroUsuario = [];

    class DatosUsuario {
        constructor (nombre, apellido, usuario, contrasena){
            this.nombre = nombre;
            this.apellido = apellido;
            this.usuario = usuario;
            this.contrasena = contrasena;
        };
    };

    let ingresar = document.getElementsByClassName(`botonLogin`)[0];

    ingresar.addEventListener("click", function(){
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioUsuario = document.getElementById("usuario").value;
    let usuarioContrasena = document.getElementById("contrasena").value;
    let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value;

    if (usuarioContrasena !== usuarioRepetirContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    };
            
    const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido, usuarioUsuario, usuarioContrasena);

    registroUsuario.push(nuevoUsuario);

    localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));
});
        


