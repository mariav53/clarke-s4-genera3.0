import React from 'react';
import SelectMonth from './SelectMonth';
import SelectYears from './SelectYears';

class Education extends React.Component {

	
	render() {
		return (
      <div id="container-inputs__education">
        <div className="education-element" id="education-element">
          <input className="class-input" id="titulo1" type="text" name="titulation" placeholder="Título*" required onChange ={this.props.onChangeFunction} />
          <div className="education-dates">
            <div className="date-container-from">
              <label className="label from">Desde</label>
							<SelectMonth />
							<SelectYears />
            </div>
            <div className="date-container-until">
              <label className="label until">Hasta</label>
							<SelectMonth />
							<SelectYears />
              <div className="actualidad">
                <label for="actualidad" className="present-button-p">Actual</label>
                <input className="present-button" id="actualidad-education1" type="checkbox" name="actualidad" />
              </div>
            </div>
          </div>
          <label className="label" for="centro"></label>
          <input className="class-input" id="centro1" type="text" name="center" placeholder="Centro de estudios*" required onChange ={this.props.onChangeFunction} />
          <label className="label" for="description-education1"></label>
          <textarea className="description" id="description-education1" cols="30" rows="10" name="descriptionEduc" placeholder="Descripción" onChange ={this.props.onChangeFunction}></textarea>
          <button type="button" name="button" className="button--save save-education-button" id="save-education-button1" data-id="1">Guardar</button>
        </div>
        <button type="button" name="button" className="button--new new-education-button" data-id="1">Añadir formación</button>
      </div>
    );
  }
}
export default Education;
