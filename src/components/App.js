import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import CreationDesign from './CreationDesign';
import ChooseImage from './ChooseImage';
import CvForm from './CvForm';
import CvPreview from './CvPreview';
import Footer from './Footer';
import Hero from './Hero';

import './../scss/main.css';

class App extends Component {
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
								<CvForm />
							</div>
						</section>
						<CvPreview />
					</section>
				</main>
				<Footer />
			</div>
    );
  }
}

export default App;
