"use strict"

//*** Temporizadores o timers
//********************************

// setInterval ejecución infinita
// setTimeout ejecutar acción después del tiempo indicado sólo una vez

//  var temporizador = setInterval(function () {
//      setColor();
//  }, 2000);


 setTimeout(function () {
     setColor();
 }, 3000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

//llamar desde consola para detener
function stopChangeColor() {
    clearInterval(temporizador)
}