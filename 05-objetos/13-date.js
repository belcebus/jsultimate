const ahora = new Date();
console.log(ahora);

const fecha = new Date('December 25 1986 14:15 UTC');
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15 );
console.log(fecha2);

const fecha3 = new Date(1986, 11, 25, 14+1, 15 ); //diferencia horaria +1
console.log(fecha3);

console.log("dateString", fecha3.toDateString());
console.log("isoString", fecha3.toISOString()); //este es el formato deseable por exportable
console.log("timeString", fecha3.toTimeString());

console.log("hora",fecha3.getHours());
console.log(fecha3.setHours(9));

const fecha4 = new Date(fecha3.toISOString());
console.log(fecha4);

