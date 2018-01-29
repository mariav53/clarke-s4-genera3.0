import React from 'react';
import IconLanguage from './../images/speak.png'
import IconIt from './../images/computer-monitor-and-mouse.png';
import IconSkills from './../images/settings.png';

class CvPreview extends React.Component {
	render() {
		return (
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
		);
	}
}

export default CvPreview;
