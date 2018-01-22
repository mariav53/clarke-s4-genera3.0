'use strict';

//Elegir estilos para curriculum

var preview = document.querySelector('.showpreview');
//Letra
var ulFonts = document.querySelector('.design-fonts');
var fonts = document.querySelectorAll('.font');

// function closeDesign() {
// 	ulFonts.classList.add('hidden');
// }

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
  // fonts[i].addEventListener('click', closeDesign);
}


//Colores
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

//temas

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
