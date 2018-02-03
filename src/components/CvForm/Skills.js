import React from 'react';


class Skills extends React.Component {
	render() {
		return (
			<div id="container-inputs__skills">
				<div className="skills">
					<div className="languages">
						<p className="skills-p">Idiomas</p>
						<div className="language-element">
							<label className="label" htmlFor="language-name1"></label>
							<input className="language-name class-input" id="language-name1" type="text" name="lang1" placeholder="Idioma 1" onChange ={this.props.onChangeFunction}/>
							<select id="language-level1" name="levelLanguage1" className="level" onChange ={this.props.onChangeFunction}>
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
						<label className="label" htmlFor="it-name1"></label>
						<input className="it-name class-input" id="it-name1" type="text" name="tech1" placeholder="Tecnología 1" onChange ={this.props.onChangeFunction}/>
						<select id="it-level1" name="levelTech1" className="level" onChange ={this.props.onChangeFunction}>
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
						<label className="label" htmlFor="skill-element1"></label>
						<input className="skills-element class-input" id="skill-element1" type="text" name="skill1" placeholder="Destreza 1" onChange ={this.props.onChangeFunction} />
						<button type="button" name="button" className="button--save save-skills-button" data-id="1">Guardar</button>
					</div>
				</div>
				<button type="button" name="button" className="button--new new-skills-button">Añadir habilidad</button>
			</div>

		);
	}
}

export default Skills;
