import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import parse from 'html-react-parser';
import {Container} from 'reactstrap';


class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state={
            article: {},
            isLoaded: false
        }

        console.log(this.props)
    }

    componentDidMount() {
        if(this.props.location.state !== 'undefined') {
            if(this.props.location.state.hasOwnProperty('article')){
                this.setState({
                    article: this.props.location.state.article
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            }
        }
    }

    timeStampToString = () => {
        const date = new Date()
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    }

    render() {
        if(this.state.isLoaded) {
            return (
                <Container>
                <div className='Article'>
                    <div className='ImageContainer'>
                        <img className='Image' 
                            src={this.state.article.featuredImage}
                            alt={this.state.article.title}
                        />
                        <div className='ArticleInfo'>
                            <h1 className='Title'>
                                {this.state.article.title}
                            </h1>
                            <div className='Date'>
                                {this.timeStampToString(this.state.article.lastModified)}
                            </div>
                        </div>
                    </div>
                    <div className='ArticleMain'>
                        {parse(this.state.article.content)}
                    </div>
                </div>
                </Container>
            )
        }else{
        return (
            <div>
                loading...
            </div>
        );
        }
    }
}

export default withRouter(ViewArticle);