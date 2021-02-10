import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class HomeLogo extends Component {
    render() {
        
        return (
            <div className="logo-main">
                <Link to="/">
                    <img  alt="ccs logo home" src="/assets/images/ccslogo.png"/>
                </Link>
            </div>
        )
    }
}

export default HomeLogo;