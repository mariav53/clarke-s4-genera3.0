import React from 'react';
import ButtonArrow from './../../images/arrow.png';

class CvSection extends React.Component{
	constructor(props) {
		super(props);
		this.toggleContentClick = this.toggleContentClick.bind(this);
		this.state = {
			visible: false
		}
	}
	toggleContentClick() {
		this.setState({
			visible: !this.state.visible
		});
	}
	render() {
		return (
			<fieldset className="form__section">
				<legend className="legend">{this.props.label}</legend>
				<div className="form-section-header">
					<h3 className="h3-form">{this.props.label}</h3>
					<div className="form-section-button">
							<img src={ButtonArrow} id='button--open' className="button--open" alt="desplegar" onClick={ this.toggleContentClick} />
						</div>
				</div>
				<div className={ this.state.visible? 'section__content--visible' : 'section__content--invisible' }>
				{this.props.children}
				</div>
				<hr className="line" />
			</fieldset>
		);
	}
}

export default CvSection;
