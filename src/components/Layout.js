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
import AnnualReport from "./aboutus/AnnualReport";
import EmploymentOpp from "./aboutus/EmploymentOpp";
import Financials from "./aboutus/Financials";
import Organization from "./aboutus/Organization";
import WhoWeAre from "./aboutus/WhoWeAre";
import Supporters from "./donate/Supporters";
import Coalition from "./prevention/Coalition";
import Login from "./auth/login";
import Contact from "./contact/contact";
import ViewArticle from "./blog/ViewArticle/ViewArticle";
import NewArticle from "./blog/NewArticle/NewArticle";

export default class Layout extends Component {
  
    render() {
      return (
        <div className='container'>
          <div className='route-container'>
          <Router>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" component={Homepage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/help" component={Help}/>
            <Route exact path="/prevention" component={Prevention}/>
            <Route exact path="/donate" component={Donate}/>
            <Route exact path="/volunteer" component={Volunteer}/>
            <Route exact path="/annualreport" component={AnnualReport}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/employmentopportunities" component={EmploymentOpp}/>
            <Route exact path="/financials" component={Financials}/>
            <Route exact path="/organization" component={Organization}/>
            <Route exact path="/whoweare" component={WhoWeAre}/>
            <Route exact path="/supporters" component={Supporters}/>
            <Route exact path="/coalition" component={Coalition}/>
            <Route exact path="/contact" component={Contact}/>
            <Route path='/article/:id'> <ViewArticle/> </Route>
            <Route path='/newarticle'>
              <NewArticle />
            </Route>
            <Route component={NoMatch} />
          </Switch>
          </Router>
        </div>
        </div>
    
          
       
    );
  }
}