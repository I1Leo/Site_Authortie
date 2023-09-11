'use strict'

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


let navBtn = document.getElementsByClassName('user-navigation__btn')[0];

document.documentElement.clientWidth < 481 ? navBtn.textContent = "+ заявка" : navBtn.textContent = "Создать заявку";



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
   console.log([...communityItem].slice(3))
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


