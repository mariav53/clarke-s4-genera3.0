import React from 'react';
class It extends React.Component {
	constructor(props){
		super(props);

		this.handleIt = this.handleIt.bind(this);
		this.handleClickAddIt = this.handleClickAddIt.bind(this);
		this.state = {
				myIt: {
					tech1: " ",
					levelTech1: " "
				}
			}
	}

	handleIt(event){
		event.preventDefault();
			this.setState({
			myIt:{
				tech1: this.refs.tech1.value,
				levelTech1: this.refs.levelTech1.value,
			},
		});
	}

	handleClickAddIt(event){
		let myIt = this.state.myIt;
		this.props.updateItPreview(myIt);
	}

	render() {
		return (
			<div className="it">
				<p className="skills-p">Programas informáticos</p>
				<div className="it-element">
					<label className="label" htmlFor="it-name1"></label>
					<input className="it-name class-input" id="it-name1" type="text" name="tech1" ref="tech1" placeholder="Tecnología 1" onChange ={this.handleIt}/>
					<select id="it-level1" name="levelTech1" ref="levelTech1" className="level" onChange ={this.handleIt}>
						<option value="nivel">Nivel</option>
						<option >--</option>
						<option>Básico</option>
						<option>Intermedio</option>
						<option>Alto</option>
					</select>
					<button type="button" name="button" className="button--new new-it-button" data-id="1" onClick={this.handleClickAddIt}>Añadir programa</button>
				</div>
			</div>
		);
	}
}

export default It;
