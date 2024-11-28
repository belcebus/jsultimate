/**
 * crear un algoritmo que devuelva la cantidad
 * de numeros positivos de un array
 */

let array = [2,5,7,15,-5,-100,55];

function cuentaPositivos(arr){
    let cantidad = 0;
    for( numero of arr){
        numero>=0?cantidad++:undefined;
    }
    return cantidad;
}

let resultado = cuentaPositivos(array);
console.log(resultado);