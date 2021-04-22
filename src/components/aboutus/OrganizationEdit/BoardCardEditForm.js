import React, { Component } from 'react';
import {Container, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class BoardCardEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                boardSubtitle: "",
                boardname: "",
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

    onChangeName = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                boardname: value
            }
        })
    }

    onChangeSubtitle = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                boardSubtitle: value
            }
        })
    }


    submitEdit = () => {
        const article = this.state.article
        db.collection("OrganizationalLeadershipBD").doc(`${this.props.data.id}`)
            .update(
                article
                )
            .then( res => {
                console.log(res)
            } )
            .catch( err => console.log(err))
            .then( window.location.reload() )
    }

    uploadImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("Board/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("Board/" +fileName).getDownloadURL()

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
                    <h2 className='SectionTitle'>Edit Card</h2>
                    <FormGroup className='TitleForm'>
                        <Label className='TitleLabel'>
                            <span style={{color: "white"}}>Name</span>
                        </Label>
                        <input type ='text' className='editArticleTitle' placeholder=''
                        onChange={(e) => this.onChangeName(e.target.value)}
                        value={this.state.article.boardname}/>
                    </FormGroup>
                   
                </Col>
                <div className='edit-article-container'>
                    <FormGroup className='left-column'> Change Subtitle
                        <ReactQuill className='edit-quill'
                            ref={(el) => this.quill = el}
                            value={this.state.article.boardSubtitle}
                            onChange={(e) => this.onChangeSubtitle(e)}
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

export default BoardCardEdit;