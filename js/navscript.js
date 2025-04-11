// Función para guardarla ruta del archivo
// Eliminar las barras junto a los html para generar el id
// y agregar la clase active
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const fileName = path.split("/").pop();
  const sectionId = fileName.replace(".html", "");

  const activeSection = document.getElementById(sectionId);

  if (activeSection) {
    activeSection.classList.add("active");
  } 
});


// Abrir y cerrar las secciones en media screen
const sections = document.querySelector ("#sections__button");
const open = document.querySelector ("#open");
const close = document.querySelector ("#close");

  open.addEventListener ('click', () => {
    sections.classList.add ("visible");
  })

  close.addEventListener('click', () => {
    sections.classList.remove ("visible");
  })