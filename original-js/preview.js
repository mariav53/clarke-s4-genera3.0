'use strict';

// SECCIÓN GUARDAR DATOS FORMULARIO EN PREVIEW (4FUNCIONES)
function printPersonalDataToPreview() {
 	document.getElementById('personal-data--name').innerHTML = document.getElementById('input-name').value;
	document.getElementById('personal-data--surname').innerHTML = document.getElementById('input-surname').value;
	document.getElementById('personal-data--job').innerHTML = document.getElementById('input-profession').value;
	document.getElementById('preview__direction--phone').innerHTML = document.getElementById('input-phone').value;
	document.getElementById('preview__direction--date').innerHTML = document.getElementById('input-birthdate').value;
	document.getElementById('preview__direction--mail').innerHTML = document.getElementById('input-email').value;
	document.getElementById('preview__direction--adress').innerHTML = document.getElementById('input-address').value;
	document.getElementById('preview__summary').innerHTML = document.getElementById('text-aboutme').value;
	document.getElementById('preview__rrss--twitter').innerHTML = document.getElementById('input-twitter').value;
	document.getElementById('preview__rrss--linkedin').innerHTML = document.getElementById('input-linkedin').value;
	document.getElementById('preview__rrss--facebook').innerHTML = document.getElementById('input-facebook').value;
}
document.querySelector('.save-data-button').addEventListener('click',printPersonalDataToPreview);


function printProfessionalExperienceToPreview(event) {

var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('job-preview-id-' + dataIdValue).innerHTML = document.getElementById('job' + dataIdValue).value;
	document.getElementById('from-job-preview-id' + dataIdValue).innerHTML =
	document.getElementById('start_month-job' + dataIdValue).value + ' ' +
	document.getElementById('start_year-job' + dataIdValue).value;
	if (document.getElementById('actualidad-job' + dataIdValue).checked) {
		document.getElementById('until-job-preview-id' + dataIdValue).innerHTML = 'Actualmente';
	}
	else {
		document.getElementById('until-job-preview-id' + dataIdValue).innerHTML =
		document.getElementById('end_month-job' + dataIdValue).value + ' ' +
		document.getElementById('end_year-job' + dataIdValue).value;
	}
	document.getElementById('place-preview-id' + dataIdValue).innerHTML = document.getElementById('lugar' + dataIdValue).value;
	document.getElementById('description-preview-id' + dataIdValue).innerHTML = document.getElementById('description' + dataIdValue).value;
}
document.querySelector('.save-experience-button').addEventListener('click',printProfessionalExperienceToPreview);


function printEducationToPreview(event) {

var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('titulo-preview-id' + dataIdValue).innerHTML = document.getElementById('titulo' + dataIdValue).value;
	document.getElementById('from-education-preview-id' + dataIdValue).innerHTML =
	document.getElementById('start_month-education' + dataIdValue).value + ' ' +
	document.getElementById('start_year-education' + dataIdValue).value;
	if (document.getElementById('actualidad-education' + dataIdValue).checked) {
		document.getElementById('until-education-preview-id' + dataIdValue).innerHTML = 'Actualmente';
	}
	else {
		document.getElementById('until-education-preview-id' + dataIdValue).innerHTML =
		document.getElementById('end_month-education' + dataIdValue).value + ' ' +
		document.getElementById('end_year-education' + dataIdValue).value;
	}
	document.getElementById('centro-id' + dataIdValue).innerHTML = document.getElementById('centro' +dataIdValue).value;
	document.getElementById('description-education-preview-id' + dataIdValue).innerHTML = document.getElementById('description-education' + dataIdValue).value;
}
document.querySelector('.save-education-button').addEventListener('click',printEducationToPreview);



function printLanguagesToPreview(event) {
var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('language-name' + dataIdValue + '-preview-id').innerHTML = document.getElementById('language-name' + dataIdValue).value;

	document.getElementById('language-level' + dataIdValue + '-preview-id').innerHTML = document.getElementById('language-level' + dataIdValue).value;
}
document.querySelector('.save-languages-button').addEventListener('click',printLanguagesToPreview);


function printItToPreview(event) {
var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('it-name' + dataIdValue + '-preview-id').innerHTML = document.getElementById('it-name' + dataIdValue).value;

	document.getElementById('it-level' + dataIdValue + '-preview-id').innerHTML = document.getElementById('it-level' + dataIdValue).value;
}
document.querySelector('.save-it-button').addEventListener('click',printItToPreview);




function printSkillsToPreview(event) {
var dataIdValue = event.currentTarget.getAttribute('data-id');

	document.getElementById('skill-element' + dataIdValue + '-preview-id').innerHTML = document.getElementById('skill-element' + dataIdValue).value;
}

document.querySelector('.save-skills-button').addEventListener('click',printSkillsToPreview);
