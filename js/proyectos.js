const container = document.querySelector('.slide-container')
const punto = document.querySelectorAll('.punto')

// Conseguir que se desplace por el carrousel en cada click que hagamos en un punto
// añadiendo y quitando la clase activa de .punto
punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -30

        container.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})