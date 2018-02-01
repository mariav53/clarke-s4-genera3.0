import React from 'react';

class Skills extends React.Component {
	render() {
		return (
			<div id="container-inputs__skills">
				<div className="skills">
					<div className="languages">
						<p className="skills-p">Idiomas</p>
						<div className="language-element">
							<label className="label" for="language-name1"></label>
							<input className="language-name class-input" id="language-name1" type="text" name="language-name" placeholder="Idioma 1" />
							<select id="language-level1" name="level" className="level">
								<option value="nivel">Nivel</option>
								<option >--</option>
								<option>Básico</option>
								<option>Intermedio</option>
								<option>Alto</option>
								<option>Nativo</option>
							</select>
							<button type="button" name="button" className="button--save save-languages-button" id="save-languages-button1"  data-id="1">Guardar</button>
						</div>
						<button type="button" name="button" className="button--new new-language-button">Añadir idioma</button>
					</div>
				</div>
				<div className="it">
					<p className="skills-p">Programas informáticos</p>
					<div className="it-element">
						<label className="label" for="it-name1"></label>
						<input className="it-name class-input" id="it-name1" type="text" name="it-name" placeholder="Tecnología 1" />
						<select id="it-level1" name="level" className="level">
							<option value="nivel">Nivel</option>
							<option >--</option>
							<option>Básico</option>
							<option>Intermedio</option>
							<option>Alto</option>
						</select>
						<button type="button" name="button" className="button--save save-it-button" id="save-it-button1" data-id="1">Guardar</button>
					</div>
					<button type="button" name="button" className="button--new new-it-button">Añadir programa</button>
				</div>
				<div className="various-skills">
					<p className="skills-p">Destrezas</p>
					<div className="skills-element">
						<label className="label" for="skill-element1"></label>
						<input className="skills-element class-input" id="skill-element1" type="text" name="skill-element" placeholder="Destreza 1" />
						<button type="button" name="button" className="button--save save-skills-button" data-id="1">Guardar</button>
					</div>
				</div>
				<button type="button" name="button" className="button--new new-skills-button">Añadir habilidad</button>
			</div>

		);
	}
}

export default Skills;
