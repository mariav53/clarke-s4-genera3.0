import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
// import CreationDesign from './CvForm/CreationDesign';
import ChoseeFont from './CvForm/ChoseeFont';
import ChoseeColor from './CvForm/ChoseeColors';
import ChoseeTheme from './CvForm/ChoseeTheme';
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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageUpload = this.handleImageUpload.bind(this);
		this.handleChangeFontCookie = this.handleChangeFontCookie.bind(this);
		this.handleChangeFontAnnie = this.handleChangeFontAnnie.bind(this);
		this.handleChangeFontPhilosopher = this.handleChangeFontPhilosopher.bind(this);
		this.HandleGreenLimeClick = this.HandleGreenLimeClick.bind(this);
		this.HandleBlueLimeClick = this.HandleBlueLimeClick.bind(this);
		this.HandlePinkGreyClick = this.HandlePinkGreyClick.bind(this);
		this.updateJobState = this.updateJobState.bind(this);

		this.state = {
			file: '',
			imagePreviewUrl: '',
			fontOption:'philosopher',
			colorOption: 'black-pink-grey',
			listJobs: []
		};
	}

	updateJobState(myExperience){
		this.setState(prevState => ({
    	listJobs: [...prevState.listJobs, myExperience]
		}))

	}

	handleChangeFontCookie(e){
		e.preventDefault();
		this.setState({
			fontOption: 'cookie'
		})
	}
	handleChangeFontAnnie(e){
		e.preventDefault();
		this.setState({
			fontOption: 'annie'
		})
	}
	handleChangeFontPhilosopher(e){
		e.preventDefault();
		this.setState({
			fontOption: 'philosopher'
		})
	}

	HandleGreenLimeClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'red-green-lime'
		})
	}
	HandleBlueLimeClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'black-blue-lime'
		})
	}
	HandlePinkGreyClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'black-pink-grey'
		})
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('handle uploading-', this.state.file);
	}

	handleImageUpload(e) {
		e.preventDefault();
		let reader = new FileReader();
    let file = e.target.files[0];
		reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
		reader.readAsDataURL(file)
	}

	updateState(prop, value) {
		const newState = {};
		newState[prop] = value;
		this.setState(newState);
	}

  render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<div className="background__photo-preview" style={{backgroundImage: `url(${imagePreviewUrl})`}}></div>);
		}
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
								<section className="creation__design">
									<ul className="creation__design__options">

										<ChoseeFont
											onClickCookie = {this.handleChangeFontCookie}
											onClickAnnie = {this.handleChangeFontAnnie}
											onClickPhilosopher = {this.handleChangeFontPhilosopher}
										/>
										<ChoseeColor
											onClickGreenLime = {this.HandleGreenLimeClick}
											onClickBlueLime = {this.HandleBlueLimeClick}
											onClickPinkGrey = {this.HandlePinkGreyClick}
										/>
										<ChoseeTheme />
									</ul>
								</section>
								<ChooseImage
									onSubmitFunction = {(e)=>this.handleSubmit(e)}
									onChangeUploadImage = {(e)=>this.handleImageUpload(e)}
									newImagePreview = {$imagePreview}
								/>
								<CvForm
									updatePreview={this.updateState}
									updateJobsPreview={this.updateJobState}
								/>
							</div>
						</section>
						<section className="section__preview" id="preview">
							<h2 className="preview__title"> Previsualización </h2>

							<div className={`showpreview dots ${this.state.fontOption} ${this.state.colorOption}`}>
								<div className="container__preview--intro preview-div">
									<div className="container__preview--photo">
										<div className="container__photo">
											{$imagePreview}
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
									listJobs ={this.state.listJobs}
									// job = {this.state.job}
									// company = {this.state.company}
									// ExperiencieStartMonth={this.state.ExperiencieStartMonth}
									// ExperiencieEndMonth={this.state.ExperiencieEndMonth}
									// ExperiencieStartYear={this.state.ExperiencieStartYear}
									// ExperiencieEndYear={this.state.ExperiencieEndYear}
									// descriptionJob = {this.state.descriptionJob}
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
