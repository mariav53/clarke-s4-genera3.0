import React from 'react';
import ButtonFont from './../images/text.svg';
import ButtonPalette from './../images/paint-palette.svg';
import ButtonTheme from './../images/menu.svg';

class CreationDesign extends React.Component {
  // constructor(props){
	// 	super(props);
	// 	this.toggleContentClickDesign = this.toggleContentClickDesign.bind(this);
	// 	this.state={
	// 		visible:false
	// 	}
	// }
	// toggleContentClickDesign(event){
	// 	event.preventDefault();
	// 	this.setState({
	// 		visible:!this.state.visible
	// 	})
	// }
  render () {
    return (
      <section className="creation__design">
        <ul className="creation__design__options">
          <li className="creation__design__options-font">
            <img className="img-design" src={ButtonFont} title="fuente" alt="fuentes" />
            <ul className="design-fonts hidden">
              <li className="font" data-font-class="cookie"><h3>Cookie</h3></li>
              <li className="font" data-font-class="annie"><h3>Annie</h3></li>
              <li className="font" data-font-class="philosopher"><h3>Philosopher</h3></li>
            </ul>
          </li>
          <li className="creation__design__options-colour">
            <img className="img-design" src={ButtonPalette} title="color" alt="color" />
            <ul className="design-colours hidden">
              <li className="colour" data-colour-class="red-green-lime">
                <div className="red"></div>
                <div className="green"></div>
                <div className="lime"></div>
              </li>
              <li className="colour" data-colour-class="black-blue-lime">
                <div className="black"></div>
                <div className="blue"></div>
                <div className="lime"></div>
              </li>
              <li className="colour" data-colour-class="black-pink-grey">
                <div className="black"></div>
                <div className="pink"></div>
                <div className="grey"></div>
              </li>
            </ul>
          </li>
          <li className="creation__design__options-theme">
            <img className="img-design" src={ButtonTheme} title="estilo" alt="estilo" />
            <ul className="design-themes hidden">
              <li className="theme" data-theme-class="dots"><h3>Dots</h3></li>
              <li className="theme" data-theme-class="stripes"><h3>Stripes</h3></li>
              <li className="theme" data-theme-class="zigZag"><h3>Zig Zag</h3></li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}


export default CreationDesign;
