let arr1=[1,2];
let arr2=[3,4];

const combinados = arr1.concat(arr2); //concatena pero no modifica por eso retornamos a otra variable
console.log(arr1,arr2,combinados);
/**
 * [ 1, 2 ] [ 3, 4 ] [ 1, 2, 3, 4 ]
 */

let arr3 = combinados.slice(0,2);
let arr4 = combinados.slice(2,combinados.length+1);
console.log(combinados,arr3,arr4);
/**
 * [ 1, 2, 3, 4 ] [ 1, 2 ] [ 3, 4 ]
 */

let dividido = combinados.slice(2);
console.log(combinados,dividido);
/**
 * [ 1, 2, 3, 4 ] [ 3, 4 ]
 */

//podemos usar el metodo slice para generar una copia del array

let arr5 = combinados.slice();
console.log(combinados,arr5);
/**
 * [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
 */

