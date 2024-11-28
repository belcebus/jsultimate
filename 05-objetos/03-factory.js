//factory functions permite crear objetos de una manera sencilla y no repetitiva

function crearUsuario(nombre, email){
    return{
        nombre: nombre,
        email, //equivalente a main: mail. Cuando el parametro se llama igual que la propiedad.
        recuperarClave: function(){
            console.log('Clave recuperada');
        }
    };
}

let user1 = crearUsuario("david","david@gmail.com");
let user2 = crearUsuario("felipe","felipe@gmail.com");

console.log(user1, user2);