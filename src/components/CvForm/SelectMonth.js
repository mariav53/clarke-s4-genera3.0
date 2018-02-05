import React from 'react';

class SelectMonth extends React.Component {
	render() {
		const monthsArray = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Actual"];
		return (
      <div>
				<select id="end_month-education1" ref={this.props.ref}  name={this.props.name} className="month" onChange={this.props.handleJob} >
					{monthsArray.map(option => {
						return <option value={option} key={option}>{option}</option>})}
				</select>
			</div>

    );
  }
}

export default SelectMonth;
