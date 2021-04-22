import React, { Component } from 'react';
import QuoteCarousel from './quotes';


class LeftColumn extends Component {
    constructor(props) {
        super(props);
        
        }

    render() {
        return (
            <div className='right-column'>
                <QuoteCarousel />
            </div>
            
        );
    }
}

export default LeftColumn;