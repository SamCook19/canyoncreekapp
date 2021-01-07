import React, { Component } from 'react';

import EscapeButton from './escapebutton';
import HotlineButton from './hotline';

export default class Layout extends Component {
  
    render() {
      return (
        <div className='container'>
          <div className='header' >
          <h1>Canyon Creek Services</h1>
          <div className='escape-button'> <EscapeButton /> </div>
          <div className='hotline-button'><HotlineButton /></div>
          
        </div>
    </div>
          
       
    );
  }
}