import React, { Component } from 'react';

class Quotes extends Component {
    render() {
        return (
            <div className="quote-container">
            <div className="first-quote">
                "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
            </div>
            <div className="second-quote">
                "Volunteering at Canyon Creek is the best decision I ever made."
            </div>
            <div className="third-quote">
                "The advocates here supported me in court when I had no other support system."
            </div>
            </div>
        );
    }
}

export default Quotes;