import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import CreationDesign from './CvForm/CreationDesign';
import ChooseImage from './CvForm/ChooseImage';
import CvForm from './CvForm/CvForm';
import PreviewPersonalData from './CvPreview/Preview-PersonalData';
import PreviewSummary from './CvPreview/PreviewSummary';
import PreviewExperience from './CvPreview/PreviewExperience';
import PreviewEducation from './CvPreview/PreviewEducation';
import PreviewSkills from './CvPreview/PreviewSkills';
import Footer from './Footer/Footer';
import Hero from './Intro/Hero';

import './../scss/main.css';

class App extends Component {
	constructor(props){
		super(props);
		this.updateState = this.updateState.bind(this);
		this.state = {}
	}

	updateState(prop, value) {
		const newState = {};
		newState[prop] = value;
		this.setState(newState);
	}
  render() {
    return (
			<div>
				<Header />
				<main>
					<Hero />
					<Intro />
					<section className="block__cv" id="design">
						<section className="section__creation">
							<h2 className="creation__title">Configura tu currículum</h2>
							<div className="container__creation">
								<CreationDesign />
                <ChooseImage />

								<CvForm updatePreview={this.updateState}/>
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
									<PreviewPersonalData
										name={this.state.name}
										surname={this.state.surname}
										profession={this.state.profession}
										telephone={this.state.telephone}
										date={this.state.date}
										email={this.state.email}
										address={this.state.address}
									/>
								</div>
								<PreviewSummary
									summary={this.state.summary}
									twitter={this.state.twitter}
									linkedin={this.state.linkedin}
									github={this.state.github}
								/>
								<PreviewExperience
									job = {this.state.job}
									company = {this.state.company}
									ExperiencieStartMonth={this.state.ExperiencieStartMonth}
									ExperiencieEndMonth={this.state.ExperiencieEndMonth}
									ExperiencieStartYear={this.state.ExperiencieStartYear}
									ExperiencieEndYear={this.state.ExperiencieEndYear}
									descriptionJob = {this.state.descriptionJob}
								/>
								<PreviewEducation
									titulation = {this.state.titulation}
									center = {this.state.center}
									EducationStartMonth={this.state.EducationStartMonth}
									EducationEndMonth={this.state.EducationEndMonth}
									EducationStartYear={this.state.EducationStartYear}
									EducationEndYear={this.state.EducationEndYear}
									descriptionEduc = {this.state.descriptionEduc}
								/>
								<PreviewSkills
									lang1 = {this.state.lang1}
									levelLanguage1 = {this.state.levelLanguage1}
									tech1 = {this.state.tech1}
									levelTech1 = {this.state.levelTech1}
									skill1 = {this.state.skill1}
								/>
							</div>
						</section>
					</section>
					</main>
				<Footer />
			</div>
    );
  }
}

export default App;
