import React, { Component } from 'react';
import firebase from "firebase"
import Layout from './Layout';
import '../../static/assets/fonts/stellar-light.woff';
import Icons from "../helpers/icons";
import "firebase/auth";
import { useAuth } from '../contexts/AuthContext'

export default class App extends Component {
    constructor(props){
        super(props);
      Icons();
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN"
      };
    }
  
    //   this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    //   this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    //   this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    // }
  
    // handleSuccessfulLogin() {
    //   this.setState({
    //     loggedInStatus: "LOGGED_IN"
    //   });
    // }
  
    // handleUnsuccessfulLogin() {
    //   this.setState({
    //     loggedInStatus: "NOT_LOGGED_IN"
    //   });
    // }
  
    // handleSuccessfulLogout() {
    //   this.setState({
    //     loggedInStatus: "NOT_LOGGED_IN"
    //   });
    // }

    // checkLoginStatus() {
      
    // }
    
    // componentDidMount() {
    //   this.checkLoginStatus();
    // }
    
    render() {
      return (
        <div className='app-container'>
        <Layout />
        </div>
    );
  }
}

