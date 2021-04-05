import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class HelpEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                content: "",
                featuredImage: '',
                topStatistic: '',
                bottomStatistic: ''
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

    onChangeTopStatistic = (valueTop) => {
        this.setState({
            article: {
                ...this.state.article,
                topStatistic: valueTop
            }
        })
    }

    onChangeBottomStatistic = (valueBottom) => {
        this.setState({
            article: {
                ...this.state.article,
                bottomStatistic: valueBottom
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("Prevention").doc("sxP1886kODbwa9A83Nnu")
            .update(
                article
                )
            .then( window.location.reload() )
            .catch( err => console.log(err))
    }

    uploadImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("Prevention/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("Prevention/" +fileName).getDownloadURL()

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
                            <h2 className='TopStatistic'>Change Top Statistic</h2>
                        <ReactQuill className='edit-quill-topstat'
                            ref0={(el) => this.quill = el}
                            valueTop={this.state.article.content}
                            onChange={(e) => this.onChangeTopStatistic(e)}
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
                                <h2 className='TopStatistic'>Change Bottom Statistic</h2>
                                <ReactQuill className='edit-quill-bottomstat'
                            ref0={(el) => this.quill = el}
                            valueBottom={this.state.article.content}
                            onChange={(e) => this.onChangeBottomStatistic(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                            </FormGroup>
                </Col>
                </div>
            </Row>
            </Container>
        );
    }
}

export default HelpEdit;