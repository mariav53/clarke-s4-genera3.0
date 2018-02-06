import React from 'react';

class PreviewExperience extends React.Component {


	render() {
		return (
			<div className="container__preview--experience preview-div">
				<div className="preview-title">
					<h3 className="experience__title">Experiencia profesional</h3>
				</div>
				<div className="preview__experience preview-text">
					{
						this.props.listJobs.map((myExperience,i) =>
							<div key={i} className="container__experience--main-data">
								<div className="jobAndDate">
									<div>
										<span id="job-preview-id-1">{myExperience.job}</span>
									</div>
									<div className="joinDate">
										<div>
											<span id="from-job-preview-id1" className="from-date-preview">
												{myExperience.ExperiencieStartMonth}
												{myExperience.ExperiencieStartYear ? ` ${myExperience.ExperiencieStartYear} / `: ''}
											</span>
										</div>
										<div>
											<span id="until-job-preview-id1">{myExperience.ExperiencieEndMonth} {myExperience.ExperiencieEndYear}</span>
										</div>
									</div>
								</div>
								<div>
									<span id="place-preview-id1">{myExperience.company}</span>
								</div>

								<div className="container__experience--description">
									<div><span id="description-job-preview-id1">{myExperience.descriptionJob}</span>
									</div>
								</div>
							</div>
						)}
				</div>
			</div>
		);
	}
}


export default PreviewExperience;
