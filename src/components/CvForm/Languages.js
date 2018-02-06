import React from 'react';


class Languages extends React.Component {
	constructor(props){
		super(props);

		this.handleLanguages = this.handleLanguages.bind(this);
		this.handleClickAddLanguages = this.handleClickAddLanguages.bind(this);
		this.state = {
				myLanguages: {
					lang1: " ",
					levelLanguage1: " "
				}
			}
	}

	handleLanguages(event){
		event.preventDefault();
			this.setState({
			myLanguages:{
				lang1: this.refs.lang1.value,
				levelLanguage1: this.refs.levelLanguage1.value,
			},
		});
	}

	handleClickAddLanguages(event){
		let myLanguages = this.state.myLanguages;
		this.props.updateLanguagesPreview(myLanguages);
	}



	render() {
		return (
			<div className="languages">
				<p className="skills-p">Idiomas</p>
				<div className="language-element">
					<label className="label" htmlFor="language-name1"></label>
					<input className="language-name class-input" id="language-name1" type="text" name="lang1" placeholder="Idioma 1" ref="lang1" onChange ={this.handleLanguages}/>
					<select id="language-level1" name="levelLanguage1" ref="levelLanguage1" className="level" onChange ={this.handleLanguages}>
						<option value="nivel">Nivel</option>
						<option >--</option>
						<option>Básico</option>
						<option>Intermedio</option>
						<option>Alto</option>
						<option>Nativo</option>
					</select>
					<button type="button" name="button" className="button--new new-language-button"  data-id="1" onClick={this.handleClickAddLanguages }>Añadir idioma</button>
				</div>
			</div>
		);
	}
}

export default Languages;
