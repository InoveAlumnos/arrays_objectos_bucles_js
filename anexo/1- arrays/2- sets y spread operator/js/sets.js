'use strict';

// Set (conjunto) con valores iniciales
const nuevoConjunto = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9]);
console.log(nuevoConjunto);

for(const x of nuevoConjunto){
	console.log(x);
}
