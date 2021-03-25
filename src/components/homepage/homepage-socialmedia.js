import React, { Component } from 'react';


class HomepageSocialMedia extends Component {
    state = {
        facebook: "/assets/images/facebook.png",
        instagram: "/assets/images/instagram.png",
        linkedin: "/assets/images/linkedin.png",
        twitter: "/assets/images/twitter.png"
      }
      
    render() {
        
        return (
            <div className='social-media-icons'>
                <div className='facebook-home'>
                   
                <a className='facebook-icon' href='https://www.facebook.com/CCreekServices/'>
                <img class='facebook-main' alt="ccs facebook" src={this.state.facebook} onMouseEnter={() => {
                    this.setState({
                        facebook:"/assets/images/facebookalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        facebook: "/assets/images/facebook.png"
                    })
                }}

                />
                </a>
                
                </div>
                <div className='instagram-home'>
                <a className='instagram-icon' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img class='instagram-main' alt="ccs instagram" src={this.state.instagram} onMouseEnter={() => {
                    this.setState({
                        instagram:"/assets/images/instagramalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        instagram: "/assets/images/instagram.png"
                    })
                }}

                />
                </a>
                </div>

                <div className='linkedin-home'>
                <a className='linkedin-icon' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img class='linkedin-main' alt="ccs linkedin" src={this.state.linkedin} onMouseEnter={() => {
                    this.setState({
                        linkedin:"/assets/images/linkedinalt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        linkedin: "/assets/images/linkedin.png"
                    })
                }}

                />
                </a>
                </div>

                <div className='twitter-home'>
                <a className='twitter-icon' href='https://twitter.com/ccreekservices?lang=en'>
                <img class='twitter-main' alt="ccs twitter" src={this.state.twitter} onMouseEnter={() => {
                    this.setState({
                        twitter:"/assets/images/twitteralt.png"
                    })
                }} 
                onMouseOut ={() => {
                    this.setState({
                        twitter: "/assets/images/twitter.png"
                    })
                }}

                />
                </a>
                </div>
                
            </div>
        );
    }
}

export default HomepageSocialMedia;