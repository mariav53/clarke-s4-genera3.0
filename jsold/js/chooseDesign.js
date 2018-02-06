'use strict';

// CHOOSE STYLES FOR CV-PREVIEw


// MENU OPEN-CLOSE STYLES

/* Con nextElementSibling al hacer 'click' sobre imagen (.img-design) se selecciona el elemento hermano(ul: design-fonts, design-colours o design-themes)*/

const preview = document.querySelector('.showpreview');
const selectImg= document.querySelectorAll('.img-design');
const allListElement =  document.querySelectorAll('.creation__design__options li ul');


const openCloseStyles = (event) => {

  const nextUl = event.target.nextElementSibling;
  if (nextUl.classList.contains('hidden')) {
    for (const selectList of allListElement) {
      selectList.classList.add('hidden');
    }
    nextUl.classList.remove('hidden');
  } else {
    nextUl.classList.add('hidden');
  }
}

for (const clickImg of selectImg) {
  clickImg.addEventListener('click', openCloseStyles);
}



// APPLY FONTS

const fonts = document.querySelectorAll('.font');

const cleanFontClasses = () => {
  preview.classList.remove('cookie', 'annie', 'philosopher');
}

const applyFont = (event) => {
	const fontClass = event.currentTarget.getAttribute('data-font-class');
  cleanFontClasses();
  preview.classList.add(fontClass);
}

for (const fontList of fonts) {
  fontList.addEventListener('click', applyFont);
}


// APLLY COLOURS

const colours = document.querySelectorAll('.colour');

const cleanColourClasses = () => {
  preview.classList.remove('red-green-lime', 'black-blue-lime', 'black-pink-grey');
}

const applyColour = (event) => {
  const colourClass = event.currentTarget.getAttribute('data-colour-class');
  cleanColourClasses();
  preview.classList.add(colourClass);
}

for (const colourList of colours) {
  colourList.addEventListener('click', applyColour);
}

// APPLY THEMES

const themes = document.querySelectorAll('.theme');

const cleanThemeClasses = () => {
  preview.classList.remove('dots', 'stripes', 'zigZag');
}

const applyTheme = (event) => {
  const themeClass = event.currentTarget.getAttribute('data-theme-class');
  cleanThemeClasses();
  preview.classList.add(themeClass);
}

for (const themeList of themes) {
  themeList.addEventListener('click', applyTheme);
}
