//operador para combinar arrays de una manera más facil de leer. ECMA6

let arr1 = [1,2];
let arr2 = [5,6];

let arr3 = [...arr1, 3, 4, ...arr2]; //hacerlo con concat resulta en un código más complejo.
console.log(arr3);
/**
 * [ 1, 2, 3, 4, 5, 6 ]
 */

//con este operador podemos crear copias.
let copia = [...arr3];
arr3.pop();

console.log(arr3, copia);
/**
 * [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5, 6 ]
 */