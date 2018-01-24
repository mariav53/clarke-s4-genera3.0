'use strict';

// GENERAR NUEVOS ELEMENTOS A PETICIÓN (skills)___________________________
var idSkillsModifier = 2;
function addItemSkills() {
	var repeatedItemSkills = '<div class="skills-element"><label class="label" for="skill-element' + idSkillsModifier + '"></label><input class="skills-element class-input" id="skill-element' + idSkillsModifier +'" type="text" name="skill-element" placeholder="Destreza ' + idSkillsModifier + '"><button type="button" name="button" class="button--save save-skills-button" id="save-skills-button' + idSkillsModifier + '" data-id="' + idSkillsModifier + '">Guardar</button></div>';

	var skillsElement = document.querySelector('.skills-element');

	skillsElement.insertAdjacentHTML('beforeend', repeatedItemSkills);

	document.getElementById('save-skills-button' + idSkillsModifier).addEventListener('click',printSkillsToPreview);

	idSkillsModifier++;
}

var newSkillsButton = document.querySelector('.new-skills-button');
newSkillsButton.addEventListener('click',addItemSkills);

//PINTARLO EN HTML (skills)
function printSkillsToPreview(event) {
var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('skill-element' + dataIdValue + '-preview-id').innerHTML = document.getElementById('skill-element' + dataIdValue).value;
}

document.querySelector('.save-skills-button').addEventListener('click',printSkillsToPreview);
