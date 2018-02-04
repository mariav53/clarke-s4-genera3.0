import React from 'react';
import ButtonFont from './../../images/text.svg';
import ButtonPalette from './../../images/paint-palette.svg';
import ButtonTheme from './../../images/menu.svg';

class ChoseeFont extends React.Component {

	constructor(props){
		super(props);
		this.HandleClickMenu = this.HandleClickMenu.bind(this);
		this.state={
			visible:false,
			// cookie:false,
			// annie: false,
			// philosopher: false

		}
	}
	HandleClickMenu(event){
		event.preventDefault();
		this.setState({
			visible: !this.state.visible,
			cookie: !this.state.cookie,
			annie: !this.state.annie,
			philosopher: !this.state.philosopher
		})
	}
	// HandleClickFont(event){
	// 	event.preventDefault();
	// 	this.setState({
	//
	// 		cookie:!this.state.cookie,
	// 		annie:!this.state.annie,
	// 		philosopher:!this.state.philosopher
	// 	})
	// }
  render () {
    return (
				<li className="creation__design__options-font" >
					<img className="img-design" src={ButtonFont} title="fuente" alt="fuentes" onClick ={this.HandleClickMenu}/>
					<ul className={`design-fonts ${this.state.visible ? 'visible' : 'no-visible'}`}>
						<li className="font" data-font-class="cookie"><h3>Cookie</h3></li>
						<li className="font" data-font-class="annie"><h3>Annie</h3></li>
						<li className="font" data-font-class="philosopher"><h3>Philosopher</h3></li>
					</ul>
				</li>

    );
  }
}

export default ChoseeFont;
