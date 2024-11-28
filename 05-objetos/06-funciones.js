//las funciones se consideran objetos de primera clase
//por lo que pueden ser asignadas a otras variables
//retornadas o pasadas como parametros. 
//como tal tienen propiedades.

function Usuario(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

console.log(Usuario.name);
/*
    Usuario
*/
console.log(Usuario.length);
/*
    2
*/
const U = Usuario;
let user = new U("Nicolas","Maduro");
console.log(user);
/*
    Usuario { nombre: 'Nicolas', apellido: 'Maduro' }
*/

//también puede ser pasada como argumento
function of(Fn, arg1, arg2){
    return new Fn(arg1,arg2);
}

let user1 = of(Usuario,"Nicolas","Maduro");
console.log(user1);
/*
    Usuario { nombre: 'Nicolas', apellido: 'Maduro' }
*/

//podemos retornarlas dentro de otras funciones.
function returned(){
    return function(){
        console.log("hola mundo");
    };
};

const saludo = returned();
console.log(saludo);
saludo();