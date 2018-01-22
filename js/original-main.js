'use strict';

///AQUI ESTAN LAS FUNCIONES COMUNES PARA DESPLEGAR Y CERRAR Y SELECTS DE AÑOS Y MESES//////


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
