"use strict"

//********************************
//*** Iterando arreglos con forEach

var platillos = ["ceviche", "tacos", "pasta"];

// platillos.forEach( platillo => console.log(platillo) )

//accediendo solamente al indice
platillos.forEach( (platillo, index) => console.log(index, platillo) )