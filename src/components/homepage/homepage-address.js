import React, { Component } from 'react';


class HomepageAddress extends Component {
    
      
    render() {
        
        return (
            <div className='home-addresses'>
                <div className='first-address'>
                    <a href="https://goo.gl/maps/njRfuHe1iTG3Qiwq7"><img className='first-address-icon' src='/assets/images/Address-01.png'> 

                    </img></a>
                </div>
                <div className='second-address'>
                <a href="https://goo.gl/maps/VLYvZNsNWjZ9fTq49"><img className='second-address-icon' src='/assets/images/Address-02.png'> 

                    </img></a>
                </div>
                
            </div>
        );
    }
}

export default HomepageAddress;