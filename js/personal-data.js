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
