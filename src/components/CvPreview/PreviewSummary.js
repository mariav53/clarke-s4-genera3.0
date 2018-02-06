import React from 'react';

class PreviewSummary extends React.Component {
	render() {
		return (
			<div className="container__preview--summary">
				<div className="preview-title">
					<h3 className="summary__title">Extracto</h3>
				</div>
				<div className="container__summary preview-text">
					<div className="preview__summary" id="preview__summary">{this.props.summary}
					</div>
					<div className="container__preview--rrsss">
						<div><span id="preview__rrss--twitter">{this.props.twitter}</span>
						</div>
						<div><span id="preview__rrss--linkedin">{this.props.linkedin}</span>
						</div>
						<div><span id="preview__rrss--github">{this.props.github}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
PreviewSummary.defaultProps = {
	summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
	twitter: '@usuario',
	linkedin: 'linkedin.es/usuario',
	github: 'github.com/usuario'
}

export default PreviewSummary;
