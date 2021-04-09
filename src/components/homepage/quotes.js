// import React, { Component } from 'react';

// class Quotes extends Component {
//     render() {
//         return (
            
//             <div className="quote-container">
//             <div className="first-quote">
//                 "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
//             </div>
//             <div className="second-quote">
//                 "Volunteering at Canyon Creek is the best decision I ever made."
//             </div>
//             <div className="third-quote">
//                 "The advocates here supported me in court when I had no other support system."
//             </div>
//             </div>
            
//         );
//     }
// }



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Quotes extends Component {
    render() {
        return (
            <Carousel showThumbs={false} animationHandler='fade' swipeable={false} >
                
                <div key="slide1" style={{ padding: 20, height: 500 }}>
                    <div className="first-quote">
                "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
                </div>
                <div classname="second-quote">
                "Volunteering at Canyon Creek is the best decision I ever made."
                </div>
                <div className="third-quote">
                "The advocates here supported me in court when I had no other support system."
                </div>
        </div>
        <div key="slide2" style={{ padding: 20, height: 500 }}>
            Text 02
        </div>
        <div key="slide3" style={{padding: 20, height: 500}}>
            Text 03
        </div>
               
            </Carousel>
        );
    }
};

export default Quotes;