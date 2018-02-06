import React from 'react';
import IconLanguage from './../../images/speak.png'
import IconIt from './../../images/computer-monitor-and-mouse.png';
import IconSkills from './../../images/settings.png';

class PreviewSkills extends React.Component {
	render() {
		return (
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
		);
	}
}

export default PreviewSkills;
