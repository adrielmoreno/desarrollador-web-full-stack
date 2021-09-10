//patrones opcionales
var expresion1 = /pollo|res|pescado/;
console.log(expresion1);

console.log(expresion1.test('El cliente pidió pollo'));//true
console.log(expresion1.test('El cliente pidió tacos'));//false