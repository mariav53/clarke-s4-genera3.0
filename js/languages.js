'use strict';

// GENERAR NUEVO FORMULARIO DE IDIOMAS
let idLanguageModifier = 2;
const  addItemLanguage =()=> {
	// let repeatedItemLanguage = '`<div class="language-element"><label class="label" for="language-name' + idLanguageModifier + '"></label>' + '<input class="language-name class-input" id="language-name' + idLanguageModifier + '" type="text" name="language-name" placeholder="Idioma ' + idLanguageModifier +'">' + '<select id="language-level' + idLanguageModifier  +'" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option><option>Nativo</option></select><button type="button" name="button" class="button--save save-languages-button" id="save-languages-button' + idLanguageModifier +'" data-id="' + idLanguageModifier + '">Guardar</button></div>';

	let repeatedItemLanguage = `<div class="language-element"><label class="label" for="language-name${idLanguageModifier}"></label><input class="language-name class-input" id="language-name${idLanguageModifier}" type="text" name="language-name" placeholder="Idioma ${idLanguageModifier}"><select id="language-level${idLanguageModifier}" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option><option>Nativo</option></select><button type="button" name="button" class="button--save save-languages-button" id="save-languages-button${idLanguageModifier}" data-id="${idLanguageModifier}">Guardar</button></div>`;


	const languageElement = document.querySelector('.language-element');
	languageElement.insertAdjacentHTML('beforeend', repeatedItemLanguage);
	document.getElementById(`save-languages-button${idLanguageModifier}`).addEventListener('click',printLanguagesToPreview);
	idLanguageModifier++;
}

const newLanguageButton = document.querySelector('.new-language-button');
newLanguageButton.addEventListener('click',addItemLanguage);

//PINTAR IDIOMA EN PREVIEW


const printLanguagesToPreview =(event)=> {
	const dataIdValue = event.currentTarget.getAttribute('data-id');
	document.getElementById(`language-name${dataIdValue}-preview-id`).innerHTML = `${document.getElementById(`language-name${dataIdValue}`).value}  |  ${document.getElementById(`language-level${dataIdValue}`).value}`;
	//
	// document.getElementById('language-level' + dataIdValue + '-preview-id').innerHTML = document.getElementById('language-level' + dataIdValue).value;
}
document.querySelector('.save-languages-button').addEventListener('click',printLanguagesToPreview);
