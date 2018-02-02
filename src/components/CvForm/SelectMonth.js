import React from 'react';

class SelectMonth extends React.Component {
	constructor(props){
		super(props);
		this.onChangeSelects = this.onChangeSelects.bind(this);
		this.state ={
			value: "Mes"
		}
	}
	onChangeSelects(e){
		this.setState({
			value: e.target.value
		})
	}
	render() {
		const monthsArray = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
		return (
      <div>
				<select id="end_month-education1" name="end_month" className="month" value={this.state.value} onChange={this.onChangeSelects}>
					{monthsArray.map(option => {
						return <option value={option} key={option}>{option}</option>})}
				</select>
			</div>

    );
  }
}
export default SelectMonth;
