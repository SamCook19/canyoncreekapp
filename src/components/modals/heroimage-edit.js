
import React, { Component } from 'react';
import {Container, FormGroup, Input, Button} from 'reactstrap';
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'

const db = firebase.default.firestore()
const storageRef = firebase.storage()

class HeroImageEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                featuredImage: ''
            }
        }
    }

    submitEdit = () => {
        const article = this.state.article
        db.collection("HeroImage").doc("aPkcanFlDCYk43VLSfYK")
            .update(
                article
                )
            
            .catch( err => console.log(err))
            
    }

    uploadImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("HeroImage/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("HeroImage/" +fileName).getDownloadURL()

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
            
                        <FormGroup className='edit-status-button'>
                                <Button className='edit-submit'
                                onClick={(e) => this.submitEdit()}>
                                    Submit
                                </Button> 
                            </FormGroup>
                            
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
            </Container>
        );
    }
}

export default HeroImageEdit;