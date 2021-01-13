import React, { Component } from 'react';

class LeftCorner extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 40,
            
        }
        return (
            <div className='left-corner-container'>
                <div className='quote-slide-show'>
                Cycling quotes 
                </div>
                <div className='social-media-icons'>
                <div className='facebook-icon'>
                <img style={size} alt="ccs facebook" src="/assets/images/facebook.png"/>
                </div>
                <div className='instagram-icon'>
                <img style={size} alt="ccs instagram" src="/assets/images/instagram.png"/>
                </div>
                <div className='linkedin-icon'>
                <img style={size} alt="ccs linkedin" src="/assets/images/linkedin.png"/>
                </div>
                <div className='twitter-icon'>
                <img style={size} alt="ccs twitter" src="/assets/images/twitter.png"/>
                </div>
                </div>
            </div>
        );
    }
}

export default LeftCorner;