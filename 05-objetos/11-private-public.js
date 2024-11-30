// las variables y funciones (objetos en definitiva)
// que se crean dentro de un objeto a través de su 
// función constructor no son accesibles desde fuera (public)
// y solo accesibles dentro del propio objeto.

function Usuario(){
    this.name = "";
    //this.log = function(){
    let log = function(){
        console.log("Login...");
    };
    this.guardar = function guardar(){
        log();
        console.log("Guardando...");
    };
};

let usuario = new Usuario();

usuario.guardar();

usuario.log = function (){console.log("KKKK")}; // no puede sobrescribirla.

usuario.guardar();