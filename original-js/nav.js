'use strict';

var navButton = document.querySelector('.nav__button')
var navList = document.querySelector('.nav__list')
var items = document.querySelectorAll('.nav__link');

function openNav() {
	navList.classList.toggle('hidden');
}
function closeNav() {
	navList.classList.add('hidden');
}

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click', closeNav);
}

navButton.addEventListener('click', openNav);
