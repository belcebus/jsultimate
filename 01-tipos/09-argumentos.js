function suma(a, b) { //definen parámetros
    console.log(arguments) //podemos acceder a toda la lista de argumentos que
                           // que está recibiendo la función aunque estos no
                           // parámetros definidos
    /*
        [Arguments] { '0': 2, '1': 6, '2': 1, '3': 2, '4': 3 }
    */
    return a + b;
}

console.log(suma(2,6,1,2,3)); //reciben argumentos (si no coinciden con los
                              //parametros definidos no se genera error)