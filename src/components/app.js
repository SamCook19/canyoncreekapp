import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SimpleMenu from './navigationmenu';

import Homepage from './homepage/homepage.js';
import AboutUs from './aboutus/AboutUs';
import Donate from './donate/Donate';
import Help from './help/Help';
import Volunteer from './volunteer/Volunteer';
import Prevention from './prevention/Prevention';
import EscapeButton from './escapebutton';
import HotlineButton from './hotline';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div className='container'>
          <Router>
          <div className='header' >
          <h1>Canyon Creek Services</h1>
          <div className='navigation-menu'> <SimpleMenu /> </div>
          <div className='escape-button'> <EscapeButton /> </div>
          <div className='hotline-button'><HotlineButton /></div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/help" component={Help}/>
            <Route exact path="/prevention" component={Prevention}/>
            <Route exact path="/donate" component={Donate}/>
            <Route exact path="/volunteer" component={Volunteer}/>

          </Switch>
          </div>
          </Router>
        </div>
    );
  }
}
