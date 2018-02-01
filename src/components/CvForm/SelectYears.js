import React from 'react';

class SelectYears extends React.Component {
	constructor(props){
		super(props);
		this.onChangeSelects = this.onChangeSelects.bind(this);
		this.state ={
			value: "Año"
		}
	}
	onChangeSelects(e){
		this.setState({
			value: e.target.value
		})
	}
	createSelectItems() {
    let yearsInput = [];
    for (let i = 1950; i <= 2018; i++) {
     yearsInput.push(<option key={i} value={i}>{i}</option>);
    }
    return yearsInput;
  }
	render() {
		return (
      <div>
				<select id="end_year-education1" name="end_year" className="year" value={this.state.value} onChange={this.onChangeSelects} >{this.createSelectItems()}
				</select>
			</div>
    );
  }
}
export default SelectYears;
