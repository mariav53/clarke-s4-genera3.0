import React from 'react';
import SelectMonth from './SelectMonth';
import SelectYears from './SelectYears';

class Experience extends React.Component {

	render() {
		return (
			<div id="container-inputs__experience">
				<div className="experience-element" id="experience-element">
					<input className="class-input" id="job1" type="text" name="job" placeholder="Puesto" onChange ={this.props.onChangeFunction} />
					<div className="experience-dates">
						<div className="date-container-from">
							<label className="label from">Desde</label>
							<SelectMonth onChangeSelect ={this.props.onChangeFunction} name='ExperiencieStartMonth' />
							<SelectYears onChangeSelect ={this.props.onChangeFunction} name='ExperiencieStartYear' />
						</div>
						<div className="date-container-until">
							<label className="label until">Hasta</label>
							<SelectMonth  onChangeSelect ={this.props.onChangeFunction} name='ExperiencieEndMonth'/>
							<SelectYears onChangeSelect ={this.props.onChangeFunction} name='ExperiencieEndYear' />
						</div>
					</div>
					<input className="class-input" id="company1" type="text" name="company" placeholder="Lugar" onChange ={this.props.onChangeFunction} />
					<textarea className="experience-text" id="description-job1" name="descriptionJob" rows="8" cols="80" placeholder="Despripción del puesto" onChange ={this.props.onChangeFunction}></textarea>
					<button type="button" name="button" className="button--save save-experience-button" data-id="1">Guardar</button>
				</div>
				<button type="button" name="button" className="button--new new-experience-button">Añadir experiencia</button>
			</div>
		);
	}
}

export default Experience;
