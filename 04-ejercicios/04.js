/**
 * imprimir los primos del 0 al 10
 */

function esPrimo(numero){
    if(numero<=0){
        return false;
    }
    for (let i=2; i<numero; i++){
        if(numero % i == 0){
            return false;
        }
    }
    return true;
}

let i = 0;
while (i <= 1000){
    if(esPrimo(i)){
        console.log(i);
    }
    i++;
}