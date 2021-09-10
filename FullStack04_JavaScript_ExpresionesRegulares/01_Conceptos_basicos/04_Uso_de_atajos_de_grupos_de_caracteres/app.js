//29-06-2007
//cualquier número, cualquier número - cualquier número, cualquier número - cualquier número, cualquier número, cualquier número, cualquier número
var expresion1 = /\d\d-\d\d-\d\d\d\d/;

console.log(expresion1.test('29-06-2021'));//true
console.log(expresion1.test('29-junio-2021'));//false

