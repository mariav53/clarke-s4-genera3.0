import React from 'react';
import IconLanguage from './../../images/speak.png'
import IconIt from './../../images/computer-monitor-and-mouse.png';
import IconSkills from './../../images/settings.png';

class CvPreview extends React.Component {
	render() {
		return (
			<div>
				<div className="container__preview--experience preview-div">
					<div className="preview-title">
						<h3 className="experience__title">Experiencia profesional</h3>
					</div>
					<div className="preview__experience preview-text">
						<div className="container__experience--main-data">
							<div className="jobAndDate">
								<div>
									<span id="job-preview-id-1">{this.props.job}</span>
								</div>
								<div className="joinDate">
									<div>
										<span id="from-job-preview-id1" className="from-date-preview">Nov/2016</span>
									</div>
									<div>
										<span id="until-job-preview-id1">Ago/2017</span>
									</div>
								</div>
							</div>
							<div>
								<span id="place-preview-id1">{this.props.company}</span>
							</div>
						</div>
						<div className="container__experience--description">
							<div><span id="description-job-preview-id1">{this.props.descriptionJob}</span>
							</div>
						</div>
					</div>
					<div className="preview__experience preview-text">
						<div className="container__experience--main-data">
							<div className="jobAndDate">
								<div>
									<span id="job-preview-id-2" className="from-date-preview"></span>
								</div>
								<div className="joinDate">
									<div>
										<span id="from-job-preview-id2"></span>
									</div>
									<div>
										<span id="until-job-preview-id2"></span>
									</div>
								</div>
							</div>
							<div>
								<span id="place-preview-id2"></span>
							</div>
						</div>
						<div className="container__experience--description">
							<div>
								<span id="description-job-preview-id2"></span>
							</div>
						</div>
					</div>
				</div>

				<div className="container__preview--formation preview-div">
					<div className="preview-title">
						<h3 className="formation__title">Formación</h3>
					</div>
					<div className="preview__formation preview-text">
						<div className="container__formation--main-data">
							<div className="jobAndDate">
								<div>
									<span id="titulo-preview-id1">{this.props.titulation}</span>
								</div>
								<div className="joinDate">
									<div>
										<span id="from-education-preview-id1" className="from-date-preview">Oct/2017</span>
									</div>
									<div>
										<span id="until-education-preview-id1">Actual</span>
									</div>
								</div>
							</div>
							<div>
								<span id="centro-id1">{this.props.center}</span>
							</div>
						</div>
						<div className="container__formation--description">
							<div><span id="description-education-preview-id1">{this.props.descriptionEduc}</span></div>
						</div>
					</div>
					<div className="preview__formation preview-text">
						<div className="container__formation--main-data">
							<div className="jobAndDate">
								<div>
									<span id="titulo-preview-id2"></span>
								</div>
								<div className="joinDate">
									<div>
										<span id="from-education-preview-id2" className="from-date-preview"></span>
									</div>
									<div>
										<span id="until-education-preview-id2"></span>
									</div>
								</div>
							</div>
							<div>
								<span id="centro-id2"></span>
							</div>
							<div className="container__formation--description">
								<div>
									<span id="description-education-preview-id2"></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container__preview--skills">
					<div className="preview__skills preview-text">
						<div className="preview__skills--languages">
							<img src={IconLanguage} alt="talk-icon" className="talk-icon" />
							<div className="content__skills">
								<div className="skills__language--select">
									<span id="language-name1-preview-id">{this.props.lang1 ? `${this.props.lang1} |`: ''} </span>
									<span id="language-level1-preview-id"> {this.props.levelLanguage1}
									</span>
								</div>
								<div className="skills__language--select"><span id="language-name2-preview-id"></span><span id="language-level2-preview-id"></span>
								</div>
							</div>
						</div>
						<div className="preview__skills--it">
							<img src={IconIt} alt="it-icon" className="it-icon" />
							<div className="content__skills">
								<div className="skills__it--select">
									<span id="it-name1-preview-id">{this.props.tech1 ? `${this.props.tech1} |`: ''}
									</span>
									<span id="it-level1-preview-id"> {this.props.levelTech1}
									</span>
								</div>
								<div className="skills__it--select"><span id="it-name2-preview-id"></span><span id="it-level2-preview-id"></span>
								</div>
							</div>
						</div>
						<div className="preview__skills--bonus">
							<img src={IconSkills} alt="bonus-icon" className="bonus-icon" />
							<div className="content__skills">
								<div className="skills__bonus--select"><span id="skill-element1-preview-id">{this.props.skill1}</span>
								</div>
								<div className="skills__bonus--select"><span id="skill-element2-preview-id"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CvPreview.defaultProps = {
	job: "Social Media",
	company: "Swing Swing",
	descriptionJob: "Responsable del departamento digital de la agencia gestionando dos grandes cuentas de bebidas alcohólicas y un centro comercial.",
	titulation: "Programadora Front-end",
	center: "Adalab",
	descriptionEduc: "Estudios de programacion front-end en la Fundación Adalab. HTML, CSS, Javascript.",

}

export default CvPreview;
