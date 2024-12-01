//agregar una propiedad id aleatoria al objeto.

let objeto = { name: 'Chanchito'};

function agregarId(obj){
    if ( typeof obj == "object" ){
        obj['id']=Math.random();
    }
}

agregarId(objeto);
console.log(objeto)