import React from 'react';

class Education extends React.Component {
	constructor(props){
		super(props);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleClickAddEducation = this.handleClickAddEducation.bind(this);
		this.state = {
			myEducation: {
				titulation: " ",
				EducationStartMonth: " ",
				EducationStartYear: " ",
				EducationEndMonth: " ",
				EducationEndYear: " ",
				center: " ",
				descriptionEduc: " "
			}
		}
	}
	handleEducation(event){
		event.preventDefault();
		this.setState({
			myEducation:{
				titulation: this.refs.titulation.value,
				EducationStartMonth: this.refs.EducationStartMonth.value,
				EducationStartYear: this.refs.EducationStartYear.value,
				EducationEndMonth: this.refs.EducationEndMonth.value,
				EducationEndYear: this.refs.EducationEndYear.value,
				center: this.refs.center.value,
				descriptionEduc: this.refs.descriptionEduc.value,
			},
		});
	}

	handleClickAddEducation(event){
		let myEducation = this.state.myEducation;
		this.props.updateEducationPreview(myEducation);
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
      <div id="container-inputs__education">
        <div className="education-element" id="education-element">
					<input className="class-input" id="titulo1" type="text" ref="titulation" name="titulation" placeholder="Título*" required onChange ={this.handleEducation}  />
          <div className="education-dates">
            <div className="date-container-from">
              <label className="label from">Desde</label>
							<select ref='EducationStartMonth'  name='EducationStartMonth' className="month" onChange={this.handleEducation} >
								{monthsArray.map(option => {
									return <option value={option} key={option}>{option}</option>})}
							</select>
							<select name='EducationStartYear' ref= 'EducationStartYear' className="year"  onChange={this.handleEducation}> {this.createSelectItems()}
							</select>
            </div>
            <div className="date-container-until">
              <label className="label until">Hasta</label>
							<select ref='EducationEndMonth'  name='EducationEndMonth' className="month" onChange={this.handleEducation} >
								{monthsArray.map(option => {
									return <option value={option} key={option}>{option}</option>})}
							</select>
							<select name='EducationEndYear' ref= 'EducationEndYear' className="year"  onChange={this.handleEducation}> {this.createSelectItems()}
							</select>
            </div>
          </div>
          <label className="label" htmlFor="centro"></label>
          <input className="class-input" id="centro1" type="text" ref="center" name="center" placeholder="Centro de estudios*" required onChange ={this.handleEducation}/>
          <label className="label" htmlFor="description-education1"></label>
          <textarea className="description" id="description-education1" cols="30" rows="10"  ref="descriptionEduc"  name="descriptionEduc" placeholder="Descripción" onChange ={this.handleEducation}></textarea>
          <button type="button" name="button" className="button--save save-education-button" id="save-education-button1" data-id="1" onClick={this.handleClickAddEducation }>Añadir</button>
        </div>

      </div>
    );
  }
}

export default Education;
