/*Clona todo lo del nodo de atrás*/
let logos = document.getElementById("slider").cloneNode(true);

/*Coge el contenedor del nodo con el id "logos" y le añade el nodo creado*/
document.getElementById("logos").appendChild(logos);