import React from 'react';

class PreviewEducation extends React.Component{
	render() {
		return (
			<div className="container__preview--formation preview-div">
				<div className="preview-title">
					<h3 className="formation__title">Formación</h3>
				</div>
				<div className="preview__formation preview-text">
					{
						this.props.listEducation.map((myEducation,i) =>
							<div  key={i}  className="container__formation--main-data">
								<div className="jobAndDate">
									<div>
										<span id="titulo-preview-id1">{myEducation.titulation}</span>
									</div>
									<div className="joinDate">
										<div>
											<span id="from-education-preview-id1" className="from-date-preview">{myEducation.EducationStartMonth} {myEducation.EducationStartYear ? ` ${myEducation.EducationStartYear} / `: ''} </span>
										</div>
										<div>
											<span id="until-education-preview-id1">{myEducation.EducationEndMonth} {myEducation.EducationEndYear}</span>

										</div>
									</div>
								</div>
								<div>
									<span id="centro-id1">{myEducation.center}</span>
								</div>
								<div className="container__formation--description">
									<div><span id="description-education-preview-id1">{myEducation.descriptionEduc}</span></div>
								</div>
							</div>
						)}
				</div>

			</div>
		);
	}
}

export default PreviewEducation;
