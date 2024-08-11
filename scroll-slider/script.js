const scrollSlider = new Swiper(".swiper-scroll-slider", {
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});
