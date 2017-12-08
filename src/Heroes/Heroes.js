// src/Heroes/Heroes.js
import React, { Component } from 'react';

class Heroes extends Component {
    constructor() {
        super();
        this.state = {
            hero: {
                id: 1,
                name: 'Windstorm',
            }
        }

        this.updateHeroName = this.updateHeroName.bind(this);
    }

    updateHeroName(event) {
        this.setState({ hero: {name: event.target.value }});
    }

    render() {
        return (
            <div>
                <h2>{this.state.hero.name.toUpperCase()} Details</h2>
                <div><span>id: </span>{this.state.hero.id}</div>
                <div>
                    <label>name:
                        <input value={this.state.hero.name} onChange={this.updateHeroName} placeholder="name"></input>
                    </label>
                </div>
            </div>
        );
    }
}

export default Heroes;
