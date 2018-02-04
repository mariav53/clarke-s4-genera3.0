import React from 'react';
import ButtonFont from './../../images/text.svg';
import ButtonPalette from './../../images/paint-palette.svg';
import ButtonTheme from './../../images/menu.svg';

class ChoseeTheme extends React.Component {

	constructor(props){
		super(props);
		this.HandleClickMenu = this.HandleClickMenu.bind(this);
		this.state={
			visible:false
		}
	}
	HandleClickMenu(event){
		event.preventDefault();
		this.setState({
			visible:!this.state.visible
		})
	}
  render () {
    return (
			<ul className="creation__design__options" onClick ={this.HandleClickMenu}>
				<li className="creation__design__options-theme">
					<img className="img-design" src={ButtonTheme} title="estilo" alt="estilo" />
					<ul  className={`design-themes ${this.state.visible ? 'visible' : 'no-visible'}`}>
						<li className="theme" data-theme-class="dots"><h3>Dots</h3></li>
						<li className="theme" data-theme-class="stripes"><h3>Stripes</h3></li>
						<li className="theme" data-theme-class="zigZag"><h3>Zig Zag</h3></li>
					</ul>
				</li>
			</ul>
    );
  }
}

export default ChoseeTheme;
