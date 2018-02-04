import React from 'react';
import NavItems from './NavItems';

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.handleClickMenu = this.handleClickMenu.bind(this);
		this.state={
			visible:false
		}
	}
	handleClickMenu(event){
		event.preventDefault();
		this.setState({
			visible:!this.state.visible
		})
	}

	render() {
		return (
		<div>
			<div className="container__nav-button">
				<button type="button" name="button" className="nav__button" id="nav__button" onClick ={this.handleClickMenu}></button>
			</div>
			<nav className="header__nav">
				<div className="container__nav">
					<ul className={`nav__list ${this.state.visible ? 'visible' : 'no-visible'}`}>
						<NavItems name= "Diseño" url="index.html#design" />
						<NavItems name= "Crea tu CV" url="index.html#form" />
						<NavItems name= "Previsualización" url="index.html#previo" />
					</ul>
				</div>
			</nav>
		</div>
		);
	}
}

export default Nav;
