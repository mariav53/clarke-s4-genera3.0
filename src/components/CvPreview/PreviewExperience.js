import React from 'react';

class PreviewExperience extends React.Component {
	render() {
		return (
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
									<span id="until-job-preview-id1">{this.props.actualidad} Ago/2017</span>
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
		);
	}
}
PreviewExperience.defaultProps = {
	job: "Social Media",
	company: "Swing Swing",
	descriptionJob: "Responsable del departamento digital de la agencia gestionando dos grandes cuentas de bebidas alcohólicas y un centro comercial.",
}

export default PreviewExperience;
