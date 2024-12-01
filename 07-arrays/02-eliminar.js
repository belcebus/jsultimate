const letras = ['a','b','c','d','e','f'];

//eliminar el ultimo elemento
const ultimo=letras.pop();
console.log(ultimo,letras);
/**
 * f [ 'a', 'b', 'c', 'd', 'e' ]
 */

//eliminar el primer elemento
const primero = letras.shift();
console.log(primero,letras);
/**
 * a [ 'b', 'c', 'd', 'e' ]
 */

//eliminar por el medio dos elementos
const medio = letras.splice(1,2);
console.log(medio,letras);
/**
 * ['c', 'd'] [ 'b', 'e' ]
 */