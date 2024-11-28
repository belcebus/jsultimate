// if (condicion)
//     expresion
// else
//      expresion2

// if (condicion){
//     expresion1
//     expresion2
// }else{
//      expresion3
//      expresion4
// } 

let edad = 25;

if (edad > 17) {
    console.log("usuario mayor de edad");
}else{
    console.log("usuario menor de edad");
}

edad = 16;
if (edad > 17) {
    console.log("usuario mayor de edad");
}else if(edad > 13){
    console.log("usuario necesita estar acompañado");
}else{
    console.log("usuario menor de edad");
}