import React from 'react';
import CvSection from './CvSection';
import PersonalData from './PersonalData';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import It from './It';
import VariouSkills from './VariouSkills';

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
						<div id="container-inputs__skills">
							<div className="skills">
								<Languages onChangeFunction={this.handleChange} updateLanguagesPreview ={this.props.updateLanguagesPreview} />
								{/* <Skills onChangeFunction={this.handleChange}  updateEducationPreview ={this.props.updateEducationPreview}/> */}
								<It onChangeFunction={this.handleChange} updateItPreview ={this.props.updateItPreview} />
								<VariouSkills onChangeFunction={this.handleChange} updateVariouSkillsPreview ={this.props.updateVariouSkillsPreview} />
							</div>
						</div>
					</CvSection>
				</form>
			</section>
		);
	}
}

export default CvForm;
