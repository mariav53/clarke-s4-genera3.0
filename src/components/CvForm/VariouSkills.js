import React from 'react';
class VariouSkills extends React.Component {
	constructor(props){
		super(props);

		this.handleVariouSkills = this.handleVariouSkills.bind(this);
		this.handleClickAddVariouSkills = this.handleClickAddVariouSkills.bind(this);
		this.state = {
				myVariouSkills: {
					skill1: " "
				}
			}
	}

	handleVariouSkills(event){
		event.preventDefault();
			this.setState({
			myVariouSkills:{
				skill1: this.refs.skill1.value
			},
		});
	}

	handleClickAddVariouSkills(event){
		let myVariouSkills = this.state.myVariouSkills;
		this.props.updateVariouSkillsPreview(myVariouSkills);
	}
	render() {
		return (
			<div className="various-skills">
				<p className="skills-p">Destrezas</p>
				<div className="skills-element">
					<label className="label" htmlFor="skill-element1"></label>
					<input className="skills-element class-input" id="skill-element1" type="text" name="skill1" ref="skill1" placeholder="Destreza 1" onChange ={this.handleVariouSkills}/>
					<button type="button" name="button" className="button--new new-skills-button" data-id="1" onClick={this.handleClickAddVariouSkills }>Añadir habilidad</button>
				</div>
			</div>
		);
	}
}

export default VariouSkills;
