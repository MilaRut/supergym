import Swiper, {Navigation} from 'swiper';

const initReviewsSwiper = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#reviews-swiper', {
      modules: [Navigation],
      navigation: {
        nextEl: '.reviews__btn.swiper-button-next',
        prevEl: '.reviews__btn.swiper-button-prev',
      },

      loop: false,

      initialSlide: 0,
    });
  }
};

export {initReviewsSwiper};
