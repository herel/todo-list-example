import React, { Component } from 'react';
import Item from './components/Item';
import Button from './components/Button';
import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          image : "hambuerger.png",
          name  : "Hamburguesa",
          portion : "500g",
          price   : 40
        }
      ]
    }
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }

  _add(){
    let { data } = this.state;
    let newData = [
      ...data,
      {
        image : "papas.png",
        name  : "Papas a la francesa",
        portion : "140g",
        price   : Math.floor(Math.random() * 20) 
      }
    ]
    this.setState({ data : newData });
  }

  _getTotal(){
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }


  render() {
    return (
      <div className="app">
        <h1>Ejemplo de listas</h1>
        <ul className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Añadir producto"
          />
          <h4>$ {this._getTotal()}</h4>
        </div>
      </div>
    );
  }
}

export default App;
