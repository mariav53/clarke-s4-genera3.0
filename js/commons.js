'use strict';

///AQUI ESTAN LAS FUNCIONES COMUNES PARA DESPLEGAR Y CERRAR Y SELECTS DE AÑOS Y MESES//////
//función para desplegar sección

const openButtons = document.querySelectorAll('.button--open');
const displayForm =(event)=>{
	// llamo al evento
	// currentTarget coge el elemento (en este caso un boton) que dispara el evento. Le ponemos data-plus porque queremos que busque la id del elemento que tiene que mostrar
const plusId = event.currentTarget.getAttribute('data-idDesplegar');
	// data-plus: identificador del elemento, que queremos que se replique en el resto de elementos
	// hacemos una variable para crear el selector, event.currentTarget es el elemento que dispara el evento (hacer click)
const formContainer = document.getElementById(plusId);
	if (formContainer.style.display == 'block'){
		formContainer.style.display = 'none';
	} else {
		formContainer.style.display = 'block';
	}
}

for (const allButtons of openButtons){
	allButtons.addEventListener('click', displayForm);
}

//función para meses
const selectMonths =() => {
	let options = '';
	const monthsSelect = document.querySelectorAll('.month');
  const monthsArray = [
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

  for ( const allMonths of monthsArray){
    options += `<option>${allMonths}</option>`;
}
	for (const listMonth of monthsSelect) {
		listMonth.innerHTML = options;
	};
}
selectMonths();

//función para años
const yearsInput = () =>{
const years = 2018;
let selectYear = '';

for (let i = 1950; i<years; i++) {
selectYear = selectYear + '<option>' + (i)+ '</option>';
}

const yearsAll = document.querySelectorAll('.year');
	for (const listYears of yearsAll) {
		listYears.innerHTML = selectYear;
	};
}
yearsInput();
