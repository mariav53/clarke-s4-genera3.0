'use strict';

// GENERAR NUEVO FORMULARIO DE IT
let idItModifier = 2;
const addItemIt =()=> {
	let repeatedItemIt = `<div class="it-element"><label class="label" for="it-name${idItModifier}"></label><input class="it-name class-input" id="it-name${idItModifier}" type="text" name="it-name" placeholder="Tecnología  ${idItModifier}"><select id="it-level${idItModifier}" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option></select><button type="button" name="button" class="button--save save-it-button" id="save-it-button${idItModifier}" data-id="${idItModifier}">Guardar</button></div>`;

	const itElement = document.querySelector('.it-element');
	itElement.insertAdjacentHTML('beforeend', repeatedItemIt);
	document.getElementById('save-it-button' + idItModifier).addEventListener('click',printItToPreview);
	idItModifier++;
}

const newItButton = document.querySelector('.new-it-button');
newItButton.addEventListener('click',addItemIt);

//PINTAR IT EN PREVIEW
const printItToPreview =(event)=> {
	const dataIdValue = event.currentTarget.getAttribute('data-id');
	document.getElementById('it-name' + dataIdValue + '-preview-id').innerHTML = document.getElementById('it-name' + dataIdValue).value + '  |  '+document.getElementById('it-level' + dataIdValue).value;
	// document.getElementById('it-level' + dataIdValue + '-preview-id').innerHTML = document.getElementById('it-level' + dataIdValue).value;
}
document.querySelector('.save-it-button').addEventListener('click',printItToPreview);
