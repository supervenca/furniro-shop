
window.addEventListener('DOMContentLoaded', () => {

    //slides
    const slides = document.querySelectorAll('.rooms__slider__slide'),
      slide = document.querySelector('.rooms__slider__slide'),
      slider = document.querySelector('.rooms__slider'),
      next = document.querySelector('.next'),
      slidesWrapper = document.querySelector('.rooms__slider__container'),
      slidesField = document.querySelector('.slider-inner'),
      width = window.getComputedStyle(slide).width,
      indicators = document.querySelector('.rooms__slider__dots'),
      dots = document.querySelectorAll('.rooms__slider__dots__dot');
let slideIndex = 1;
let offset = 0;

function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
}

dots.forEach((dot, i) => {
  dot.setAttribute('data-slide-to', i + 1);
  if(i ==0){
    dot.classList.add('dot-active');
  }else{
    dot.classList.add('dot-inactive');
  }
  
dot.addEventListener('click', (e) => {
       const slideTo = e.target.getAttribute('data-slide-to');
       //переключение слайдов при нажатии на серые индикаторы
       slideIndex = slideTo;
       offset = deleteNotDigits(width) * (slideTo - 1);
       slidesField.style.transform = `translateX(-${offset}px)`;
         //переключение серых индикаторов
         dots.forEach(dot => {
           dot.classList.add('dot-inactive');
           dot.classList.remove('dot-active');
         });
         dots[slideIndex-1].classList.add('dot-active');
         dots[slideIndex-1].classList.remove('dot-inactive');
    });
});

next.addEventListener("click", () => {
    //если долистали до конца, возвращаемся в начало
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
      //добавляем ширину еще одного слайда (убираем px из значения 500px)
			offset += deleteNotDigits(width);
		}
    //сдвигаем слайды влево
		slidesField.style.transform = `translateX(-${offset}px)`;
    //увеличиваем индекс текущего слайда. если дошли до последнего - возвращаемся к первоначальному индексу: 1
		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
  //переключение серых индикаторов
    dots.forEach(dot => {
         dot.classList.add('dot-inactive');
         dot.classList.remove('dot-active');
       });
    dots[slideIndex-1].classList.add('dot-active');
    dots[slideIndex-1].classList.remove('dot-inactive');
	});
    
});