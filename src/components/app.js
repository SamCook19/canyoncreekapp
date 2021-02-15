import React, { Component } from 'react';
import firebase from "firebase"
import Layout from './Layout';
import '../../static/assets/fonts/stellar-light.woff';
import Icons from "../helpers/icons";
import "firebase/auth";
import { useAuth } from '../contexts/AuthContext'
import axios from "axios";

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

