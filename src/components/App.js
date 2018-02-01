import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import CreationDesign from './CvForm/CreationDesign';
import ChooseImage from './CvForm/ChooseImage';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';
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
						<CvPreview
							job = {this.state.job}
							company = {this.state.company}
							descriptionJob = {this.state.descriptionJob}
							titulation = {this.state.titulation}
							center = {this.state.center}
							descriptionEduc = {this.state.descriptionEduc}
							lang1 = {this.state.lang1}
							tech1 = {this.state.tech1}
							skill1 = {this.state.skill1}

						/>
					</section>
				</main>
				<Footer />
			</div>
    );
  }
}

export default App;
