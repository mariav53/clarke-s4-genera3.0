import React from 'react';

class ChooseImage extends React.Component {
  render () {
    return (
      <section className="creation__photo">
        <h3 className="label" for="files">Sube tu foto</h3>
        <input className="selection-image" type="file" id="files" name="files[]" />
        <div className="trigger"></div>
      </section>
    );
  }
}

export default ChooseImage;
