$(document).ready(function () {
  $('.slider').slick({
    arrow: true,
    dots: false,
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true,
    asNavFor: '.slider-author',
  });
  $('.slider-author').slick({
    arrow: false,
    dots: false,
    slidesToShow: 1,
    infinite: false,
    fade: true,
    asNavFor: '.slider',
  });
});
