const prompt = require('prompt-sync')();

function calcularPromedio(notas) {
	if (!Array.isArray(notas) || notas.length === 0) return 0;
	const sum = notas.reduce((acc, n) => acc + n, 0);
	const avg = sum / notas.length;
	return Number(avg.toFixed(2));
	}

const text = prompt('Ingresa las notas separadas por comas (ej: 7.5,8,9): ');
const notasArray = text
	.split(',')
	.map(s => s.trim())
	.filter(s => s.length > 0)
	.map(s => parseFloat(s))
	.filter(n => !isNaN(n));

if (notasArray.length === 0) {
	console.log('No se ingresaron notas válidas.');
} else {
	const promedio = calcularPromedio(notasArray);
	console.log(`El promedio es: ${promedio}`);
}
