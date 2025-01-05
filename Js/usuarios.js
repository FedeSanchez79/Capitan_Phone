// USUARIOS:
// 1. Crear un registro de usuario
// 2. Una vez creado darle la posibilidad de ser admin o usuario normal
// 3. Si es admin darle acceso a modificar el catalogo, acceso a la base de datos y a la tabla de usuarios


// SIGNIN USUARIOS

const registroUsuario = []

SignInUsuario = () => {
class DatosUsuario {
    constructor (nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }
}

let usuarioNombre = prompt("Ingrese su nombre")

let usuarioApellido = prompt("Ingrese su apellido")

let usuarioCorreo = prompt("Ingrese su correo electrónico")

let usuarioUsuario = new DatosUsuario (usuarioNombre, usuarioApellido, usuarioCorreo)
registroUsuario.push(usuarioUsuario)

if(usuarioNombre === "Federico" && usuarioApellido === "Sanchez" && usuarioCorreo === "fedesanchez@gmail.com"){
    alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted es Administrador`)
}else {
    alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted esta registrado correctamente`)
}
}

SignInUsuario()

console.log(registroUsuario)
