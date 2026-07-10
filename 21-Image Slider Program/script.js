const slides = document.querySelectorAll(".slide");
let slideIndex=0;
let intervalId=null;

document.addEventListener("DOMContentLoaded", initializeSlider)
// When the HTML document has been completely loaded and parsed, call the initializeSlider() function.

function initializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId=setInterval(nextSlide, 3000);
    } 
}

// setInterval(...) → creates a repeating timer.
// nextSlide → the function to run each time.
// 5000 → run it every 5000 ms (5 seconds).
// intervalId → stores the timer's ID so you can later stop it with

function showSlide(){
    if(slideIndex>=slides.length) slideIndex=0;
    else if(slideIndex<0) slideIndex=slides.length-1;
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide();
}

function nextSlide(){
    slideIndex++;
    showSlide();
}