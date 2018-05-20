//Открытие-закрытие меню
var Toggle = document.querySelector(".main-nav__toggle");
var Menu = document.querySelector(".main-nav");
var DemoWrapper = document.querySelector(".live-demo__image-wrapper");
var BeforeCat = document.querySelector(".live-demo__slider-image--before");
var AfterCat = document.querySelector(".live-demo__slider-image--after");
var BeforeButton = document.querySelector(".live-toggle__button--before");
var AfterButton = document.querySelector(".live-toggle__button--after");

Toggle.addEventListener("click", function (evt) {
  Menu.classList.toggle("main-nav--opened");
});

//Переключение котиков
if (DemoWrapper) {
  DemoWrapper.classList.remove("cat-mask")
  BeforeButton.addEventListener("click", function (evt) {
    if (AfterCat.classList.contains("live-demo__slider-image--is-active")) {
      AfterCat.classList.remove("live-demo__slider-image--is-active");
    }
    BeforeCat.classList.add("live-demo__slider-image--is-active");
  });
  AfterButton.addEventListener("click", function (evt) {
    if (BeforeCat.classList.contains("live-demo__slider-image--is-active")) {
      BeforeCat.classList.remove("live-demo__slider-image--is-active");
    }
    AfterCat.classList.add("live-demo__slider-image--is-active");
  });
};
