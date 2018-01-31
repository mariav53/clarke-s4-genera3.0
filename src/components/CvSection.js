import React from 'react';
import ButtonArrow from './../images/arrow.png';

class CvSection extends React.Component{
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<div className="form-section-header">
				<h3 className="h3-form">{this.props.label}</h3>

				<div className="form-section-button">
					<img src={ButtonArrow} id='button--open' className="button--open" alt="abrir" data-idDesplegar="container-inputs__personal-data" />
				</div>
			</div>
		);
	}
}

export default CvSection;
