//construir una función para saber si dos objetos son similares.
//deben tener las mismas propiedades y los mismos valores
function similares(obj1, obj2){
    for (let prop in obj1){
        if (obj1[prop]!==obj2[prop]){
            return false;
        }
    }
    return true;
}

let resultado = similares(
    {id: 1, name: 'Nico'},
    {id: 1, name: 'Lalo'},
);

console.log(resultado); //false

resultado = similares(
    {id: 1, name: 'Nico'},
    {id: 1, name: 'Nico'},
);

console.log(resultado); //true