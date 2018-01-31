import React from 'react';
import Nav from './Hero';
import CoverMobile from './../images/cover_mobile2.png';
import CoverDesktop from './../images/desktop.png';

class Hero extends React.Component{
	render() {
		return (
			<div>
				<div className="hero">
					<img className="hero__img-mobile" src={CoverMobile} alt="Imagen de portada movil" />
					<img className="hero__img-desktop" src={CoverDesktop} alt="Imagen de portada escritorio" />
				</div>
				<h1 className="title-hero">Diseña tu CV sin perder tiempo</h1>
				</div>

		);
	}
}

export default Hero;
