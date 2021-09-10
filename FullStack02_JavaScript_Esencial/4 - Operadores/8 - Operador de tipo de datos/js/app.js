"use strict"

//********************************
//*** Operador de tipo de datos

var datoA = 10; // Número

var nombre = "Playa"; // Cadena de texto

var activo = true // Boleano

var persona = {
	edad: 34, // Número
	deporte: 'Correr' // Cadena de texto
} // Objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);

console.log(typeof persona);

console.log(typeof persona.edad);
console.log(typeof persona.deporte);


var a = 1;
var b = 2;
var c = 5;

var op1 = a < b;//true
var op2 = c <= a;//false
var op3 = (a > b) != (c > a) ;//false != true: true 
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);