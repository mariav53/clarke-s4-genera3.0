import React from 'react';

class Checkbox extends React.Component {
	render() {
		return (
			<div className="actualidad">
				<label for="actualidad" className="present-button-p">Actual</label>
				<input className="present-button" id="actualidad-job1" type="checkbox" name="actualidad" onChange={this.handleChange}  />
			</div>

    );
  }
}
export default Checkbox;
