import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class VolunteerEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                topContent: "",
                bottomContent: "",
                featuredImage: ""
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

    onChangeTopContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                topContent: value
            }
        })
    }

    onChangeBottomContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                bottomContent: value
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("Volunteer").doc("EBWqelbNqnyier35pTga")
            .update(
                article
                )
            .then( res => {
                console.log(res)
            } )
            .catch( err => console.log(err))
    }

    uploadImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("Volunteer/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("Volunteer/" +fileName).getDownloadURL()

                resolve({
                    success: true,
                    data: {link: downloadURL}
                })
            })
        })
    }


    render() {
        return (
            <Container>
            <Row>
                <Col >
                    <h2 className='SectionTitle'>Edit Page</h2>
                   
                </Col>
                <div className='edit-article-container'>
                    <FormGroup className='left-column'> Change Top and Bottom Content
                        <ReactQuill className='edit-quill'
                            ref={(el) => this.quill = el}
                            value={this.state.article.topContent}
                            onChange={(e) => this.onChangeTopContent(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />

                            <ReactQuill className='edit-quill'
                            ref={(el) => this.quill = el}
                            value={this.state.article.bottomContent}
                            onChange={(e) => this.onChangeBottomContent(e)}
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
                <Col className='right-column'>
                            
                            <FormGroup className='edit-featured-image'> Featured Image
                                <Input type="file" accept='image/*' className="image-uploader"
                                onChange={async (e) => {
                                    const uploadState = await this.uploadImageCallBack(e)
                                    if(uploadState.success) {
                                        this.setState({
                                            hasFeaturedImage: true,
                                            article: {
                                                ...this.state.article,
                                                featuredImage: uploadState.data.link
                                            }
                                        })
                                    }
                                }}> 
                                </Input>
                                <div className='image'>
                                {
                                    this.state.hasFeaturedImage ?
                                        <img src={this.state.article.featuredImage} /> : ''
                                }</div>
                            </FormGroup>
                </Col>
                </div>
            </Row>
            </Container>
        );
    }
}

export default VolunteerEdit;