import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';

class Blog extends Component {
    render() {
        return (
            <div>
                This is the blog
                <NavigationComponent />
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
        );
    }
}

export default Blog;