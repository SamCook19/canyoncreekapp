import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()

class QuoteEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                firstslideFirst: "",
                firstslideSecond: "",
                firstslideThird: "",
                secondslideFirst: "",
                secondslideSecond: "",
                secondslideThird: "",
                thirdslideFirst: "",
                thirdslideSecond: "",
                thirdslideThird: ""
            }
        }
    }

    modules = {
        toolbar: {
            container: [
                [{'header': '1'}, {'header': '2'}, {'font': []}],
                [{size: []}],
                ['bold','italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean'], ['code-block']
            ],
        },
        clipboard: {
            matchvisual: false,
        },
    }

    formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block'
    ]

    onChangeFirstQuote = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                firstslideFirst: value
            }
        })
    }

    onChangeSecondQuote = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                firstslideSecond: value
            }
        })
    }
    onChangeThirdQuote = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                firstslideThird: value
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("Quotes").doc("Jmt5yQaJ7oA4iNXurUyf")
            .update(
                article
                )
            .then( window.location.reload() )
            .catch( err => console.log(err))
    }


    render() {
        return (
            <Container>
            
                
                    <h2 className='SectionTitle'>Edit Quotes</h2>
                   
                
                <div className='edit-article-container'>
                    
                    <FormGroup className='quote-row'> 
                    <div className='quote-edit-container'>
                    <div className='quote-label'>First Quote</div>
                        <ReactQuill className='edit-quill'
                            ref={(el) => this.quill = el}
                            value={this.state.article.firstslideFirst}
                            onChange={(e) => this.onChangeFirstQuote(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                        </div>
                        <div className='quote-edit-container'>
                        <div className='quote-label'>Second Quote</div>
                            <ReactQuill className='edit-quill'
                            
                            ref={(el) => this.quill = el}
                            value={this.state.article.firstslideSecond}
                            onChange={(e) => this.onChangeSecondQuote(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                        </div>
                        <div className='quote-edit-container'>
                            <div className='quote-label'>Third Quote</div>
                            <ReactQuill className='edit-quill'
                            ref={(el) => this.quill = el}
                            value={this.state.article.firstslideThird}
                            onChange={(e) => this.onChangeThirdQuote(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                        </div>
                        <FormGroup className='edit-status-button'>
                                <Button className='edit-submit'
                                onClick={(e) => this.submitEdit()}>
                                    Submit
                                </Button> 
                            </FormGroup>

                            
                        </FormGroup>
                        
                </div>
            
            </Container>
        );
    }
}

export default QuoteEdit;