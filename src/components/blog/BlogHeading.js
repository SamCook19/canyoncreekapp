import React, { Component } from 'react';
import NewArticleButton from './NewArticle/NewArticleButton'

class BlogHeading extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
             isOpen: !this.state.isOpen
        })
    }



    render() {
        return (
            <div className = "new-article-button">
                        <NewArticleButton />
            </div>
        );
    }
}

export default BlogHeading;