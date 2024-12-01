//buscar primitivos es más fácil que los tipos de datos por referencia.

const letras = ['a','b','c','d','e','f','a',1];

console.log(letras.indexOf('c')); // primera ocurrencia. 2
console.log(letras.indexOf(1));   // primera ocurrencia. 7
console.log(letras.indexOf('1')); // tiene que ser del mismo tipo. así que -1
console.log(letras.indexOf(2));   // -1 no encontrado.
console.log(letras.lastIndexOf('a')); // ultima ocurrencia. 6
console.log(letras.includes('a')); // if(letras.indexOf('a') !== -1) true
