import React from 'react';
import PreviewPersonalData from './../CvPreview/Preview-PersonalData'

class PersonalData extends React.Component {

	render() {
		return (
			<div id="container-inputs__personal-data">
				<input className="class-input" id="input-name" type="text" name="name" placeholder="Nombre*" required  onChange={this.props.onChangeFunction}  />
				<input className="class-input" id="input-surname" type="text" name="surname" placeholder="Apellidos*" required onChange={this.props.onChangeFunction}  />
				<input className="class-input" id="input-profession" type="text" name="profession" placeholder="Profesión*" required onChange={this.props.onChangeFunction}   />
				<input className="class-input" id="input-phone" type="tel" name="telephone" placeholder="Teléfono*" required onChange={this.props.onChangeFunction}   />
				<div className="container-birthdate">
					<label className="label label-birthdate" for="input-birthdate">Fecha de Nacimiento</label>
					<input className="class-input input-birthdate" id="input-birthdate" type="date" name="date" placeholder="Fecha de nacimiento" value='' onChange={this.props.onChangeFunction}  />
				</div>
				<input className="class-input" id="input-email" type="email" name="email" placeholder="Email*" required onChange={this.props.onChangeFunction}  />
				<label className="label" for="input-address"></label>
				<input className="class-input" id="input-address" type="text" name="address" placeholder="Dirección"  onChange={this.props.onChangeFunction}  />
				<div className="inputs-container-rrss">
					<textarea className="textarea-aboutme" maxlength="650px" name="summary" id="text-aboutme" rows="5" cols="50" placeholder="Extracto" onChange={this.props.onChangeFunction}></textarea>
					<p>RRSS</p>
					<input className="class-input" id="input-twitter" type="text" name="twitter" placeholder="@Twitter" onChange={this.props.onChangeFunction} />
					<input className="class-input" id="input-linkedin" type="text" name="linkedin" placeholder="linkedin.com/xxxxx" onChange={this.props.onChangeFunction} />
					<input className="class-input" id="input-github" type="text" name="github" placeholder="github.com/xxxxx" onChange={this.props.onChangeFunction}  />
				</div>
				<button type="button" name="button" className="button--save save-data-button">Guardar</button>
			</div>
		);
	}
}

export default PersonalData;
