import React, { Component } from 'react';
import SimpleMenu from '../navigation/navigationmenu'


class Homepage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: true
        };
    }

    componentDidMount () {
        const currentRoute = this.props.location;
        if (currentRoute === '/') {
          this.setState({ isNavbarHidden: true });
        }
      }

    render() {
        const { isNavbarHidden } = this.state
        return (
            <div>
                <h1> This is the homepage </h1>
                <SimpleMenu />
            </div>
        );
    }
}

export default Homepage;