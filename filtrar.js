const prompt = require('prompt-sync')();

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "María", edad: 30 },
    { nombre: "Carlos", edad: 15 }
];

function filtrarUsuarios(usuarios, edad, mostrarMayores) {
    if (mostrarMayores) {
        return usuarios.filter(u => u.edad >= edad);
    } else {
        return usuarios.filter(u => u.edad < edad);
    }
}

const input = prompt('Ingresa un número:');
const numero = parseInt(input);

if (isNaN(numero)) {
    console.log('Por favor ingresa un número válido.');
} else {
    const mostrarMayores = numero >= 18;
    const filtrados = filtrarUsuarios(usuarios, 18, mostrarMayores);

    if (mostrarMayores) {
        console.log('\nPersonas mayores de edad (>= 18):');
    } else {
        console.log(`\nPersonas menores de edad (< 18):`);
    }
    console.log('-----------------------------');

    if (filtrados.length === 0) {
        console.log('No se encontraron personas que cumplan el criterio.');
    } else {
        filtrados.forEach(u => console.log(`Nombre: ${u.nombre}, Edad: ${u.edad} años`));
        console.log(`\nTotal: ${filtrados.length}`);
    }
}

