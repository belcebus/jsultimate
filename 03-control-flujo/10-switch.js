let accion = "1";

switch (accion) {
    case "listar":
        console.log("Action listar");
        break;
    case "guardar":
        console.log("Action guardar");
        break;
    case 1:
        console.log("entero 1");
        break;
    case "1":
        console.log("string 1");
        break;
    default:
        console.log("Action no reconocida");
}