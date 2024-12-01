//crear un funcion que evalue si un objeto tiene una propiedad en particular

let objeto = {
    id: 1,
    name: 'chanchito',
    login: function(){},
    logout: function(){},
}

let propiedad = 'name';

function tienePropiedad(obj, propiedad){
    let encontrado = false;
    for ( let prop in obj){
        if (prop == propiedad){
            encontrado=true
        }
    }
    return encontrado;
}

console.log(`El objeto ${objeto} tiene la propiedad ${propiedad}?`,tienePropiedad(objeto,propiedad));