//al menos uno de los elementos debe ser número
//var expresion1 = /[\d]/;

//console.log(expresion1.test('29-junio-2007'));//true

//Que no sea binario
var expresion2 = /[^01]/;

console.log(expresion2.test('10101002100110001'));//true, tiene un 2