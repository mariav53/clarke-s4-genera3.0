import React from 'react';
import LogoSmall from './../images/logocorto.png'

class Footer extends React.Component {
	render() {
		return (
			<footer className="section__footer">
				<div className="container__footer">
					<ul className="footer__list">
						<a href="avisolegal.html" className="footer__link"><li className="footer__list--element">Aviso legal</li></a>
						<a href="" className="footer__link"><li className="footer__list--element">Contacto</li></a>
						<a href="index.html" className="footer__link"> <li className="footer__list--element">Generatrix &copy; 2017</li></a>
					</ul>
					<a href="index.html">
					<img className="footer__logo" src={LogoSmall} alt="logo-Generatrix" /></a>
				</div>
			</footer>
		);
	}
}

export default Footer;
