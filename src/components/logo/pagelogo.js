import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageLogo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 100,
            width: this.props.size ? this.props.size : 200,
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

export default PageLogo;