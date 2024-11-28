/**
 * crear un algoritmo que devuelva el numero
 * menor y mayor de una array
 */

let numeros = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    if (arr.length > 0){
        let res={
            menor: arr[0],
            mayor: arr[0],
        };
        for(let numero of arr){
            if(numero<res.menor){
                res.menor=numero;
            }
            if(numero>res.mayor){
                res.mayor=numero;
            }
        }
        return res;
    }
    return undefined;
}

console.log(getMenorMayor(numeros));
