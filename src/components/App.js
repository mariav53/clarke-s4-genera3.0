import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import CvForm from './CvForm';

import ButtonFont from './../images/text.svg';
import ButtonPalette from './../images/paint-palette.svg';
import ButtonTheme from './../images/menu.svg';
import ButtonArrow from './../images/arrow.png';
import IconLanguage from './../images/speak.png'
import IconIt from './../images/computer-monitor-and-mouse.png';
import IconSkills from './../images/settings.png';
import LogoSmall from './../images/logocorto.png'

import './../scss/main.css';

class App extends Component {
  render() {
    return (
			<div>
				<Header />
				<main>
					<Intro />
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
								<CvForm />
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
