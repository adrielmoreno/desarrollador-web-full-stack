"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

//convertir el JSON en cadena
var personaJSON = JSON.stringify(persona);

//convertir cadena en JSON
var nuevaPersona = JSON.parse(personaJSON)
