import React, { Component } from 'react';

class Item extends Component{
	_remove(){
		if(this.props.onRemove)
			this.props.onRemove();
	}
	render(){
		return (
			<li>
				<div className="icon">
					<img src={require(`../images/${this.props.data.image}`)}  alt="hambuerger" />
				</div>
				<div className="name">
					<span className="item-name">{this.props.data.name}</span>
					<span className="item-price">{this.props.data.portion}</span>
				</div>
				<div className="price">
					<h3>${this.props.data.price}</h3>
				</div>
				<button className="remove" onClick={this._remove.bind(this)}>
					<i className="material-icons">close</i>
				</button>
			</li>
		)
	}
}


export default Item;