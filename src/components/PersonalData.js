import React from 'react';

class PersonalData extends React.Component {
	render() {
		return (
			<div id="container-inputs__personal-data">
				<input className="class-input" id="input-name" type="text" name="name" placeholder="Nombre*" required />
				<input className="class-input" id="input-surname" type="text" name="surname" placeholder="Apellidos*" required />
				<input className="class-input" id="input-profession" type="text" name="profession" placeholder="Profesión*" required />
				<input className="class-input" id="input-phone" type="tel" name="telephone" placeholder="Teléfono*" required />
				<div className="container-birthdate">
					<label className="label label-birthdate" for="input-birthdate">Fecha de Nacimiento</label>
					<input className="class-input input-birthdate" id="input-birthdate" type="date" name="date" placeholder="Fecha de nacimiento" />
				</div>
				<input className="class-input" id="input-email" type="email" name="email" placeholder="Email*" required />
				<label className="label" for="input-address"></label>
				<input className="class-input" id="input-address" type="text" name="address" placeholder="Dirección" />
				<div className="inputs-container-rrss">
					<textarea className="textarea-aboutme" maxlength="650px" name="extracto" id="text-aboutme" rows="5" cols="50" placeholder="Extracto"></textarea>
					<p>RRSS</p>
					<input className="class-input" id="input-twitter" type="text" name="Twitter" placeholder="@Twitter" />
					<input className="class-input" id="input-linkedin" type="text" name="Linkedin" placeholder="linkedin.com/xxxxx" />
					<input className="class-input" id="input-facebook" type="text" name="Facebook" placeholder="facebook.com/xxxxx" />
				</div>
				<button type="button" name="button" className="button--save save-data-button">Guardar</button>
			</div>
		);
	}
}

export default PersonalData
