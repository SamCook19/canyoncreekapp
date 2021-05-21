
import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button, NavLink} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class NewArticle extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                title: "",
                summary: "",
                content: "",
                createDate: new Date(),
                featuredImage: '',
                isPublished: false,
                lastModified: new Date(),
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

    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }

    onChangeArticleSummary = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                summary: value
            }
        })
    }

    onChangePublish = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                isPublished: value === 'True'
            }
        })
    }

    submitArticle = () => {
        const article = this.state.article
        db.collection("Articles")
            .add(
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
            storageRef.ref().child("Articles/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("Articles/" +fileName).getDownloadURL()

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
                    <h2 className='SectionTitle'>New Article</h2>
                    <FormGroup className='TitleForm'>
                        <Label className='TitleLabel'>
                            Title
                        </Label>
                        <input type ='text' className='articleTitle' placeholder=''
                        onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                        value={this.state.article.title}/>
                    </FormGroup>
                    <FormGroup className='SummaryForm'>
                        <Label className='SummaryLabel'>
                            Summary
                        </Label>
                        <input type ='text' className='articleTitle' placeholder=''
                        onChange={(e) => this.onChangeArticleSummary(e.target.value)}
                        value={this.state.article.summary}/>
                    </FormGroup>
                </Col>
                <div className='edit-blog-container'>
                    <FormGroup className='left-column'>
                        <ReactQuill 
                            ref={(el) => this.quill = el}
                            value={this.state.article.content}
                            onChange={(e) => this.onChangeArticleContent(e)}
                            modules={this.modules}
                            formats={this.formats}
                        />
                        <div className='spacer-newarticle'>

                        </div>
                        
                        <FormGroup className='publish-status-button'>
                                <Button 
                                onClick={(e) => this.submitArticle()}>
                                    Submit
                                </Button>
                                <NavLink href='/blog'>
                                <Button className='returntoblog'>
                                    Return to Blog
                                </Button>
                                </NavLink> 
                            </FormGroup>
                            
                        </FormGroup>
                <Col className='right-column'>
                        <CardHeader className="new-article-header">
                            Article Published?
                        </CardHeader>
                            <FormGroup className='publish-status'>
                                <Input type='select' name='publish' id='publish'
                                onChange={(e)=> this.onChangePublish(e.target.value)}>
                                    <option>False</option>
                                    <option>True</option>
                                </Input>
                            </FormGroup>
                            
                            <FormGroup className='featured-image'> Featured Image
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

export default NewArticle;