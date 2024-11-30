const saludo = "Hola mundo!\n\tbienvenidos a \"ultimate javascript\" :)";

//TEMPLATE STRINGS mediante el uso del ` 

//una forma más elegante que mediante el uso de caracteres de escape
//y además pueden recibir variable.
const nombre = "Nicolás";

function getApellido(){
    return "Lopez"
};

const plantilla = `Hola ${nombre} ${getApellido()}!
        bienvenidos a "ultimate javascript" :)
dos más dos, son ${2+2}
`;
console.log(plantilla);

//podemos transformar una de estas plantillas en una funcion:

function getMensaje(nombre, apellido){
    return `Hola ${nombre} ${apellido}!
        bienvenidos a "ultimate javascript" :)
        dos más dos, son ${2+2}
`;
}

console.log(getMensaje("Nicolás",getApellido()));
