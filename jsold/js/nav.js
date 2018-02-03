'use strict';

const navButton = document.querySelector('.nav__button')
const navList = document.querySelector('.nav__list')
const items = document.querySelectorAll('.nav__link');

const openNav = () => {
	navList.classList.toggle('hidden');
}


const closeNav = () => {
	navList.classList.add('hidden');
}

for (const itemsNAv of items) {
	itemsNAv.addEventListener('click', closeNav);
}
navButton.addEventListener('click', openNav);

window.addEventListener('mouseup',(event)=>{
  if (event.target != navList){
	 closeNav();
		}
});
