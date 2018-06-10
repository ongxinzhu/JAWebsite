import React, { Component } from 'react';
import './pages/default.css';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="logo">
                    INSERT YOUR LOGO HERE
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/">News</a>
                        </li>
                        <li>
                            <a href="/team">Team</a>
                        </li>
                        <li>
                            <a href="/subject">Subject</a>
                        </li>
                        <li>
                            <a href="/">Rates</a>
                        </li>
                        <li>
                            <a href="/">Testimonial</a>
                        </li>
                        <li>
                            <a href="/">Resources</a>
                        </li>
                        <li>
                            <a href="/contactus">Contact Us</a>
                        </li>
                    </ul>
                </nav>

            </header>

        );
    }
}

export default Header;
/*
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/news">News</Link>
<Link to="/team">Team</Link>
<Link to="/subject">Subject</Link>
<Link to="/rates">Rates</Link>
<Link to="/testimonial">Testimonial</Link>
<Link to="/resources">Resources</Link>
<Link to="/contactus">Contact Us</Link>
*/