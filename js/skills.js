'use strict';

// GENERAR NUEVO FORMULARIO DE SKILLS
let idSkillsModifier = 2;
const addItemSkills =()=> {
	let repeatedItemSkills = '<div class="skills-element"><label class="label" for="skill-element' + idSkillsModifier + '"></label><input class="skills-element class-input" id="skill-element' + idSkillsModifier +'" type="text" name="skill-element" placeholder="Destreza ' + idSkillsModifier + '"><button type="button" name="button" class="button--save save-skills-button" id="save-skills-button' + idSkillsModifier + '" data-id="' + idSkillsModifier + '">Guardar</button></div>';

	const skillsElement = document.querySelector('.skills-element');
	skillsElement.insertAdjacentHTML('beforeend', repeatedItemSkills);
	document.getElementById('save-skills-button' + idSkillsModifier).addEventListener('click',printSkillsToPreview);
	idSkillsModifier++;
}

const newSkillsButton = document.querySelector('.new-skills-button');
newSkillsButton.addEventListener('click',addItemSkills);

//PINTAR SKILL EN PREVIEW
const printSkillsToPreview =(event)=> {
	const dataIdValue = event.currentTarget.getAttribute('data-id');
	document.getElementById('skill-element' + dataIdValue + '-preview-id').innerHTML = document.getElementById('skill-element' + dataIdValue).value;
}

document.querySelector('.save-skills-button').addEventListener('click',printSkillsToPreview);
