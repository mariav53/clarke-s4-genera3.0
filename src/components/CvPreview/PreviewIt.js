import React from 'react';
import IconIt from './../../images/computer-monitor-and-mouse.png';

class PreviewIt extends React.Component {
	render() {
		return (
			<div className="div-It">
				<img src={IconIt} alt="it-icon" className="it-icon" />
				{
					this.props.listIt.map((myIt,i) =>
						<div className="preview__skills--it">

							<div key={i} className="content__skills">
								<div className="skills__it--select">
									<span id="it-name1-preview-id">{myIt.tech1 ? `${myIt.tech1} |`: ''}
									</span>
									<span id="it-level1-preview-id"> {myIt.levelTech1}
									</span>
								</div>
							</div>
						</div>
					)}
			</div>
		);
	}
}
export default PreviewIt;
