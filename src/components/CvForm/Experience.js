import React from 'react';

class Experience extends React.Component {
	constructor(props){
		super(props);
	this.handleJob = this.handleJob.bind(this);
	this.handleClickAddJob = this.handleClickAddJob.bind(this);
	this.state = {
			myExperience: {
				job: "",
				company: "",
				descriptionJob: "",
				ExperiencieStartMonth : "",
				ExperiencieStartYear : "",
				ExperiencieEndMonth : "",
				ExperiencieEndYear : "",
			}
		}
	}

	handleJob(event){
		event.preventDefault();
		console.log(event.target.value);
		this.setState({
			myExperience:{
				job: this.refs.job.value,
				ExperiencieStartMonth: this.refs.ExperiencieStartMonth.value,
				ExperiencieStartYear: this.refs.ExperiencieStartYear.value,
				ExperiencieEndMonth: this.refs.ExperiencieEndMonth.value,
				ExperiencieEndYear: this.refs.ExperiencieEndYear.value,
				company: this.refs.company.value,
				descriptionJob: this.refs.descriptionJob.value,
			},
		});
	}

	handleClickAddJob(event){
		let myExperience = this.state.myExperience;
		this.props.updateJobsPreview(myExperience);
			 console.log(myExperience);
	}
	createSelectItems() {
		let yearsInput = [];
		let actual = <option key='0' value=''></option>;
		 yearsInput.push (actual);
		for (let i = 1950; i <= (new Date()).getFullYear(); i++) {
			if (i === 2000){
				yearsInput.push(<option key={i} value={i} selected="selected">{i} </option>);
			} else{
				yearsInput.push(<option key={i} value={i}>{i}</option>);
			}
		}
		return yearsInput;
	}

	render() {
		const monthsArray = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Actual"];
		return (
			<div id="container-inputs__experience">
				<div className="experience-element" id="experience-element">
					<input className="class-input" id="job1" ref="job" type="text" name="job" placeholder="Puesto" onChange ={this.handleJob} />
					<div className="experience-dates">
						<div className="date-container-from">
							<label className="label from">Desde</label>
							<select ref='ExperiencieStartMonth'  name='ExperiencieStartMonth' className="month" onChange={this.handleJob} >
								{monthsArray.map(option => {
									return <option value={option} key={option}>{option}</option>})}
							</select>
							<select name='ExperiencieStartYear' ref= 'ExperiencieStartYear' className="year"  onChange={this.handleJob}> {this.createSelectItems()}
							</select>
						</div>
						<div className="date-container-until">
							<label className="label until">Hasta</label>
							<select ref='ExperiencieEndMonth'  name='ExperiencieEndMonth' className="month" onChange={this.handleJob} >
								{monthsArray.map(option => {
									return <option value={option} key={option}>{option}</option>})}
							</select>
							<select name='ExperiencieEndYear' ref= 'ExperiencieEndYear' className="year"  onChange={this.handleJob}> {this.createSelectItems()}
							</select>
						</div>
					</div>
					<input className="class-input" id="company1" type="text" ref="company" name="company" placeholder="Lugar" onChange ={this.handleJob}  />
					<textarea className="experience-text" id="description-job1" ref="descriptionJob" name="descriptionJob" rows="8" cols="80" placeholder="Despripción del puesto" onChange ={this.handleJob} ></textarea>
					<button type="button" name="button" className="button--save save-experience-button" data-id="1" onClick={this.handleClickAddJob }>Añadir</button>
				</div>
			</div>
		);
	}
}

export default Experience;
