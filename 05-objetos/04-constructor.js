// { id: 1 recuperarClave: function(){} }
function Usuario(){ //upper camel case / pascal case por convención
    this.id = 1;                      //esto es una propiedad
    this.recuperarClave = function(){ //esto se llama método, no función.
        console.log("Recuperando clave");
    }
}

//lo siguiente no funciona porque Usuario() no retorna nada
let malUsuario = Usuario();
console.log(malUsuario);
/*
    undefined
*/

let usuario = new Usuario();
// 1º con new, primero se crea un objeto vacío {}
// 2º despues se vincula con el prototipo de la función constructora
// 3º el objeto vacío se le asigna a this -> this = {}
// 4º si la funcion no retorna nada, se retorna automáticamente this

console.log(usuario);
usuario.recuperarClave;