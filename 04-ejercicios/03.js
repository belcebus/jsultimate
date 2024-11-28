/**
 * indice validar que no sea menor a cero y que el elemento
 * exista en el array
 */

function getbyIdx(arr, idx){
    if(idx >= arr.length || idx < 0){
        return "Array out of index";
    }else{
        return arr[idx];
    }
}

let resultado = getbyIdx([1,2,3],0);
console.log(resultado);
resultado = getbyIdx([1,2,3],1);
console.log(resultado);
resultado = getbyIdx([1,2,3],2);
console.log(resultado);
resultado = getbyIdx([1,2,3],-1);
console.log(resultado);
resultado = getbyIdx([1,2,3],3);
console.log(resultado);