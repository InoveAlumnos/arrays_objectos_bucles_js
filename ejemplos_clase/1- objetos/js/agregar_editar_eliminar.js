'use strict';

// Objeto con valores iniciales
const objetoNotebook = {  
	nombre: "Notebook",
	precio: 100000,
	color: "Negro"
};

// Agregar datos a un objeto
console.log("Agregar datos");

// dotSyntax -> sintaxis de punto
objetoNotebook.marca = "Lenovo";
console.log(objetoNotebook);

// squarebraketsSyntax -> sintaxis de corchetes
objetoNotebook["ram"] = 8;
console.log(objetoNotebook);

// Editar datos a un objeto
console.log("Editar datos");
objetoNotebook.ram = 6;
objetoNotebook["color"] = "Rojo";
console.log(objetoNotebook);

// Eliminar datos de un objeto
console.log("Eliminar datos");
delete objetoNotebook.ram;
delete objetoNotebook["color"];
console.log(objetoNotebook);