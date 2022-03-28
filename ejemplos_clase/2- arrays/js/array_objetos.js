'use strict';

// Crear objetos de cada producto
const producto1 = {
    nombre: "leche",
    precio: 150
}

const producto2 = {
    nombre: "carne",
    precio: 700
}

const producto3 = {
    nombre: "lechuga",
    precio: 100
}

// Crear una lista que contenga los productos
const productos = [producto1, producto2, producto3];
console.log(productos);

// Acceder al primer producto
console.log(productos[0]);

// Acceder al nombre del primer producto
console.log(productos[0].nombre);


// Crear un array de objetos de antemano
const productos2 = [
    {
        nombre: "leche",
        precio: 150
    },
    {
        nombre: "carne",
        precio: 700
    },
    {
        nombre: "lechuga",
        precio: 100
    }
]
console.log(productos2);

// Acceder al nombre del segundo elemento
const nombre = productos2[1].nombre;
console.log(nombre);