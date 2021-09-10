//limittes \bcat\b si o si debe ser cat
var expresion1 = /\bcat\b/;

console.log(expresion1.test("cat"));//true
console.log(expresion1.test("categoría"));//false