const fondos = document.querySelectorAll (".background img");
const secciones = document.querySelectorAll (".container__section");
const cara = document.querySelectorAll (".cuadrado");
const cruz = document.querySelectorAll (".detras");
const fondosDiv = document.querySelectorAll(".background");

secciones.forEach((seccion, index) => {
    seccion.addEventListener("mouseover", () => {
        // Resaltar el texto del elemento en hover y atenuar los demás
        cara.forEach((cara, i) => {
            if (i === index) {
                cara.style.color = "#FAF5E9"; 
            } else {
                cara.style.color = "#242323c0"; 
            }
        });

        cruz.forEach((detras, i) => {
            if (i === index) {
                detras.style.color = "#FAF5E9"; 
            } 
        });

        // Mostrar la imagen correspondiente y ocultar las demás
        fondos.forEach((fondo, i) => {
            fondo.style.opacity = i === index ? "1" : "0";
        });

        // Activar la capa oscura
        fondosDiv.forEach((fondo, i) => {
            if (i === index) {
                fondo.classList.add("activo");
            } else {
                fondo.classList.remove("activo");
            }
        });
    });

    seccion.addEventListener("mouseout", () => {
        // Restaurar todos los textos al color original
        cara.forEach((cara) => (cara.style.color = "#FAF5E9"));
        cruz.forEach((detras) => (detras.style.color = "#FAF5E9"));

        // Ocultar todas las imágenes de fondo
        fondos.forEach((fondo) => {
            fondo.style.opacity = "0";
        });

        fondosDiv.forEach((fondo) => {
            fondo.classList.remove("activo");
        });
    });
});