// Animación text typing cabecera
const texto = "UX/UI DESIGNER // FRONTEND";
const contenedor = document.querySelector(".inf__courses");
let i = 0;
let escribiendo = true;

function handleEscribirYBorrar() {
  if (escribiendo) {
    // Coge el tamaño del texto y escribe letra por letra
    if (i < texto.length) {
      contenedor.innerHTML += texto.charAt(i);
      i++;
      setTimeout(handleEscribirYBorrar, 100);
    } else {
      escribiendo = false;
      setTimeout(handleEscribirYBorrar, 1000);
    }
  } else {
    // Borra letra por letra
    if (i > 0) {
      contenedor.innerHTML = texto.substring(0, i - 1);
      i--;
      setTimeout(handleEscribirYBorrar, 50);
    } else {
      escribiendo = true;
      setTimeout(handleEscribirYBorrar, 1000);
    }
  }
}

handleEscribirYBorrar();