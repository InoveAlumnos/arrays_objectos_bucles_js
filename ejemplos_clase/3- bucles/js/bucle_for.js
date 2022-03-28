'use strict';

// Crear un arrray inicializado
const arrayCompras = ["Leche", "Carne", "Lechuga", "Huevos"];

console.log("Utilizando bucle for")

// Recorrer el array con un bucle for
for(let i = 0; i < arrayCompras.length; i++){
	console.log(arrayCompras[i]);
};

// Sino usar bucles, el código hubiera sido el siguiente
console.log("Sin utilizar bucles")

console.log(arrayCompras[0]);
console.log(arrayCompras[1]);
console.log(arrayCompras[2]);
console.log(arrayCompras[3]);

// Utilizando bucle "for of"
console.log("Utilizando bucle for of")

for(const elemento of arrayCompras){
	console.log(elemento)
};

// El bucle for o bucle for of se puede usar para recorrer
// cualquier tipo de Array, incluso uno con objetos dentro
const productos = [
    {nombre: "leche", precio: 150},
    {nombre: "carne", precio: 700}
]

for(const producto of productos){
	console.log(`El precio del producto ${producto.nombre} es $${producto.precio}`)
};

// Caso práctico de uso del bucle for
// Descomentar para probar el código
/*
let usuarios = 0;
let nombre = "";
let edad = "";

usuarios = prompt("¿Cuántos usuarios va a ingresar al sistema?");

for (var i = 1; i <= usuarios; i++) {
    nombre = prompt(`Indique el nombre del usuario ${i}`);
    edad = prompt(`¿Qué edad tiene ${nombre}?`);
    
    if (confirm(`restan ${usuarios - i} usuarios por ingresar, desea continuar?`) == false ) {
        // Condición de salida abrupta del bucle
        console.log("Salida del bucle con break");
        break;
    }
}

console.log("Terminó el bucle");
*/