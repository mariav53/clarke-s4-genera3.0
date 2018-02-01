import React from 'react';
// import ButtonArrow from './../images/arrow.png';
import CvSection from './CvSection';
import PersonalData from './PersonalData';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

class CvForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.updatePreview(e.target.name, e.target.value);
	}

	render() {
		return (
			<section className="creation__form" id="form">
				<form className="form__container" action="index.html" method="post">
					<CvSection label="Datos personales">
						<PersonalData />
					</CvSection>
					<CvSection label="Experiencia Profesional">
						<Experience updatePreview ={this.props.updatePreview} onChangeFunction={this.handleChange} />
					</CvSection>
					<CvSection label="Formación">
						<Education updatePreview ={this.props.updatePreview} onChangeFunction={this.handleChange} />
					</CvSection>
					<CvSection label="Habilidades">
						<Skills  />
					</CvSection>
				</form>
			</section>
		);
	}
}

export default CvForm;
