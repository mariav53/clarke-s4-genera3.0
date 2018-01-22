'use strict';

// CHOOSE STYLES FOR CV-PREVIEW


// MENU OPEN-CLOSE STYLES

/* Con nextElementSibling al hacer 'click' sobre imagen (.img-design) se selecciona el elemento hermano(ul: design-fonts, design-colours o design-themes)*/
var preview = document.querySelector('.showpreview');
var selectImg= document.querySelectorAll('.img-design');
var listAllUl =  document.querySelectorAll('.creation__design__options li ul');


function openCloseStyles() {

  var nextUl = this.nextElementSibling;

  if (nextUl.classList.contains('hidden')) {
    for (var i = 0; i < listAllUl.length; i++) {
      listAllUl[i].classList.add('hidden');
    }
    nextUl.classList.remove('hidden');
  } else {
    nextUl.classList.add('hidden');
  }
}

for (var i = 0; i < selectImg.length; i++) {
  selectImg[i].addEventListener('click', openCloseStyles);
}


// APPLY FONTS

var fonts = document.querySelectorAll('.font');

function cleanFontClasses() {
  preview.classList.remove('cookie', 'annie', 'philosopher');
}

function applyFont(event) {
	var fontClass = event.currentTarget.getAttribute('data-font-class');
  cleanFontClasses();
  preview.classList.add(fontClass);
}

for (var i = 0; i < fonts.length; i++) {
  fonts[i].addEventListener('click', applyFont);
}


// APLLY COLOURS

var colours = document.querySelectorAll('.colour');

function cleanColourClasses() {
  preview.classList.remove('red-green-lime', 'black-blue-lime', 'black-pink-grey');
}

function applyColour(event){
  var colourClass = event.currentTarget.getAttribute('data-colour-class');
  cleanColourClasses();
  preview.classList.add(colourClass);
}

for (var i = 0; i < colours.length; i++) {
  colours[i].addEventListener('click', applyColour);
}

// APPLY THEMES

var themes = document.querySelectorAll('.theme');

function cleanThemeClasses() {
  preview.classList.remove('dots', 'stripes', 'zigZag');
}

function applyTheme(event){
  var themeClass = event.currentTarget.getAttribute('data-theme-class');
  cleanThemeClasses();
  preview.classList.add(themeClass);
}

for (var i = 0; i < themes.length; i++) {
  themes[i].addEventListener('click', applyTheme);
}
