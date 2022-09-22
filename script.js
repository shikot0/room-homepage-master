const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('previous-button');
const slides = document.querySelectorAll('.slide');
const showNavBtn = document.getElementById('show-nav-button');
const nav = document.querySelector('nav');

slides.forEach((slide, index) => { 
    slide.style.left = `${index * 100}%`  
})  

showNavBtn.addEventListener('click', () => {
    if(nav.classList.contains('visible')) {
        nav.classList.remove('visible');
        showNavBtn.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`;
    }else { 
        nav.classList.add('visible');
        showNavBtn.innerHTML = `<img src="images/icon-close.svg" alt="">`
    }
})
let counter = 0;  

function carousel() {
    if(counter === slides.length) { 
        counter = 0; 
    } 
    if(counter < 0) { 
        counter = slides.length - 1;  
    }
    slides.forEach(slide => {  
        slide.style.transform = `translateX(-${counter * 100}%)` 
    })
}

function nextSlide() {
    counter++;
    carousel();
}
function prevSlide() {
    counter--;
    carousel(); 
} 

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowRight':
            nextSlide();
            break;
        case 'ArrowLeft': 
            prevSlide();
            break; 
        default:
            return
    }
})
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
