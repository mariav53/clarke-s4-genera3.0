import React from 'react';

class NavItem extends React.Component{

	render() {
		return (
			<div className="container__nav">
				<li className="nav__list__item">
					<a href={this.props.url} className="nav__link">{this.props.name}</a>
				</li>
			</div>
		);
	}
}

export default NavItem;
