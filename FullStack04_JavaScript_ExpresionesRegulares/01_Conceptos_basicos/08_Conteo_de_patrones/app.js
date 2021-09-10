// día \d{1,2}- numero de uno o dos carácteres -
// mes \d{1,2}- numero de uno o dos carácteres -
// año \d{4} cuatro dígitos obiligatoriamente 
// hora \d{1,2}: numero de uno o dos carácteres:
// minutos \d{2} simepre habrá dos carácteres 00
// \d{2,}  mínimo 2 dígitos y máximo n dígitos
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;


console.log(expresion1.test('27-06-2007 11:45'));