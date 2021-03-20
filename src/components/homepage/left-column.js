import React, { Component } from 'react';
import Quotes from './quotes';
import HomepageSocialMedia from './homepage-socialmedia';

class LeftColumn extends Component {
    render() {
        
        return (
            <div className='left-column'>
               <div className='quote-slide-show'>
                    <Quotes />
                </div>
                <div className='social-media-container'>
                <div className='social-media-icons'>
                    <HomepageSocialMedia />
                </div>
                </div>
            </div>
        );
    }
}

export default LeftColumn;