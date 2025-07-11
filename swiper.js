const slides = document.querySelectorAll('.slades'); 
const btnForward = document.getElementById('click-forward'); 
const btnBack = document.getElementById('click-back');     


let currentSlide = 0; 
slides[0].classList.add('active'); 


function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); 
  }
}
function slideForward() {
  reset(); 
  currentSlide = (currentSlide + 1) % slides.length; 
  slides[currentSlide].classList.add('active')
}


function slideBack() {
  reset();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
  slides[currentSlide].classList.add('active'); 
}


btnForward.addEventListener('click', slideForward); 
btnBack.addEventListener('click', slideBack);


