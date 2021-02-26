import React, {Component} from 'react';
import { CardImg, CardTitle } from 'reactstrap';;
import * as firebase from 'firebase'

const db = firebase.default.firestore();

class OrganizationContent extends Component {
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
        }else{
            this.getArticleByID(this.props.match.param.id)
        }
    }

    getArticleByID = (aid) => {
        db.collection('OrganizationalLeadershipDescription')
        .doc(aid)
        .get()
        .then(doc => {
            if(doc.exists){
                this.setState({
                    article: doc.data()
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            } else {
                this.props.history.push({pathname:'/'})
            }
        })
    }



    render() {
        console.log("article: ", this.state.article)
        
        if(this.state.isLoaded) {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                        {props.data.content}
                    </div>
                </div>   
                </div>
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

export default OrganizationContent;