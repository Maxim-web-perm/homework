export const productSlider = () => {
  new Swiper(".product__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousehweel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".product__slider-buttom--prev",
      nextEl: ".product__slider-buttom--next",
    },
  });
};
