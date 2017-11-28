// src/Heroes/Heroes.js
import React, { Component } from 'react';

const hero = {
    id: 1,
    name: 'Windstorm',
};

class Heroes extends Component {
  render() {
    return (
        <div>
            <h2>{ hero.name.toUpperCase() } Details</h2>
            <div><span>id: </span>{ hero.id }</div>
            <div>
                <label>name:
                  <input value={ hero.name } placeholder="name"></input>
                </label>
            </div>
        </div>
    );
  }
}

export default Heroes;
