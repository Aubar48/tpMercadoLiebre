//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Home"
                : "Mercado liebre"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404 Not Found") {
    setInterval(() => {
        document.title =
            alertShow ? "404 Not Found"
                : "Mercado liebre"

        alertShow = !alertShow
    }, 1000)
}

//modo dia y noche con localStorage
const botonModo = document.getElementById("modo");
botonModo.addEventListener("click", cambiarModo);

// Obtener el estado del modo del almacenamiento local
if (localStorage.getItem('modo') === 'noche') {
    document.querySelector('body').classList.add('noche');
}

function cambiarModo() {
    const body = document.querySelector("body");

    body.classList.toggle("dia");
    body.classList.toggle("noche");
    if (localStorage.getItem('modo') === 'dia') {
        localStorage.setItem('modo', 'noche');
    } else {
        localStorage.setItem('modo', 'dia');

    }

}

//msj error 404 que se escribe solo
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        strings: ["ERROR 404, PAGE NOT FOUND!"],
    }).go();
});

//change color de las etiqueta a al pasar por encima de ellas

$("a").mouseenter(elem => {
    elem.target.style.color = "blue"
})
$("a").mouseleave(elem => {
    elem.target.style.color = "black"
})