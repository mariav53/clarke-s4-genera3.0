'use strict';

var idLanguageModifier = 2;
function addItemLanguage() {
	var repeatedItemLanguage = '<div class="language-element"><label class="label" for="language-name' + idLanguageModifier + '"></label>';
	repeatedItemLanguage+= '<input class="language-name class-input" id="language-name' + idLanguageModifier + '" type="text" name="language-name" placeholder="Idioma ' + idLanguageModifier +'">';
	repeatedItemLanguage+= '<select id="language-level' + idLanguageModifier  +'" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option><option>Nativo</option></select><button type="button" name="button" class="button--save save-languages-button" id="save-languages-button' + idLanguageModifier +'" data-id="' + idLanguageModifier + '">Guardar</button></div>';

	var languageElement = document.querySelector('.language-element');
	languageElement.insertAdjacentHTML('beforeend', repeatedItemLanguage);

	document.getElementById('save-languages-button' + idLanguageModifier).addEventListener('click',printLanguagesToPreview);

	idLanguageModifier++;
}

var newLanguageButton = document.querySelector('.new-language-button');
newLanguageButton.addEventListener('click',addItemLanguage);



// // GENERAR NUEVOS ELEMENTOS A PETICIÓN (it)__________________________
var idItModifier = 2;
function addItemIt() {
	var repeatedItemIt = '<div class="it-element"><label class="label" for="it-name' + idItModifier + '"></label><input class="it-name class-input" id="it-name' + idItModifier + '" type="text" name="it-name" placeholder="Tecnología ' + idItModifier + '"><select id="it-level' + idItModifier + '" name="level" class="level"><option value="nivel">Nivel</option><option >--</option><option>Básico</option><option>Intermedio</option><option>Alto</option></select><button type="button" name="button" class="button--save save-it-button" id="save-it-button' + idItModifier + '" data-id="' + idItModifier + '">Guardar</button></div>';

	var itElement = document.querySelector('.it-element');

	itElement.insertAdjacentHTML('beforeend', repeatedItemIt);

	document.getElementById('save-it-button' + idItModifier).addEventListener('click',printItToPreview);

	idItModifier++;
}

var newItButton = document.querySelector('.new-it-button');
newItButton.addEventListener('click',addItemIt);


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
