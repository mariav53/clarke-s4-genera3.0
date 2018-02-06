import React from 'react';
import LogoSmall from './../../images/logocorto.png'

class Footer extends React.Component {
	render() {
		return (
			<footer className="section__footer">
				<div className="container__footer">
					<ul className="footer__list">
						<a href="index.html" className="footer__link"> <li className="footer__list--element">Genera3.0 &copy; 2018</li></a>
					</ul>
					<a href="index.html">
					<img className="footer__logo" src={LogoSmall} alt="logo-Generatrix" /></a>
				</div>
			</footer>
		);
	}
}

export default Footer;
