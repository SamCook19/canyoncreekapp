import React, { Component } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import AdminButton from './adminbutton';


class RightColumn extends Component {
    constructor(props) {
        super(props);
        
        }

    render() {
        return (
            <div className='right-column'>
                image slideshow and info
                <AdminButton />
            </div>
            
        );
    }
}

export default RightColumn;