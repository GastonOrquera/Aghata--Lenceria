document.addEventListener('DOMContentLoaded', function () {

    ScrollReveal().reveal('.scroll-reveal', {

        origin: 'right',
        distance: '40px',
        duration: 1600,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200,
        opacity: 1

    });

    ScrollReveal().reveal('.scroll-reveal2', {

        origin: 'left',
        distance: '40px',
        duration: 1000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200

    });

    ScrollReveal().reveal('.scroll-reveal3', {
        origin: 'left',
        distance: '200px',
        duration: 4000,
        easing: 'cubiz-bezier(0.5,0,0,1)',
        interval: 200
    });


    /*START HAMBURGER*/

    var hamburger = document.querySelector(".hamburger");

    var nav = document.querySelector("nav");

    var navLinks = document.querySelectorAll("nav a");

    hamburger.onclick = function () {

        nav.classList.toggle("active");

    }

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            nav.classList.remove("active");

        });


    });


    /*START DROPDOWN*/

    const caretIcon = document.querySelector('.bi-caret-down-fill');
    const dropdownMenu = document.querySelector('.nav__dropdown');

    caretIcon.addEventListener('click', function () {

        dropdownMenu.classList.toggle('hidden');
        dropdownMenu.classList.toggle('visible');

    });


});



/*Sweet alert btn comprar*/

document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.btn-article');

    function mostrarAlerta() {
        Swal.fire({
            title: 'Direccionando a WhatsApp...',
            confirmButtonText: 'Aceptar',
            backdrop: 'true',
            timer: 2000,
            timerProgressBar: true,
            customClass: {
                popup: 'class-swal'
            }
        }).then(() => {

            buyButtons.forEach(button => {
                button.onclick = mostrarAlerta;
            });
        });
    }


    buyButtons.forEach(button => {
        button.onclick = mostrarAlerta;
    });
});

/*end Sweet alert btn comprar*/


/* SLIDER */

let sliderInner = document.querySelector('.slider--inner');

let images = sliderInner.querySelectorAll('img');

let index = 1;

setInterval(function () {

    let percentage = index * -100;

    sliderInner.style.transform = "translateX(" + percentage + "%)";

    index++;

    if (index > (images.length - 1)) {
        index = 0;
    }



}, 2000);




