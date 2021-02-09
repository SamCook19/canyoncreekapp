import React, { Component } from 'react';

import {Provider} from 'react-redux';
import {getReduxStore, getRrfProps} from '../Config/firebase-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import Layout from './Layout';
import '../../static/assets/fonts/stellar-light.woff';
import Icons from "../helpers/icons";




export default class App extends Component {
    constructor(props){
        super(props);

      Icons();

        this.state = {
            isNavbarHidden: false
        };
    }

    render() {
      return (
        <div className='app-container'>
        <Provider store={getReduxStore()}>
          <ReactReduxFirebaseProvider {...getRrfProps()}>
        <Layout />
        </ReactReduxFirebaseProvider>
        </Provider>
        </div>
    );
  }
}
