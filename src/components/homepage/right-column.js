import React, { Component } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import AdminButton from './adminbutton';
import ControlledCarousel from './right-carousel';


class RightColumn extends Component {
    constructor(props) {
        super(props);
        
        }

    render() {
        return (
            <div className='right-column'>
                <ControlledCarousel />
            </div>
            
        );
    }
}

export default RightColumn;