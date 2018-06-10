import React, { Component } from 'react';

class Homepage extends Component {
    render(){
        return(
            <div>
                <div className="register-section">
                    <input placeholder="Enter your username"/>
                    <input placeholder="Enter your password"/>
                    <button> Login </button>
                </div>
                <div className="top-section">
                    <div className="mid-left">
                        <div className="mid-title">
                            <p>Welcome to Leo's Education</p>
                        </div>
                        <p> Give a brief overview of the website</p>
                    </div>
                </div>

                <div className="main-section">
                    <div className="text-box">
                        <p> Recent news and promotions here</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;