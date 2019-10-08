'use strict'

// function randomImageBackground() {
//     let images = ['images/mug1.jpg',
//         'images/mug2.jpg',
//         'images/mug3.jpg'
//     ];
//     let random = Math.floor(Math.random() * images.length);
//     $('#background').css({ 'background-image': 'url(images/' + random + ')' })
// }

// $(randomImageBackground());

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("fadeSlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}