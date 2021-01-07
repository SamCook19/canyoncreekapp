import React, { Component } from 'react';

import Layout from './Layout';
import Routes from './Routes';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavbarHidden: false
        };
    }

    render() {
      return (
        <div className='app-container'>
        <Layout />
        <Routes />
        </div>
    );
  }
}
