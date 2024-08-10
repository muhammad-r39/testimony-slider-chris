const imageLinks = [
  "https://images.clickfunnels.com/73/c0bb80849141168ada4210be3ebf11/IMG_1960.jpg",
  "https://images.clickfunnels.com/07/f775419e294293a2da80e6058631d2/IMG_6598.jpg",
  "https://images.clickfunnels.com/81/3459ce1a4641ff82b55f9283f539df/IMG_6583.jpg",
  "https://images.clickfunnels.com/ee/2ce11f35fc4ab8898c56d177b3d445/IMG_6595.jpg",
  "https://images.clickfunnels.com/23/3ad895e4e24c4faaa0303b37bdaa8d/IMG_6586.jpg",
];

const swiperWrapper = document.querySelector(".swiper-wrapper");
imageLinks.forEach((link) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `<img src="${link}" alt="Slide image" style="width: 100%;">`;
  swiperWrapper.appendChild(slide);
});

const swiper = new Swiper(".testimonials", {
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
