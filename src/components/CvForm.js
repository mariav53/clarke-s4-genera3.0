import React from 'react';
import ButtonArrow from './../images/arrow.png';
import CvSection from './CvSection';
import PersonalData from './PersonalData';

class CvForm extends React.Component {
	render() {
		return (
			<section className="creation__form" id="form">
				<form className="form__container" action="index.html" method="post">
					<CvSection label="Datos personales">
						<PersonalData />
					</CvSection>


					<fieldset className="form__experience">
						<legend className="legend">Experiencia</legend>
						<div className="form-section-header">
							<h3 className="h3-form">Experiencia Profesional</h3>

							<div className="form-section-buttons">
								<img src={ButtonArrow} id='button--open' className="button--open" data-idDesplegar="container-inputs__experience" alt="abrir" />
							</div>
						</div>

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
						<hr className="line" />
					</fieldset>

					<fieldset className="form__education">
						<legend className="legend">Formación</legend>
						<div className="form-section-header">
							<h3 className="h3-form">Formación</h3>
							<div className="form-section-buttons">
								<img src={ButtonArrow} id='button--open' className="button--open" data-idDesplegar="container-inputs__education" alt="abrir" />
							</div>
						</div>
						<div id="container-inputs__education">
							<div className="education-element" id="education-element">
								<label className="label" for="titulo"></label>
								<input className="class-input" id="titulo1" type="text" name="titulation" placeholder="Título*" required />
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
								<input className="class-input" id="centro1" type="text" name="place" placeholder="Centro de estudios*" required />
								<label className="label" for="description-education1"></label>
								<textarea className="description" id="description-education1" cols="30" rows="10" name="description" placeholder="Descripción"></textarea>
								<button type="button" name="button" className="button--save save-education-button" id="save-education-button1" data-id="1">Guardar</button>
							</div>
							<button type="button" name="button" className="button--new new-education-button" data-id="1">Añadir formación</button>
						</div>
						<hr className="line" />
					</fieldset>

					<fieldset className="form__skills">
						<legend className="legend">Habilidades</legend>
						<div className="form-section-header">
							<h3 className="h3-form">Habilidades</h3>
							<div className="form-section-buttons">
								<img src={ButtonArrow} id='button--open' className="button--open" data-idDesplegar="container-inputs__skills" alt="abrir"/>
							</div>
						</div>
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
						<hr className="line" />
					</fieldset>
				</form>
			</section>
		);
	}
}

export default CvForm;
