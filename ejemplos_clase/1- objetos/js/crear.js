'use strict';

// Objeto vacio
const nuevoObjeto = {};
console.log(nuevoObjeto);

// Objeto con valores iniciales
const objetoNotebook = {  
		nombre: "Notebook",
		precio: 100000,
		color: "Negro"
};
console.log(objetoNotebook);

// Crear un objeto dada una función
function nuevoUsuario(nombre, contraseña){
	const usuario = {
		[nombre]:contraseña
    };
    return usuario
};

const inove = nuevoUsuario("inove", "123");
console.log(inove);
