import React from 'react';
import IconLanguage from './../../images/speak.png'

class PreviewLanguages extends React.Component {
	render() {
		return (
			<div className="div-Languages">
				<img src={IconLanguage} alt="talk-icon" className="talk-icon" />
				{
					this.props.listLanguages.map((myLanguages,i) =>
						<div  className="preview__skills--languages">

							<div key={i} className="content__skills">
								<div className="skills__language--select">
									<span id="language-name1-preview-id">{myLanguages.lang1 ? `${myLanguages.lang1} | `: ' '} </span>
									<span id="language-level1-preview-id"> {myLanguages.levelLanguage1}
									</span>
								</div>
							</div>
						</div>
					)}
			</div>
		);
	}
}
export default PreviewLanguages;
