import React from 'react';

class Education extends React.Component {
	render() {
		return (
      <div id="container-inputs__education">
        <div className="education-element" id="education-element">
          <input className="class-input" id="titulo1" type="text" name="titulation" placeholder="Título*" required onChange ={this.props.onChangeFunction} />
          <div className="education-dates">
            <div className="date-container-from">
              <label className="label from">Desde</label>
              <select id="start_month-education1" name="start_month" className="month">
              </select>
              <select id="start_year-education1" name="start_year" className="year">
              </select>
            </div>
            <div className="date-container-until">
              <label className="label until">Hasta</label>
              <select id="end_month-education1" name="end_month" className="month">
              </select>
              <select id="end_year-education1" name="end_year" className="year">
              </select>
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
