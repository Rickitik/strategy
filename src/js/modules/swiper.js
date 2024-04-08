import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
const swiper = new Swiper('#swiper1', {
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

var swiper2 = new Swiper("#mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });

var swiper3 = new Swiper("#mySwiper2", {
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    thumbs: {
        swiper: swiper2,
      },

  });

var swiper4 = new Swiper("#mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    breakpoints: {

        580: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        800: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
    },
  });

  const swiper5 = new Swiper('#swiper5', {
    slidesPerView: 1,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
});