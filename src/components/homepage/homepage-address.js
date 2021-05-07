import React, { Component } from 'react';


class HomepageAddress extends Component {
    
      
    render() {
        
        return (
            <div className='home-addresses'>
                <div className='first-address'>
                    <img className='first-address-icon' src='/assets/images/Address-01.png'> 

                    </img>
                </div>
                <div className='second-address'>
                <img className='second-address-icon' src='/assets/images/Address-02.png'> 

                    </img>
                </div>
                
            </div>
        );
    }
}

export default HomepageAddress;