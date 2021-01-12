import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class HomeLogo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 200,
            width: this.props.size ? this.props.size : 400,
        }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} alt="ccs logo home" src="/assets/images/ccslogo.png"/>
                </Link>
            </div>
        )
    }
}

export default HomeLogo;