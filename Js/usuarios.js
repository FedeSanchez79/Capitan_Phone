// LOGIN y LOGOUT USUARIOS

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

let nuevoUsuario = new DatosUsuario (usuarioNombre, usuarioApellido, usuarioCorreo)
registroUsuario.push = nuevoUsuario
}

const usuarios = []
const contrasenas = []

LogInUsuario = () => {
    let altaUsuario = prompt("Por favor ingrese su correo electrónico")
    if (altaUsuario == ""){
        alert("Debe ingresar su correo electrónico")
    }else{
        alert("Usuario ingresado")
    }

    let altaContrasena = parseInt(prompt("Por favor ingrese su contraseña numérica"))
    if (altaContrasena == ""){
        alert("Debe ingresar una contraseña")
    }else{
        alert("Contraseña ingresada")
    }

    let ingresoUsuario = altaUsuario.push(usuarios)

    if(ingresoUsuario !== this.correo){
        alert("Usuario no registrado")
    }else{
        alert("Bienvenido " + this.nombre)
    }
    let ingresoContrasena = altaContrasena.push(contrasenas)

    if(ingresoContrasena !== isNaN){
        alert("Valor ingresado no válido")
    }else{
        alert("Contraseña aceptada")
    }
}

SignInUsuario()

LogInUsuario()