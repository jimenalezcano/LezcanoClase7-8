//Creo lista de productos de categoria: Maquillaje, marca: Maybelline, producto: labiales

const productoLabialUno = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "20 pioneer",
    precio: 1000,
}

const productoLabialDos = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "65 lover",
    precio: 1000,
}

const productoLabialTres = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "70 Pink",
    precio: 1000,
}

const productoLabialCuatro = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "90 Coral",
    precio: 1000,
}

const productoLabialCinco = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "07 Loyalist",
    precio: 1000,
}

//Junto productos en un array

const labialesMaybelline = [productoLabialUno, productoLabialDos, productoLabialTres, productoLabialCuatro, productoLabialCinco]

//Muestro en consola

console.log(labialesMaybelline)

//Creo objetos de producto categoria: Maquillaje, Marca:Maybelline producto: delineadores

const productoDelineadorUno = {
    categoria: "Maquillaje",
    nombre: "Delineador Uno",
    marca: "Maybelline",
    color: "Negro",
    precio: 800,
}

const productoDelineadorDos = {
    categoria: "Maquillaje",
    nombre: "Delineador 2",
    marca: "Maybelline",
    color: "Marron",
    precio: 700,
}

const productoDelineadorTres = {
    categoria: "Maquillaje",
    nombre: "Delineador 3",
    marca: "Maybelline",
    color: "Azul",
    precio: 600,
}

//Junto productos de delineador en array 

const delineadoresMaybelline = [productoDelineadorUno, productoDelineadorDos, productoDelineadorTres]

//Muestro en un console log el array 

console.log(delineadoresMaybelline)

//Carrito de compras, en un array

const carrito = []

//Agrego productos con push

carrito.push(productoLabialCinco)

carrito.push(productoDelineadorDos)

//con For each recorro el array y lo muestro en consola
carrito.forEach(element => {
    console.log(element);
});