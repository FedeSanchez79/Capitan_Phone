// USUARIOS:
// 1. Crear un registro de usuario
//       ***TERMINADO***

// 2. Una vez creado darle la posibilidad de ser admin o usuario normal
//       ***TERMINADO***

// 3. Si es admin darle acceso a modificar el catalogo, acceso a la base de datos y a la tabla de usuarios
//       ***EN PROCESO***


// SIGNIN USUARIOS


let ingresar = document.getElementsByClassName(`botonLogin`)[0];const registroUsuario = [];

    class DatosUsuario {
        constructor (nombre, apellido, usuario, contrasena){
            this.nombre = nombre;
            this.apellido = apellido;
            this.usuario = usuario;
            this.contrasena = contrasena;
        };
        esAdmin(){
            return this.nombre === "Federico" && this.apellido === "Sanchez" && this.usuario === "fedesanchez@gmail.com";
        };
    };

        ingresar.addEventListener("click", function(){
        let usuarioNombre = document.getElementById("nombre").value.trim();
        let usuarioApellido = document.getElementById("apellido").value.trim();
        let usuarioUsuario = document.getElementById("usuario").value.trim();
        let usuarioContrasena = document.getElementById("contrasena").value.trim();
        let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value.trim();

        if (usuarioContrasena !== usuarioRepetirContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        };
            
        const nuevoUsuario = new DatosUsuario(
            usuarioNombre,
            usuarioApellido,
            usuarioUsuario,
            usuarioContrasena
        );

        registroUsuario.push(nuevoUsuario);

        if (nuevoUsuario.esAdmin()){
            alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted es Administrador.`);
        }else {
            alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted está registrado correctamente.`);
        }

        console.log("Usuarios registrados:", registroUsuario);

    });
        


