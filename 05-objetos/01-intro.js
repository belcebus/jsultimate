let email = 'belcebus@gmail.com';
let name = 'David';
let direccion = {
        calle: 'Gran Via',
        numero: 15,
};

let user = {
    email: "belcebus@gmail.com",
    name: "David",
    direccion: {
        calle: "Gran Via",
        numero: 15,
    },
    activo: true,
    recuperarClave: function(){
        console.log('Recuperando clave');
    },  //función sin nombre es una función anónima
        //tenemos una propiedad y colocarle un nombre
        // sería redundante.
};