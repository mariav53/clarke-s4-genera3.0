import React from 'react';

class Experience extends React.Component {
	render() {
		return (
			<div id="container-inputs__experience">
				<div className="experience-element" id="experience-element">
					<input className="class-input" id="job1" type="text" name="puesto" placeholder="Puesto" />
					<div className="experience-dates">
						<div className="date-container-from">
							<label className="label from">Desde</label>
							<select id="start_month-job1" name="start_month" className="month">
							</select>
							<select id="start_year-job1" name="start_year" className="year">
							</select>
						</div>
						<div className="date-container-until">
							<label className="label until">Hasta</label>
							<select id="end_month-job1" name="end_month" className="month">
							</select>
							<select id="end_year-job1" name="end_year" className="year">
							</select>
							<div className="actualidad">
								<label for="actualidad" className="present-button-p">Actual</label>
								<input className="present-button" id="actualidad-job1" type="checkbox" name="actualidad" />
							</div>
						</div>
					</div>
					<input className="class-input" id="company1" type="text" name="lugar" placeholder="Lugar" />
					<textarea className="experience-text" id="description-job1" name="description" rows="8" cols="80" placeholder="Despripción del puesto"></textarea>
					<button type="button" name="button" className="button--save save-experience-button" data-id="1">Guardar</button>
				</div>
				<button type="button" name="button" className="button--new new-experience-button">Añadir experiencia</button>
			</div>
		);
	}
}

export default Experience;
