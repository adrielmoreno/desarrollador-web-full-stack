"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// busca la primera incidencia y devuelve la posición inicial
// resultado = mensaje.indexOf("aprendiendo");


// busca la última aparición y devuelve la posición donde inicia
//resultado = mensaje.lastIndexOf("aprendiendo");


// search:
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular. la i indica inCaseSensitive
resultado = mensaje.search(/ja/i);


console.log(resultado);