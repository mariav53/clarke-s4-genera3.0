'use strict';

var experienceContainerPreview = document.querySelector('.container__preview--experience');
var btnSaveFirstExperience = document.querySelector('.save-first-experience-button');
var btnSaveNewExperience = document.querySelector('.save-experience-button');

//Para sobreescribir la experiencia de muestra, añadiendo datos nuevos
function printFirstExperience(){
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
	document.getElementById('place-preview-id' + dataIdValue).innerHTML = document.getElementById('company' + dataIdValue).value;
	document.getElementById('description-job-preview-id' + dataIdValue).innerHTML = document.getElementById('description-job' + dataIdValue).value;

	//reset fields
	document.getElementById("job1").value = '';
	document.getElementById("start_month-job1").value = 'Enero';
	document.getElementById("start_year-job1").value = '2000';
	document.getElementById("end_month-job1").value = 'Enero';
	document.getElementById("end_year-job1").value = '2000';
	document.getElementById("company1").value = '';
	document.getElementById("description-job1").value = '';
	btnSaveFirstExperience.classList.add('hide');
	btnSaveNewExperience.classList.remove('hide');
}
btnSaveFirstExperience.addEventListener('click',printFirstExperience);

//Para añadir las siguientes experiencias
function printProfessionalExperienceToPreview(){
	var job = document.getElementById('job1').value;
	var startJob = document.getElementById('start_month-job1').value + ' ' + document.getElementById('start_year-job1').value;
	var endJob = document.getElementById('end_month-job1').value + ' ' + document.getElementById('end_year-job1').value;
	var company = document.getElementById('company1').value;
	var descriptionJob = document.getElementById('description-job1').value;

	var experiencePreview = '<div class="preview__experience preview-text"><div class="container__experience--main-data"><div>' + job + '</div><div>' + startJob + '</div><div>';
	if (document.getElementById('actualidad-job1').checked) {
		experiencePreview = experiencePreview + 'Actualmente</div><div>' + company + '</div></div><div class="container__experience--description"><div>' + descriptionJob + '	</div></div></div>';
	} else {
		experiencePreview = experiencePreview + endJob + '</div><div>' + company + '</div></div><div class="container__experience--description"><div>' + descriptionJob + '	</div></div></div>';
	}
	experienceContainerPreview.insertAdjacentHTML('beforeend', experiencePreview);

	//reset fields
	document.getElementById("job1").value = '';
	document.getElementById("start_month-job1").value = 'Enero';
	document.getElementById("start_year-job1").value = '2000';
	document.getElementById("end_month-job1").value = 'Enero';
	document.getElementById("end_year-job1").value = '2000';
	document.getElementById("company1").value = '';
	document.getElementById("description-job1").value = '';
}
btnSaveNewExperience.addEventListener('click',printProfessionalExperienceToPreview);

//Para borrar las experiencias
function deleteExperience(){
	var contentExperience = document.querySelectorAll('.preview__experience');
	for (var i = 0; i < contentExperience.length; i++) {
		contentExperience[i].innerHTML = '';
	}
}
var deleteExperienceButton = document.querySelector('.new-experience-button');
deleteExperienceButton.addEventListener('click',deleteExperience);





/*
// GENERAR NUEVOS ELEMENTOS A PETICIÓN (experience)_______________________
var idExperienceModifier = 2;
function addItemExperience() {
var repeatedItemExperience = '<div class="experience-element" id="experience-element' + idExperienceModifier + '"><input class="class-input" id="job' + idExperienceModifier + '" type="text" name="puesto" placeholder="Puesto' + idExperienceModifier + '"><section class="experience-dates"><div class="date-container-from"><label class="label">Desde</label><select id="start_month-job' + idExperienceModifier + '" name="start_month" class="month"></select><select id="start_year-job' + idExperienceModifier + '" name="start_year" class="year"></select></div><div class="date-container-until"><label class="label" >Hasta</label><select id="end_month-job' + idExperienceModifier + '" name="end_month" class="month"></select><select id="end_year-job' + idExperienceModifier + '" name="end_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad-job' + idExperienceModifier + '" type="checkbox" name="actualidad"></div></div></section><input class="class-input" id="company'+ idExperienceModifier + '" type="text" name="company" placeholder="Empresa"><textarea class="experience-text" id="description-job' + idExperienceModifier + '" name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea><button type="button" name="button" class="button--save save-experience-button" id="save-experience-button-' + idExperienceModifier + '" data-id="' + idExperienceModifier + '">Guardar</button></div>';

document.querySelector('.experience-element').insertAdjacentHTML('beforeend', repeatedItemExperience);

document.getElementById('save-experience-button-' + idExperienceModifier).addEventListener('click',printProfessionalExperienceToPreview);

idExperienceModifier++;
añosInput ();
selectMonths();
}

var newExperienceButton = document.querySelector('.new-experience-button');
newExperienceButton.addEventListener('click',addItemExperience);
*/

//PARA PASAR LOS DATOS DEL FORMULARIO A LA PREVIEW
/*
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
document.getElementById('place-preview-id' + dataIdValue).innerHTML = document.getElementById('company' + dataIdValue).value;
document.getElementById('description-job-preview-id' + dataIdValue).innerHTML = document.getElementById('description-job' + dataIdValue).value;
}
document.querySelector('.save-experience-button').addEventListener('click',printProfessionalExperienceToPreview);

*/
