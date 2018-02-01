import React from 'react';
import IconLanguage from './../../images/speak.png'
import IconIt from './../../images/computer-monitor-and-mouse.png';
import IconSkills from './../../images/settings.png';
import moment from 'moment/min/moment-with-locales';


class PreviewPersonalData extends React.Component {

	formattedDate(fecha) {
		return (fecha !==undefined ) ? moment(fecha).locale('es').format("DD MMM  YYYY") : '';
	}
	render() {
		return (
			<section className="section__preview" id="preview">
				<h2 className="preview__title"> Previsualización </h2>
				<div className="showpreview dots philosopher black-pink-grey">
					<div className="container__preview--intro preview-div">
						<div className="container__preview--photo">
							<div className="container__photo">
							</div>
						</div>
						<div className="container__preview--personal-data">
							<div className="container__personal-data">
								<div className="preview-text">
									<div className="preview__personal-data--name"><span id="personal-data--name">{this.props.name}</span>
									</div>
									<div className="preview__personal-data--surname"><span id="personal-data--surname">{this.props.surname}</span>
									</div>
									<div className="preview__personal-data--job"><span id="personal-data--job">{this.props.profession}</span>
									</div>
								</div>
							</div>
							<div className="container__direction">
								<div className="preview-text">
									<div className="preview__direction--phone"><span id="preview__direction--phone">{this.props.telephone}</span>
									</div>

									<div className="preview__direction--date"><span id="preview__direction--date">{this.formattedDate(this.props.date)} </span>
									</div>
									<div className="preview__direction--mail"><span id="preview__direction--mail">{this.props.email}</span></div>
									<div className="preview__direction--adress"><span id="preview__direction--adress">{this.props.address}</span></div>
								</div>
							</div>
						</div>
					</div>

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
				</div>
				</section>
		);
	}
}

export default PreviewPersonalData ;
