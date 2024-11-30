//Construye usuarios con la función constructor
function Usuario(name){
    this.name= name;
    this.id=  Math.random();
};

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user,user2);
/*
   Usuario {name: 'Felipe', id: 0.9238472398473294}
   Usuario {name: 'Chanchito', id: 0.7676567765775676}
*/