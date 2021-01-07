import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Homepage from './homepage/homepage.js';
import AboutUs from './aboutus/AboutUs';
import Donate from './donate/Donate';
import Help from './help/Help';
import Volunteer from './volunteer/Volunteer';
import Prevention from './prevention/Prevention';

import NoMatch from "./otherpages/no-match";
import Blog from "./blog/Blog";



export default class Routes extends Component {
    constructor(props){
        super(props);
      
    }

    render() {
      return (
        <div className='container'>
          <Router> 
          <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/help" component={Help}/>
            <Route exact path="/prevention" component={Prevention}/>
            <Route exact path="/donate" component={Donate}/>
            <Route exact path="/volunteer" component={Volunteer}/>
            <Route exact path="/blog" component={Blog}/>
            <Route component={NoMatch} />
          </Switch>
          </div>
          </Router>
        </div>
    );
  }
}
