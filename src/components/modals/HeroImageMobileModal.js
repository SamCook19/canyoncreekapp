import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Container, FormGroup, Input, Button} from 'reactstrap';
import { useAuth } from '../../contexts/AuthContext';
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid'


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function MobileModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
    const { currentUser } = useAuth();
  
    return (
        currentUser ? (
      <div className='banner-button-container'>
        <button type="button" className='homepage-img-button' onClick={handleOpen}>
          Edit Mobile Image
        </button>
        <Modal
          open={open}
          onClose={handleClose}
        >
      <div className='HomepageEdit'>
      <HeroImageMobileEdit />
      </div>
        </Modal>
      </div> ) : null
    );
  }
  
  const db = firebase.default.firestore()
const storageRef = firebase.storage()

class HeroImageMobileEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                featuredImage: ''
            }
        }
    }

    submitEdit = async () => {
        const article = this.state.article
       await db.collection("HeroImageMobile").doc("8U5hPHeLJrHv9YYRLBeh")
            .update(
                article
                )
            
            .catch( err => console.log(err))
            location.reload()
    }

    uploadImageCallBack = (e) => {
        return new Promise(async(resolve, reject) => {
            const file = e.target.files[0]
            const fileName = uuidv4()
            storageRef.ref().child("HeroImageMobile/" + fileName).put(file)
            .then( async snapshot => {
                
                const downloadURL = await storageRef.ref().child("HeroImageMobile/" +fileName).getDownloadURL()

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
                            
                            <FormGroup className='edit-featured-image'> Featured Mobile Image
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