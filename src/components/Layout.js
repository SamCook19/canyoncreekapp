import React, { Component } from 'react';

import EscapeButton from './buttons/escapebutton';
import HotlineButton from './buttons/hotline';
import BlogButton from './buttons/blogbutton';

export default class Layout extends Component {
  
    render() {
      return (
        <div className='container'>
          <div className='header' >
          <div className='button-group' >
          <div className='escape-button'> <EscapeButton /> </div>
          <div className='hotline-button'> <HotlineButton /></div>
          <div className='blog-button'> <BlogButton /> </div>
          </div>
          
        </div>
    </div>
          
       
    );
  }
}