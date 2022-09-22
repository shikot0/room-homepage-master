const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('previous-button');
const slides = document.querySelectorAll('.slide');


slides.forEach((slide, index) => { 
    slide.style.left = `${index * 100}%`  
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
nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
})
prevBtn.addEventListener('click', () => {
    counter--;
    carousel(); 
})