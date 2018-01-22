'use strict';

var idEducationModifier = 2;
function addItemEducation() {
	var repeatedItemEducation = '<div class="education-element" id="education-element' + idEducationModifier + '"><label class="label" for="titulo"></label><input class="class-input" id="titulo' + idEducationModifier + '" type="text" name="titulation" placeholder="Título*" required><section class="education-dates"><div class="date-container-from"><label class="label">Desde</label><select id="start_month-education' + idEducationModifier + '" name="start_month" class="month"></select><select id="start_year-education' + idEducationModifier + '" name="start_year" class="year"></select></div><div class="date-container-until"><label class="label" >Hasta</label><select id="end_month-education' + idEducationModifier + '" name="end_month" class="month"></select><select id="end_year-education' + idEducationModifier + '" name="end_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad-education' + idEducationModifier + '" type="checkbox" name="actualidad"></div></div></section><label class="label" for="centro"></label><input class="class-input" id="centro' + idEducationModifier + '" type="text" name="place" placeholder="Centro de estudios*" required><label class="label" for="description-education"></label><textarea class="description" id="description-education' + idEducationModifier + '" cols="30" rows="10" name="description" placeholder="Descripción"></textarea><button type="button" name="button" class="button--save save-education-button" id="save-education-button' + idEducationModifier + '" data-id="' + idEducationModifier + '">Guardar</button></div>'

	document.querySelector('.education-element').insertAdjacentHTML('beforeend', repeatedItemEducation);

	document.getElementById('save-education-button' + idEducationModifier).addEventListener('click',printEducationToPreview);

	idEducationModifier++;
	añosInput ();
	selectMonths();
}

var newEducationButton = document.querySelector('.new-education-button');
newEducationButton.addEventListener('click',addItemEducation);
