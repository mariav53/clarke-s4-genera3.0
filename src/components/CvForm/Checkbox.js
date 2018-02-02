import React from 'react';

class Checkbox extends React.Component {
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
			<div className="actualidad">
				<label for="actualidad" className="present-button-p">Actual</label>
				<input className="present-button" id="actualidad-job1" type="checkbox" name="actualidad" />
			</div>
    );
  }
}
export default Checkbox;
