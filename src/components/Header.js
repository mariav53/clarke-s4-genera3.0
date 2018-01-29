import React from 'react';

class Header extends React.Component{
	render() {
		return (
			<header>
				<div className="container__header">
					<div className="container__nav-button">
						<button type="button" name="button" className="nav__button" id="nav__button"></button>
					</div>
					<nav className="header__nav">
						<div className="container__nav">
							<ul className="nav__list hidden">
								<li className="nav__list__item"><a href="index.html#design" className="nav__link">Diseño</a></li>
								<li className="nav__list__item"><a href="index.html#form" className="nav__link">Completa tu CV</a></li>
								<li className="nav__list__item"><a href="index.html#previo" className="nav__link">Previsualización</a></li>
							</ul>
						</div>
					</nav>
					<a href="index.html"><div className="header__logo"></div></a>
				</div>
			</header>
		);
	}
}

export default Header;
