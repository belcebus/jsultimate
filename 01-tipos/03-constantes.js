const mensaje = "Hola mundo";

console.log(mensaje);
/*
    Hola mundo
*/

try{
    mensaje = "Chanchito feliz";

    console.log(mensaje);
    /*
        TypeError: Assignment to constant variable.
    */
    
}catch(e){
    console.log(e);
}

// No podemos asignar un nuevo valor a una variable declarada como const, pero
// lo que si se puede es modificar el objeto.

const letras = ["a", "b", "c", "d"];
letras.push("e");
console.log(letras);