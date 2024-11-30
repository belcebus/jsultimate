//determinar cuales propiedades son métodos.
// recuerda que metodos son funciones asignadas a propiedades de un objeto.

let objeto = {
    id: 1,
    name: 'chanchito',
    login: function(){},
    logout: function(){},
}

function getMetodos(obj){
    for (let prop in obj){
        if (typeof obj[prop] === 'function'){
            console.log("function: " + prop);
        }
    }
}

getMetodos(objeto);
