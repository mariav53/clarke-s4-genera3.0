import React from 'react';

class SelectYears extends React.Component {

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
				<select id="end_year-education1" name={this.props.name} className="year"  onChange={this.props.onChangeSelect}> {this.createSelectItems()}
				</select>
			</div>
    );
  }
}
export default SelectYears;
