import React from 'react';
import IconSkills from './../../images/settings.png';

class PreviewVariouSkills extends React.Component {
	render() {
		return (
			<div className="div-VariouSkills">
				<img src={IconSkills} alt="bonus-icon" className="bonus-icon" />
				{
					this.props.listVariouSkills.map((myVariouSkills,i) =>
						<div className="preview__skills--bonus">
							<div key={i} className="content__skills">
								<div className="skills__bonus--select"><span id="skill-element1-preview-id">{myVariouSkills.skill1}</span>
								</div>
								
							</div>
						</div>
					)}
			</div>
		);
	}
}
export default PreviewVariouSkills;
