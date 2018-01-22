'use strict';


//función para desplegar sección


// desplegables sin onclick
var botones = document.querySelectorAll('.button--open');
function desplegable(event){
	// llamo al evento
	// currentTarget coge el elemento (en este caso un boton) que dispara el evento. Le ponemos data-plus porque queremos que busque la id del elemento que tiene que mostrar
	var plusId = event.currentTarget.getAttribute('data-idDesplegar');
	// data-plus: identificador del elemento, que queremos que se replique en el resto de elementos
	// hacemos una variable para crear el selector, event.currentTarget es el elemento que dispara el evento (hacer click)
	var cuadro = document.getElementById(plusId);
	if (cuadro.style.display == 'block'){
		cuadro.style.display = 'none';
	} else {
		cuadro.style.display = 'block';
	}
}
for (i=0; i<botones.length; i++){
	botones[i].addEventListener('click', desplegable);
}


//función para meses
function selectMonths() {
	var options = '';
	var months = document.querySelectorAll('.month');
  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  for (var i = 0; i < meses.length; i++){
    options += '<option>' + meses[i]+ '</option>';
}
var monthsAll = document.querySelectorAll('.month');
for (var i = 0; i < monthsAll.length; i++) {
	monthsAll[i].innerHTML = options;
};
}
selectMonths();


//función para años

function añosInput () {
var years = 2018;
var selectYear = '';

for (var i=1950; i<years; i++) {
  selectYear = selectYear + '<option>' + (i) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length; i++) {
	yearsAll[i].innerHTML = selectYear;
};
}
añosInput ();

var inputFile = document.querySelector('#files');
var trigger = document.querySelector('.trigger');

// hacemos clic en trigger y llamamos a la funcion
trigger.addEventListener('click', simularClic);

// función para que simule un clic en input

function simularClic(){
	inputFile.click();
}




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
	document.getElementById('place-preview-id' + dataIdValue).innerHTML = document.getElementById('company' + dataIdValue).value;
	document.getElementById('description-job-preview-id' + dataIdValue).innerHTML = document.getElementById('description-job' + dataIdValue).value;
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



// GENERAR NUEVOS ELEMENTOS A PETICIÓN (experience)_______________________
var idExperienceModifier = 2;
function addItemExperience() {
	var repeatedItemExperience = '<div class="experience-element" id="experience-element' + idExperienceModifier + '"><input class="class-input" id="job' + idExperienceModifier + '" type="text" name="puesto" placeholder="Puesto' + idExperienceModifier + '"><section class="experience-dates"><div class="date-container-from"><label class="label">Desde</label><select id="start_month-job' + idExperienceModifier + '" name="start_month" class="month"></select><select id="start_year-job' + idExperienceModifier + '" name="start_year" class="year"></select></div><div class="date-container-until"><label class="label" >Hasta</label><select id="end_month-job' + idExperienceModifier + '" name="end_month" class="month"></select><select id="end_year-job' + idExperienceModifier + '" name="end_year" class="year"></select><div class="actualidad"><label for="actualidad" class="present-button-p">Actualidad</label><input class="present-button" id="actualidad-job' + idExperienceModifier + '" type="checkbox" name="actualidad"></div></div></section><input class="class-input" id="company'+ idExperienceModifier + '" type="text" name="company" placeholder="Empresa"><textarea class="experience-text" id=description-job' + idExperienceModifier + ' name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea><button type="button" name="button" class="button--save save-experience-button" id="save-experience-button-' + idExperienceModifier + '" data-id="' + idExperienceModifier + '">Guardar</button></div>';

	document.querySelector('.experience-element').insertAdjacentHTML('beforeend', repeatedItemExperience);

	document.getElementById('save-experience-button-' + idExperienceModifier).addEventListener('click',printProfessionalExperienceToPreview);

	idExperienceModifier++;
	añosInput ();
	selectMonths();
}

var newExperienceButton = document.querySelector('.new-experience-button');
newExperienceButton.addEventListener('click',addItemExperience);


// GENERAR NUEVOS ELEMENTOS A PETICIÓN (Education)_______________________
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




// // GENERAR NUEVOS ELEMENTOS A PETICIÓN (idiomas)
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
