import React, { Component } from 'react';
import QuoteCarousel from './quotes';
import HomepageSocialMedia from './homepage-socialmedia';

class LeftColumn extends Component {
    constructor(props) {
        super(props);
        
        }

    render() {
        return (
            <div className='left-column'>
              <div className='quote-slide-show'>
                <QuoteCarousel />
                </div>
                <div className='social-media-container'>
                  <HomepageSocialMedia />
                </div>
            </div>
            
        );
    }
}

export default LeftColumn;