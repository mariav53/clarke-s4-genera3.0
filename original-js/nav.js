'use strict';

var navButton = document.querySelector('.nav__button')
var navList = document.querySelector('.nav__list')
var items = document.querySelectorAll('.nav__link');
	for (var i = 0; i < items.length; i++) {
		items[i].addEventListener('click', closeNav)
	}

function openNav() {
	navList.classList.toggle('hidden');
}
function closeNav() {
	navList.classList.add('hidden');
}

navButton.addEventListener('click', openNav);
