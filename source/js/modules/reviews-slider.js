function initSlider() {
  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  const slides = document.querySelectorAll('.slide');

  let index = 0;

  const activeSlide = function (n) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[n].classList.add('active');
  };

  function prepareCurrentSlide() {
    activeSlide(index);
  }

  function nextSlide() {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  function prevSlide() {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
}

export {initSlider};
