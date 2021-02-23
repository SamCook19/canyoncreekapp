import React, { Component } from 'react';
import Layout from './Layout';
import '../../static/assets/fonts/stellar-light.woff';
import Icons from "../helpers/icons";
import "firebase/auth";

export default class App extends Component {
    constructor(props){
        super(props);

      Icons();
    
    }
    render() {
      return (
        <div className='app-container'>
        <Layout />
        </div>
    );
  }
}

