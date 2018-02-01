import React from 'react';
import Nav from './Nav';

class Header extends React.Component{
	render() {
		return (
			<header>
				<div className="container__header">
					<Nav />
					<a href="index.html"><div className="header__logo"></div></a>
				</div>
			</header>
		);
	}
}

export default Header;
