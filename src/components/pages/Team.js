import React, { Component } from 'react';
import './default.css';

class Team extends Component {
    render() {
        return (
            <div>
                <h1>
                    Team
                </h1>

            <div className="grid-container">
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                <figure>
                    <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                    <figcaption> Name </figcaption>
                </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>
                <div className="grid-item">
                    <figure>
                        <img src={require('./Images/mem.jpeg')} width="200px" height="200px" alt='name' />
                        <figcaption> Name </figcaption>
                    </figure>
                </div>

            </div>

            </div>

        );
    }

}

export default Team;