//Construye usuarios usando una factory function
function createUsuario(name){
    return {
        name, //es los mismo que-> name: name,
        id: Math.random(),
    };
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Chanchito feliz');
console.log(user,user2);