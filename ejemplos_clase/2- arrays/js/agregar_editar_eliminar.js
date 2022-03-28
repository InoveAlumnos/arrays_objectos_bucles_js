'use strict';

// Array vacio
const arrayVacio = [];

// Agregar un elemento al final del array (push)
arrayVacio.push(1);
console.log(arrayVacio);

// Agregar otro elemento al final del array (push)
arrayVacio.push(10);
console.log(arrayVacio);

/* NOTA */ 
/*
	Aunque el Array se haya declarado con "const"
	es posible agregar elementos.
	"const" solo se asegura que no vuelvas a crear una variable
	con ese nombre (reserva el espacio de memoria como único)
*/

// Editar datos de un array
console.log("Editar datos");

const arrayProductos = ["Leche", "Carne", "Lechuga", "Huevos"];
arrayProductos[0] = "Tomate"
console.log(arrayProductos);


// Eliminar datos de un Array
console.log("Eliminar datos");

const arrayConMuchosElementos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Eliminar el elemento con índice 3 (sería la posición 4)
arrayConMuchosElementos.splice(3, 1);
console.log(arrayConMuchosElementos);

// Eliminar el último elemento
arrayConMuchosElementos.pop();
console.log(arrayConMuchosElementos);

// Eliminar el primer elemento
arrayConMuchosElementos.shift();
console.log(arrayConMuchosElementos);
