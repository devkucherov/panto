import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 42,
  loop: true,
  freeMode: true,

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
});

