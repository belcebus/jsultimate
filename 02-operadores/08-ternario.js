//expresion ? 'si es true' : 'si es false'
let edad = 16;
function acceso(edad){
    return edad > 17 ? "permitido" : "no permitido";
}

console.log(acceso(edad));
/*
    no permitido
*/
edad = 18;
console.log(acceso(edad));
/*
    permitido
*/