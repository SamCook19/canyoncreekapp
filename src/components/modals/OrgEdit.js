import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class OrgEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                title: "",
                content: "",
                link: "",
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

    onChangeArticleTitle = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                title: value
            }
        })
    }

    onChangeArticleLink = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                link: value
            }
        })
    }

    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("OrganizationalLeadershipDescription").doc("Ya5wYo0Jct1zwyeRq9bX")
            .update(
                article
                )
            
            .catch( err => console.log(err))
            
    }

   


    render() {
        return (
            <Container>
            <Row>
                <Col >
                    <h2 className='SectionTitle'>Edit Article</h2>
                    <FormGroup className='TitleForm'>
                        <Label className='TitleLabel'>
                            <span style={{color: "white"}}>Title</span>
                        </Label>
                        <input type ='text' className='editArticleTitle' placeholder=''
                        onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                        value={this.state.article.title}/>
                    </FormGroup>
                   
                </Col>
                <div className='edit-article-container'>
                    <FormGroup className='left-column'>
                        <ReactQuill className='edit-quill'
                            ref0={(el) => this.quill = el}
                            value={this.state.article.content}
                            onChange={(e) => this.onChangeArticleContent(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                        

                        
                        
                        <FormGroup className='edit-status-button'>
                                <Button className='edit-submit'
                                onClick={(e) => this.submitEdit()}>
                                    Submit
                                </Button> 
                            </FormGroup>
                            
                        </FormGroup>
                
                
                </div>
            </Row>
            </Container>
        );
    }
}

export default OrgEdit;