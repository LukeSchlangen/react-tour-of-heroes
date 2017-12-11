// src/Heroes/Heroes.js
import React, { Component } from 'react';
import './Heroes.css'

class Heroes extends Component {
    constructor() {
        super();
        this.state = {
            hero: {
                id: 1,
                name: 'Windstorm',
            },
            heroes: [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ]
        };

        this.updateHeroName = this.updateHeroName.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    updateHeroName(event) {
        this.setState({ hero: { name: event.target.value } });
    }

    onSelect(hero) {
        console.log('onSelect was clicked', hero);
    }

    render() {
        return (
            <div>
                <h2>My Heroes</h2>
                <ul className="heroes">
                    {this.state.heroes.map(hero => (
                        <li key={hero.id} onClick={event => this.onSelect(hero)}>
                            <span className="badge">{hero.id}</span>
                            {hero.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Heroes;
