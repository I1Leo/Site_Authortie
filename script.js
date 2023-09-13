'use strict'

// ================== Popup

let navBtn = document.getElementsByClassName('user-navigation__item_btn')[0];
let logBtn = document.getElementsByClassName('user-navigation__login')[0];
let logBtnMob = document.getElementsByClassName('site-navigation__btn_login')[0];

let popup = document.getElementsByClassName('page__popup')[0];
let popupBtn = document.getElementsByClassName('close')[0];

navBtn.addEventListener('click', () => {
   popup.classList.add('popup_active');
});

logBtn.addEventListener('click', () => {
   popup.classList.add('popup_active');
});

logBtnMob.addEventListener('click', () => {
   popup.classList.add('popup_active');
});

popupBtn.addEventListener('click', () => {
   popup.classList.remove('popup_active');
   document.getElementsByClassName('header-form__headline_active')[0].classList.remove('header-form__headline_active');
   signinHeadline.classList.add('header-form__headline_active');
})

let signinBtn = document.getElementsByClassName('header-form__headline_signin')[0];
let signinBody = document.getElementsByClassName('signin')[0];

let signupBtn = document.getElementsByClassName('header-form__headline_signup')[0];
let signupBody = document.getElementsByClassName('signup')[0];

let signinHeadline = document.getElementsByClassName('header-form__headline_signin')[0];
let signupHeadline = document.getElementsByClassName('header-form__headline_signup')[0];


signinBtn.addEventListener('click', () => {
   signupBody.classList.remove('signup_active');
   signinBody.classList.add('signin_active');

   signupHeadline.classList.remove('header-form__headline_active');
   signinHeadline.classList.add('header-form__headline_active');
});

signupBtn.addEventListener('click', () => {
   signinBody.classList.remove('signin_active');
   signupBody.classList.add('signup_active');

   signinHeadline.classList.remove('header-form__headline_active');
   signupHeadline.classList.add('header-form__headline_active');
})



// ================== Header

let burgerBtn = document.getElementsByClassName('user-navigation__burger')[0];
let burgerIcon = document.getElementsByClassName("user-navigation__icon_burger")[0];

let insertNav = document.getElementsByClassName("header__nav_insert")[0];

let isClicked = false;

burgerBtn.addEventListener('click', () => {
   insertNav.classList.toggle('header__nav_active');

   if (!isClicked) {
      burgerIcon.setAttribute("src", "img/cross.svg");
      isClicked = true;
   } else {
      burgerIcon.setAttribute("src", "img/nav__burger.svg");
      isClicked = false;
   }
});

let navBtnText = document.getElementsByClassName('user-navigation__btn')[0];

document.documentElement.clientWidth < 481 ? navBtnText.textContent = "+ заявка" : navBtnText.textContent = "Создать заявку";



// ================== Community


let communityHeadline = document.getElementsByClassName('item-community__headline');


if (document.documentElement.clientWidth < 1086) {
   [...communityHeadline].map(item => item.textContent = "Вопросы проектирования трансатлантического межнационального продуктопрово...");
} else {
   [...communityHeadline].map(item => item.textContent = "Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии");
}


let communityList = document.getElementsByClassName('community__list')[0];
let communityItem = document.getElementsByClassName('item-community');
let communityTitle = document.getElementsByClassName('community__title')[0];

let seeAllBtn = document.getElementsByClassName('community__seeall-btn')[0];

seeAllBtn.addEventListener('click', () => {
   if (!isClicked) {
      [...communityItem].map(item => communityList.insertAdjacentHTML('beforeend', item.outerHTML));
      isClicked = true;
      seeAllBtn.textContent = "Скрыть"
   } else {
      [...communityItem].slice(-6).map(item => item.remove());
      communityTitle.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
      isClicked = false
      seeAllBtn.textContent = "Смотреть все"
   }

})


