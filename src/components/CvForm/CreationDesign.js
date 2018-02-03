import React from 'react';
import ButtonFont from './../../images/text.svg';
import ButtonPalette from './../../images/paint-palette.svg';
import ButtonTheme from './../../images/menu.svg';
import ChoseeFont from './ChoseeFont';
import ChoseeColor from './ChoseeColors';
import ChoseeTheme from './ChoseeTheme';

class CreationDesign extends React.Component {
  render () {
    return (
      <section className="creation__design">
				<ChoseeFont />
				<ChoseeColor />
				<ChoseeTheme />
			</section>
    );
  }
}


export default CreationDesign;
