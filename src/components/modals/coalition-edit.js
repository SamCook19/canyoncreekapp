import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class CoalitionEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                title: "",
                content: "",
                featuredImage: "",
                coalitionImage: ""
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

    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }

    onChangeArticleTitle = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                title: value
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("Coalition").doc("bg8ThwHltIHtLobs0eO1")
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
            storageRef.ref().child("Coalition/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("Coalition/" +fileName).getDownloadURL()

                resolve({
                    success: true,
                    data: {link: downloadURL}
                })
            })
        })
    }

    uploadCoalitionImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("CoalitionImage/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("CoalitionImage/" +fileName).getDownloadURL()

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
                <Col className='right-column'>
                            
                            <FormGroup className='edit-featured-image'> Featured Image
                                <Input type="file" accept='image/*' className="image-uploader"
                                onChange={async (e) => {
                                    const uploadState = await this.uploadCoalitionImageCallBack(e)
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
                            <FormGroup className='edit-coalition-image'> Coalition Image
                                <Input type="file" accept='image/*' className="image-uploader"
                                onChange={async (e) => {
                                    const uploadState = await this.uploadCoalitionImageCallBack(e)
                                    if(uploadState.success) {
                                        this.setState({
                                            hasCoalitionImage: true,
                                            article: {
                                                ...this.state.article,
                                                coalitionImage: uploadState.data.link
                                            }
                                        })
                                    }
                                }}> 
                                </Input>
                                <div className='coalition-image'>
                                {
                                    this.state.hasCoalitionImage ?
                                        <img src={this.state.article.coalitionImage} /> : ''
                                }</div>
                            </FormGroup>
                </Col>
                </div>
            </Row>
            </Container>
        );
    }
}

export default CoalitionEdit;