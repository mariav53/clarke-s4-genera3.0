import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import CreationDesign from './CvForm/CreationDesign';
import ChooseImage from './CvForm/ChooseImage';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';
import PreviewPersonalData from './CvPreview/Preview-PersonalData';
import Footer from './Footer/Footer';
import Hero from './Intro/Hero';

import './../scss/main.css';

class App extends Component {
	constructor(props){
     super(props);
     this.state = {
			 summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			 twitter: '@usuario',
			 linkedin: 'linkedin.es/usuario',
			 github: 'github.com/usuario'
		 };
     this.updateState = this.updateState.bind(this);
   }

   updateState(prop, value){
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
								<CvForm updatePreview={this.updateState} />
							</div>
						</section>
						<PreviewPersonalData
							name={this.state.name}
							surname={this.state.surname}
							profession={this.state.profession}
							telephone={this.state.telephone}
							date={this.state.date}
							email={this.state.email}
							address={this.state.address}
							summary={this.state.summary}
							twitter={this.state.twitter}
							linkedin={this.state.linkedin}
							github={this.state.github}
						/>
					</section>
				</main>
				<Footer />
			</div>
    );
  }
}

export default App;
