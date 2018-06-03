import React, { Component } from 'react';

class Button extends Component{
	
	_add(){
		if(this.props.onClick)
			this.props.onClick();
	}

	render(){
		return (
			<button className="add-button" onClick={this._add.bind(this)}>
				{this.props.name}
			</button>
		)
	}
}

export default Button;