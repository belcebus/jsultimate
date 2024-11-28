//cuales son los 10 primeros numeros pares

let contador_numeros_pares = 0;
let numero_actual=0;

function esPar(numero){
    return numero % 2 == 0;
}
while (contador_numeros_pares < 11){
    if (esPar(numero_actual)) {
        contador_numeros_pares++;
        console.log(numero_actual);
    }
    numero_actual++;
}