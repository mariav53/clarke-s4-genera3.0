'use strict';

const navButton = document.querySelector('.nav__button')
const navList = document.querySelector('.nav__list')
const items = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

const openNav = () => {
	navList.classList.toggle('hidden');
}

const closeNav = () => {
	navList.classList.add('hidden');
}

for (const itemsNav of items) {
	itemsNav.addEventListener('click', closeNav);
}
navButton.addEventListener('click', openNav);




// for (var i = 0; i < items.length; i++) {
// 	items[i].addEventListener('click', closeNav);
// }
