var mensaje = 'El cliente pidió sushi y comió su sushi, sushi, sushi, sushi';
//reemplaza taco por sushi
console.log(mensaje.replace(/sushi/, 'tacos'));

//g reemplaza todas las ocurrencias
console.log(mensaje.replace(/sushi/g, 'tacos'));

//reemplaza todas las i por o
console.log(mensaje.replace(/i/g, 'o'));