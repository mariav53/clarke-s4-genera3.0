'use strict';

///AQUI ESTAN LAS FUNCIONES COMUNES PARA DESPLEGAR Y CERRAR Y SELECTS DE AÑOS Y MESES//////


//función para desplegar sección
// desplegables sin onclick
const botones = document.querySelectorAll('.button--open');
const desplegable =(event)=>{
	// llamo al evento
	// currentTarget coge el elemento (en este caso un boton) que dispara el evento. Le ponemos data-plus porque queremos que busque la id del elemento que tiene que mostrar
	const plusId = event.currentTarget.getAttribute('data-idDesplegar');
	// data-plus: identificador del elemento, que queremos que se replique en el resto de elementos
	// hacemos una variable para crear el selector, event.currentTarget es el elemento que dispara el evento (hacer click)
	const cuadro = document.getElementById(plusId);
	if (cuadro.style.display == 'block'){
		cuadro.style.display = 'none';
	} else {
		cuadro.style.display = 'block';
	}
}
for (const allButtons of botones){
	allButtons.addEventListener('click', desplegable);
}

//función para meses
const selectMonths =() => {
	let options = '';
	const months = document.querySelectorAll('.month');
  const meses = [
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

  for ( const allMonths of meses){
    options += `<option>${allMonths}</option>`;
}
const monthsAll = document.querySelectorAll('.month');
for (const listMonth of monthsAll) {
	listMonth.innerHTML = options;
};
}
selectMonths();


//función para años
const anosInput = () =>{
const years = 2018;
let selectYear = '';

for (i = 1950; i<years; i++) {
selectYear = selectYear + '<option>' + (i)+ '</option>';
}
const yearsAll = document.querySelectorAll('.year');
for (const listYears of yearsAll) {
	listYears.innerHTML = selectYear;
};
}
anosInput ();

const inputFile = document.querySelector('#files');
const trigger = document.querySelector('.trigger');

// hacemos clic en trigger y llamamos a la funcion
trigger.addEventListener('click', simularClic);

// función para que simule un clic en input

const simularClic=()=>{
	inputFile.click();
}
