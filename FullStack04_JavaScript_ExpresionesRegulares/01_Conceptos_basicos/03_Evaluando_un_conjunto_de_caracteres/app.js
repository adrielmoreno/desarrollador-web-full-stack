//entre corchetes indica si existe por lo menos uno de esos caracteres
//var expresion1 = /[0123456789]/;

//rangos: del 0 al 9
//letras: de la a hasta z
//letras: de la A hasta Z
var expresion1 = /[0-9a-zA-Z]/;

console.log(expresion1.test('Sucedió en 1996'));