'use strict';

// Objeto con valores iniciales
const objetoNotebook = {  
	mombre: "Notebook",
	precio: 100000,
	color: "Negro"
};

// Acceder a los datos de un objeto

// dotSyntax -> sintaxis de punto
console.log(objetoNotebook.nombre);

// squarebraketsSyntax -> sintaxis de corchetes
console.log(objetoNotebook["color"]);

// Caso de uso para la sintaxis corchetes
const usuarios = {  
    inove: "alumnos@inove.com.ar",
    max: "maxpower@gmail.com",
    jean: "jeangrey@gmail.com"
};

function buscarEmail(nombre, objeto) {
	const email = objeto[nombre];
	return email;
};

const email = buscarEmail("inove", usuarios);
console.log(email);

// objectDestructuring -> deconstruir un objeto (mecanismo nuevo)
const {nombre, precio, color} = objetoNotebook;
console.log(nombre, precio, color);

/* para ver este ejemplo comentar el anterior
const { Nombre } = objetoNotebook;
console.log(Nombre);
*/

