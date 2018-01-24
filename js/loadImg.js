'use strict';

const photoFile =(evt)=> {
	const files = evt.target.files; // FileList object

	//Obtenemos la imagen del campo "file".
	for (let i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
		if (!f.type.match('image.*')) {
			continue;
		}
		const reader = new FileReader();
		reader.onload = ((theFile)=> {
			return (e)=> {
				// Creamos la imagen.
				trigger.style = "background-image:url(" + e.target.result + ");";
				document.querySelector(".container__photo").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
			};
		})(f);
		reader.readAsDataURL(f);
	}
}

const inputFile = document.querySelector('#files');
const trigger = document.querySelector('.trigger');

// función para que simule un clic en input
const simularClic=()=>{
	inputFile.click();
}
// hacemos clic en trigger y llamamos a la funcion
trigger.addEventListener('click', simularClic);
inputFile.addEventListener('change', photoFile);
