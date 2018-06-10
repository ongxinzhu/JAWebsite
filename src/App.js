import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import './App.css';
//components
import About from './components/pages/About';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Team from './components/pages/Team'
import Subject from './components/pages/Subject'
import ContactUs from './components/pages/ContactUs'

import './components/pages/default.css'

class App extends Component {
    render() {
        return (
           // <Router history ={browserHistory}>
            <div className="App">

            <Header/>

                <Router history ={browserHistory}>
                    <Route path='/about' components={About}/>
                    <Route path='/' components={Homepage}/>
                    <Route path='/team' components={Team}/>
                    <Route path='/subject' components={Subject}/>
                    <Route path='/contactus' components={ContactUs}/>
                </Router>
            </div>
        );
    }
}
export default App;