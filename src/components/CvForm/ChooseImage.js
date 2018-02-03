import React from 'react';

class ChooseImage extends React.Component {
  render () {
    return (
			<form className="creation__photo" onSubmit = {this.props.onSubmitFunction}>
				<h3 className="label" htmlFor="files">Sube tu foto</h3>
				<input className="selection-image" type="file" onChange={this.props.onChangeUploadImage}/>
				{this.props.newImagePreview}
			</form>
    );
  }
}

export default ChooseImage;
