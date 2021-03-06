import React from 'react';
import IconDesign from './../../images/designer.svg';
import IconWrite from './../../images/writing.svg';
import IconDownload from './../../images/download.svg';


class Intro extends React.Component {
	render() {
		return (
			<section className="block__info">
				<div className="block__info-steps">
					<div className="step">
						<img className="img-step" src={IconDesign} alt="Elige tu diseño" />
						<span className="span-step">Elige tu diseño</span>
					</div>
					<div className="step">
						<img className="img-step" src={IconWrite} alt="Introduce tus datos" />
						<span className="span-step">Introduce tus datos</span>
					</div>
					<div className="step">
						<img className="img-step" src={IconDownload} alt="Obtén tu CV personalizado" />
						<span className="span-step">Obtén tu CV</span>
					</div>
				</div>
				<div className="block__info-instructions">
					<div className="container__instructions">
						<p className="container__instructions-paragraph">Generatrix CV es un generador de currículums vitae con diseños muy estudiados para conseguir trabajo o cambiar el que ya tienes por uno mejor. ¡Es muy sencillo! Elige los colores, el tipo de letra y un fondo, añade una foto si lo deseas y rellena los datos para hacer un CV de 10. Después podrás guardarlo e imprimirlo. ¡Comienza a diseñarlo!</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Intro;
