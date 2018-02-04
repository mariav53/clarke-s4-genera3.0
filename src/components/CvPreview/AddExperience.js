import React from 'react';

class AddExperience extends React.Component {
	render() {
		return (
			<div className="container__preview--experience preview-div">
				
					<div className="preview__experience preview-text">
						<div className="container__experience--main-data">
							<div className="jobAndDate">
								<div>
									<span id="job-preview-id-2" className="from-date-preview">{this.props.job}</span>
								</div>
								<div className="joinDate">
									<div>
										<span id="from-job-preview-id2">{this.props.ExperiencieStartMonth}
										{this.props.ExperiencieStartYear ? ` ${this.props.ExperiencieStartYear} / `: ''}</span>
									</div>
									<div>
										<span id="until-job-preview-id2">{this.props.ExperiencieEndMonth} {this.props.ExperiencieEndYear}</span>
									</div>
								</div>
							</div>
							<div>
								<span id="place-preview-id2">{this.props.company}</span>
							</div>
						</div>
						<div className="container__experience--description">
							<div>
								<span id="description-job-preview-id2">{this.props.descriptionJob}</span>
							</div>
						</div>
					</div>
				</div>




		);
	}
}


export default AddExperience;
