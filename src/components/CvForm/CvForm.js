import React from 'react';
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
						<PersonalData onChangeFunction={this.handleChange}/>
					</CvSection>
					<CvSection label="Experiencia Profesional">
						<Experience  onChangeFunction={this.handleChange}
							updateJobsPreview ={this.props.updateJobsPreview}/>

					</CvSection>
					<CvSection label="Formación">
						<Education  onChangeFunction={this.handleChange}
							updateEducationPreview ={this.props.updateEducationPreview}/>
					</CvSection>
					<CvSection label="Habilidades">
						<Skills onChangeFunction={this.handleChange} />
					</CvSection>
				</form>
			</section>
		);
	}
}

export default CvForm;
