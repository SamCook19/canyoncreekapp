import React, { Component } from 'react';
import QuoteCarousel from './quotes';
import HomepageSocialMedia from './homepage-socialmedia';
import HomepageAddress from './homepage-address';

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
                <div className='homepage-socialmedia-subscriptionform'>
                <div className='social-media-container'>
                  <HomepageSocialMedia />
                </div>
                {/* <div className='home-address-container'>
                    <HomepageAddress/>
                </div> */}
                <div className='sub-form'>
                <a href='https://canyoncreekservices.salsalabs.org/SubscriptionForm'>Join Our Email List</a>
                </div>
                </div>
            </div>
            
        );
    }
}

export default LeftColumn;