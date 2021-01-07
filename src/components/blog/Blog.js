import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';

class Blog extends Component {
    render() {
        return (
            <div>
                This is the blog
                <NavigationComponent />
            </div>
        );
    }
}

export default Blog;