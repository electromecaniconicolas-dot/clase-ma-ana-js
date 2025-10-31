const prompt = require('prompt-sync')();
const productos = [
	{ nombre: "camisa", precio: 20 },
	{ nombre: "pantalon", precio: 30 },
	{ nombre: "zapatos", precio: 50 }
];
let Productos = prompt("Ingresa el nombre del producto que buscas: ");

function buscarProducto(nombre) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return `Producto encontrado: ${productos[i].nombre}, Precio: $${productos[i].precio}`;
        }
    }
    return "Producto no encontrado en el inventario.";
}
let resultado = buscarProducto(Productos);
console.log(resultado);

