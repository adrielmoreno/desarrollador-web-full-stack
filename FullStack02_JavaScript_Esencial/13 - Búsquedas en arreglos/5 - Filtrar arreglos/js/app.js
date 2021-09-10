"use strict"

//********************************
//*** Filtrar arreglos

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
];

var resultado = null;

//find solo retorna la primera incidencia
//resultado =  menu.find(platillo => platillo.pais == 'México');

//devulve todas las incidencias
resultado =  menu.filter(platillo => platillo.pais == 'México');

console.log(resultado);