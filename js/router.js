// Dejar nav fija y sólo cambiar contenido main
function loadPage(page) {
const contentMain = document.getElementById('content');

fetch(page) 
    .then(response => response.text())
    .then(data => {
        contentMain.innerHTML = data;
    })
    .catch(error => {
        contentMain.innerHTML = `<p>No se puede cargar la página: ${error}</p>`;
    });
};
