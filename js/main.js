let menuBtn = document.querySelector('.menu__icon');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.page-body__logo--link');
let main = document.querySelector('.page-body__main');

let modalMapNsk = document.querySelector('.modal-map__nsk');
let modalMapMsk = document.querySelector('.modal-map__msk');
let linkMapNsk = document.querySelector('.tab__map-nsk');
let linkMapMsk = document.querySelector('.tab__map-msk');

let modalMaps = document.querySelectorAll('.modal-map');
let buttons = document.querySelectorAll('.button');
let popup = document.querySelector('.page-body__form');
let closes = document.querySelectorAll('.btn-close');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('open');
  logo.classList.toggle('open');
  main.classList.toggle('fixed');
});

// При клике на пункт меню бургер скрывается
$('.menu li').on('click', function () {
  menuBtn.classList.remove('open');
  menu.classList.remove('open');
  logo.classList.remove('open');
  main.classList.remove('fixed');
});

// При клике на кнопку "Свзяаться с нами" появляется форма для заполнения
buttons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('modal-show');
  });
});

// Показывается карта при клике на "Показать на карте"
// Новосибирск
linkMapNsk.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMapNsk.classList.toggle('modal-show');
});
// Москва
linkMapMsk.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMapMsk.classList.toggle('modal-show');
});

// Модальное окно
closes.forEach(function (close) {
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    modalMaps.forEach(function (modalMap) {
      modalMap.classList.remove('modal-show');
    });
  });
});

// Хедер при скролле
$(window).scroll(function () {
  $('header').toggleClass('header-scroll', $(this).scrollTop() > 100);
});
