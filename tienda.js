//Pido datos

let datos = prompt("Como te llamas?")

//Uso los datos del usuario en un alert
let bienvenida = alert("Bienvenido/a a FARMA WEB " + datos + "!")

//Otro prompt para preguntarle ubicacion y luego condicional
let ubicacion = prompt("De que zona sos?")


if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
}else{
   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
}

//Creo constructor para objeto usuario
class Usuario {
    constructor(nombre, apellido, documento, email, direccion, entrega, pago) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.direccion = direccion;
        this.entrega = entrega;
        this.pago = pago;

}};


//Creo cliente con molde Usuario
const cliente = new Usuario(
    prompt("Elija su nombre de Usuario?"),
    prompt("Cual es su apellido?"),
    prompt("Cual es su DNI?"),
    prompt("Cual es su email?"),
    prompt("Cual es su Direccion?"),
    prompt("Cual es su punto de entrega?"),
    prompt("Elija metodo de pago: MercadoPago/debito/efectivo")
);


function registrarUser(cliente) {
    var regCliente = JSON.stringify(cliente);
    localStorage.setItem(cliente, nombre, regCliente);
    console.log("Se guardo el cliente en LocalStorage")
}

registrarUser(cliente);

// Obtengo informacion del parrafo con id: presentacion de html

console.log(document.getElementById("presentacion"))
