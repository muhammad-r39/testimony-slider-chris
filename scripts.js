/**
 * Scroll Slider
 */

const scrollSliderDesktop = new Swiper(".swiper-scroll-slider", {
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

/**
 * Testimonial Slider
 */

const imageLinks = [
  "https://images.clickfunnels.com/81/3459ce1a4641ff82b55f9283f539df/IMG_6583.jpg",
  "https://images.clickfunnels.com/23/3ad895e4e24c4faaa0303b37bdaa8d/IMG_6586.jpg",
  "https://images.clickfunnels.com/ee/2ce11f35fc4ab8898c56d177b3d445/IMG_6595.jpg",
  "https://images.clickfunnels.com/07/f775419e294293a2da80e6058631d2/IMG_6598.jpg",
  "https://images.clickfunnels.com/73/c0bb80849141168ada4210be3ebf11/IMG_1960.jpg",
];

const testimonialsWrapper = document.querySelector(
  ".testimonials .swiper-wrapper"
);
imageLinks.forEach((link) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `<img src="${link}" alt="Slide image" style="width: 100%;">`;
  testimonialsWrapper.appendChild(slide);
});

const testimonialSlide = new Swiper(".testimonials", {
  effect: "cards",
  grabCursor: true,
  speed: 500,
  loop: true,
  rotate: false,
  mousewheel: {
    invert: false,
  },
  navigation: {
    nextEl: ".swipe-next",
    prevEl: ".swipe-prev",
  },
});

// Video and Multi Slide

const videoSlide = new Swiper(".swiper-video-slider", {
  navigation: {
    nextEl: ".swipe-video-next",
    prevEl: ".swipe-video-prev",
  },
  pagination: {
    el: ".swiper-video-pagination",
    type: "bullets",
    clickable: true,
  },
  initialSlide: 2,
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const play =
  '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>';
const pause =
  '<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>';

let button = play;

const buttonMarkup = (button) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="70" height="70" fill="#fff" role="presentation">${button}</svg>`;
};

document
  .querySelectorAll(".swiper-video-slider .swiper-slide")
  .forEach((slide) => {
    slide.innerHTML += `<div class="video-controller" data-controller="play">${buttonMarkup(
      play
    )}</div>`;
  });

document.querySelectorAll(".video-controller").forEach((controller) => {
  const video = controller.previousElementSibling;
  controller.addEventListener("click", () => {
    if (controller.dataset.controller === "play") {
      controller.dataset.controller = "pause";
      controller.innerHTML = buttonMarkup(pause);
      video.play();
    } else {
      controller.dataset.controller = "play";
      controller.innerHTML = buttonMarkup(play);
      video.pause();
    }
  });
});

const programSlide = new Swiper(".swiper-program-slider", {
  navigation: {
    nextEl: ".swipe-program-next",
    prevEl: ".swipe-program-prev",
  },
  pagination: {
    el: ".swiper-program-pagination",
    type: "bullets",
    clickable: true,
  },
  speed: 500,
  initialSlide: 2,
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
