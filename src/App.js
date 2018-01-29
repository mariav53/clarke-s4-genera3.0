import React, { Component } from 'react';
import CoverMobile from './images/cover_mobile2.png';
import CoverDesktop from './images/desktop.png';
import IconDesign from './images/designer.svg';
import IconWrite from './images/writing.svg';
import IconDownload from './images/download.svg';
import ButtonFont from './images/text.svg';
import ButtonPalette from './images/paint-palette.svg';
import ButtonTheme from './images/menu.svg';
import ButtonArrow from './images/arrow.png';
import IconLanguage from './images/speak.png'
import IconIt from './images/computer-monitor-and-mouse.png';
import IconSkills from './images/settings.png';
import LogoSmall from './images/logocorto.png'

import './scss/main.css';

class App extends Component {
  render() {
    return (
			<div>
				<header>
					<div className="container__header">
						<div className="container__nav-button">
							<button type="button" name="button" className="nav__button" id="nav__button"></button>
						</div>
						<nav className="header__nav">
							<div className="container__nav">
								<ul className="nav__list hidden">
									<li className="nav__list__item"><a href="index.html#design" className="nav__link">Diseño</a></li>
									<li className="nav__list__item"><a href="index.html#form" className="nav__link">Completa tu CV</a></li>
									<li className="nav__list__item"><a href="index.html#previo" className="nav__link">Previsualización</a></li>
								</ul>
							</div>
						</nav>
						<a href="index.html"><div className="header__logo"></div></a>
					</div>
				</header>
				<main>
					<div className="hero">
						<img className="hero__img-mobile" src={CoverMobile} alt="Imagen de portada movil" />
						<img className="hero__img-desktop" src={CoverDesktop} alt="Imagen de portada escritorio" />
					</div>
					<h1 className="title-hero">Diseña tu CV sin perder tiempo</h1>
					<section className="block__info">
						<div className="block__info-steps">
							<div className="step">
								<img className="img-step" src={IconDesign} alt="Elige tu diseño" />
								<span className="span-step">Elige tu diseño</span>
							</div>
							<div className="step">
								<img className="img-step" src={IconWrite} alt="Introduce tus datos" />
								<span className="span-step">Introduce tus datos</span>
							</div>
							<div className="step">
								<img className="img-step" src={IconDownload} alt="Obtén tu CV personalizado" />
								<span className="span-step">Obtén tu CV</span>
							</div>
						</div>
						<div className="block__info-instructions">
							<div className="container__instructions">
								<p className="container__instructions-paragraph">Generatrix CV es un generador de currículums vitae con diseños muy estudiados para conseguir trabajo o cambiar el que ya tienes por uno mejor. ¡Es muy sencillo! Elige los colores, el tipo de letra y un fondo, añade una foto si lo deseas y rellena los datos para hacer un CV de 10. Después podrás guardarlo e imprimirlo. ¡Comienza a diseñarlo!</p>
							</div>
						</div>
					</section>

					<section className="block__cv" id="design">
						<section className="section__creation">
							<h2 className="creation__title">Configura tu currículum</h2>
							<div className="container__creation">
								<section className="creation__design">
									<ul className="creation__design__options">
										<li className="creation__design__options-font">
											<img className="img-design" src={ButtonFont} title="fuente" alt="fuentes" />

											<ul className="design-fonts hidden">
												<li className="font" data-font-class="cookie"><h3>Cookie</h3></li>
												<li className="font" data-font-class="annie"><h3>Annie</h3></li>
												<li className="font" data-font-class="philosopher"><h3>Philosopher</h3></li>
											</ul>
										</li>
										<li className="creation__design__options-colour">
											<img className="img-design" src={ButtonPalette} title="color" alt="color" />

											<ul className="design-colours hidden">
												<li className="colour" data-colour-class="red-green-lime">
													<div className="red"></div>
													<div className="green"></div>
													<div className="lime"></div>
												</li>
												<li className="colour" data-colour-class="black-blue-lime">
													<div className="black"></div>
													<div className="blue"></div>
													<div className="lime"></div>
												</li>
												<li className="colour" data-colour-class="black-pink-grey">
													<div className="black"></div>
													<div className="pink"></div>
													<div className="grey"></div>
												</li>
											</ul>
										</li>
										<li className="creation__design__options-theme">
											<img className="img-design" src={ButtonTheme} title="estilo" alt="estilo" />

											<ul className="design-themes hidden">
												<li className="theme" data-theme-class="dots"><h3>Dots</h3></li>
												<li className="theme" data-theme-class="stripes"><h3>Stripes</h3></li>
												<li className="theme" data-theme-class="zigZag"><h3>Zig Zag</h3></li>
											</ul>
										</li>
									</ul>
								</section>

								<section className="creation__photo">
									<h3 className="label" for="files">Sube tu foto</h3>
									<input className="selection-image" type="file" id="files" name="files[]" />
									<div className="trigger"></div>
								</section>
								<section className="creation__form" id="form">
									<form className="form__container" action="index.html" method="post">

										<fieldset className="form__personal-data">
											<legend className="legend">Datos personales</legend>
											<div className="form-section-header">
												<h3 className="h3-form">Datos personales</h3>

												<div className="form-section-button">
													<img src={ButtonArrow} id='button--open' className="button--open" alt="abrir" data-idDesplegar="container-inputs__personal-data" />
												</div>
											</div>

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
											<hr className="line" />
										</fieldset>


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
							</div>
					</section>

					<section className="section__preview" id="preview">
						<h2 className="preview__title"> Previsualización </h2>

						<div className="showpreview dots philosopher black-pink-grey">
							<div className="container__preview--intro preview-div">
								<div className="container__preview--photo">
									<div className="container__photo">
									</div>
								</div>
								<div className="container__preview--personal-data">
									<div className="container__personal-data">
										<div className="preview-text">
											<div className="preview__personal-data--name"><span id="personal-data--name"></span>
											</div>
										<div className="preview__personal-data--surname"><span id="personal-data--surname"></span>
									</div>
										<div className="preview__personal-data--job"><span id="personal-data--job"></span>
											</div>
											</div>
										</div>
										<div className="container__direction">
											<div className="preview-text">
												<div className="preview__direction--phone"><span id="preview__direction--phone"></span>
												</div>
												<div className="preview__direction--date"><span id="preview__direction--date"></span>
												</div>
												<div className="preview__direction--mail"><span id="preview__direction--mail"></span></div>
												<div className="preview__direction--adress"><span id="preview__direction--adress"></span></div>
											</div>
										</div>
									</div>
								</div>


								<div className="container__preview--summary">
									<div className="preview-title">
										<h3 className="summary__title">Extracto</h3>
									</div>
									<div className="container__summary preview-text">
										<div className="preview__summary" id="preview__summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
										</div>
										<div className="container__preview--rrsss">
											<div><span id="preview__rrss--twitter">@moniaguado</span>
											</div>
											<div><span id="preview__rrss--linkedin">linkedin.es/monicaaguadoalonso</span>
											</div>
											<div><span id="preview__rrss--facebook">facebook.com/moni.monroe.7</span>
											</div>
										</div>
									</div>
								</div>


								<div className="container__preview--experience preview-div">
									<div className="preview-title">
										<h3 className="experience__title">Experiencia profesional</h3>
									</div>
									<div className="preview__experience preview-text">
										<div className="container__experience--main-data">
											<div className="jobAndDate">
												<div>
													<span id="job-preview-id-1">Social Media</span>
												</div>
												<div className="joinDate">
													<div>
														<span id="from-job-preview-id1" className="from-date-preview">Nov/2016</span>
													</div>
													<div>
														<span id="until-job-preview-id1">Ago/2017</span>
													</div>
												</div>
											</div>

											<div>
												<span id="place-preview-id1">Swing Swing</span>
											</div>
										</div>
										<div className="container__experience--description">
											<div><span id="description-job-preview-id1">Responsable del departamento digital de la agencia gestionando dos grandes cuentas de bebidas alcohólicas y un centro comercial.</span>
											</div>
										</div>
									</div>
									<div className="preview__experience preview-text">
										<div className="container__experience--main-data">
											<div className="jobAndDate">
												<div>
													<span id="job-preview-id-2" className="from-date-preview"></span>
												</div>
												<div className="joinDate">
													<div>
														<span id="from-job-preview-id2"></span>
													</div>
													<div>
														<span id="until-job-preview-id2"></span>
													</div>
												</div>
											</div>
											<div>
												<span id="place-preview-id2"></span>
											</div>
										</div>
										<div className="container__experience--description">
											<div>
												<span id="description-job-preview-id2"></span>
											</div>
										</div>
									</div>
								</div>

								<div className="container__preview--formation preview-div">
									<div className="preview-title">
										<h3 className="formation__title">Formación</h3>
									</div>
									<div className="preview__formation preview-text">
										<div className="container__formation--main-data">
											<div className="jobAndDate">
												<div>
													<span id="titulo-preview-id1">Front-end</span>
												</div>
												<div className="joinDate">
													<div>
														<span id="from-education-preview-id1" className="from-date-preview">Oct/2017</span>
													</div>
													<div>
														<span id="until-education-preview-id1">Actual</span>
													</div>
												</div>
											</div>
											<div>
												<span id="centro-id1">Adalab</span>
											</div>
										</div>
										<div className="container__formation--description">
											<div><span id="description-education-preview-id1">Estudios de programacion front-end en la Fundación Adalab. HTML, CSS, Javascript.</span></div>
										</div>
									</div>
									<div className="preview__formation preview-text">
										<div className="container__formation--main-data">
											<div className="jobAndDate">
												<div>
													<span id="titulo-preview-id2"></span>
												</div>
												<div className="joinDate">
													<div>
														<span id="from-education-preview-id2" className="from-date-preview"></span>
													</div>
													<div>
														<span id="until-education-preview-id2"></span>
													</div>
												</div>
											</div>
											<div>
												<span id="centro-id2"></span>
											</div>
											<div className="container__formation--description">
												<div>
													<span id="description-education-preview-id2"></span>
												</div>
											</div>
										</div>
									</div>
								</div>

									<div className="container__preview--skills">
										<div className="preview__skills preview-text">
											<div className="preview__skills--languages">
												<img src={IconLanguage} alt="talk-icon" className="talk-icon" />
												<div className="content__skills">
													<div className="skills__language--select"><span id="language-name1-preview-id"> </span><span id="language-level1-preview-id"></span>
													</div>
													<div className="skills__language--select"><span id="language-name2-preview-id"></span><span id="language-level2-preview-id"></span>
													</div>
												</div>
											</div>
											<div className="preview__skills--it">
												<img src={IconIt} alt="it-icon" className="it-icon" />
												<div className="content__skills">
													<div className="skills__it--select"><span id="it-name1-preview-id"></span><span id="it-level1-preview-id"></span>
													</div>
													<div className="skills__it--select"><span id="it-name2-preview-id"></span><span id="it-level2-preview-id"></span>
													</div>
												</div>
											</div>
											<div className="preview__skills--bonus">
												<img src={IconSkills} alt="bonus-icon" className="bonus-icon" />
												<div className="content__skills">
													<div className="skills__bonus--select"><span id="skill-element1-preview-id"></span>
													</div>
													<div className="skills__bonus--select"><span id="skill-element2-preview-id"></span>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>

							</section>

						</section>

					</main>
					<footer className="section__footer">
						<div className="container__footer">
							<ul className="footer__list">
							<a href="avisolegal.html" className="footer__link"><li className="footer__list--element">Aviso legal</li></a>
							<a href="" className="footer__link"><li className="footer__list--element">Contacto</li></a>
							<a href="index.html" className="footer__link"> <li className="footer__list--element">Generatrix &copy; 2017</li></a>
						</ul>
						<a href="index.html">
						<img className="footer__logo" src={LogoSmall} alt="logo-Generatrix" /></a>
					</div>
				</footer>
			</div>
    );
  }
}

export default App;
