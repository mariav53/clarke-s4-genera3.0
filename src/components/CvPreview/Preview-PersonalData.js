import React from 'react';
import moment from 'moment/min/moment-with-locales';

class PreviewPersonalData extends React.Component {

	formattedDate(fecha) {
		return (fecha !==undefined ) ? moment(fecha).locale('es').format("DD MMM  YYYY") : '';
	}
	render() {
		return (
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
		);
	}
}

export default PreviewPersonalData ;
