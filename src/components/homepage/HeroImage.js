import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import MediaQuery from 'react-responsive';


const HeroImage = (props) => {
        return (
            <div className='hero-image-container'>
            <div className="hero-image-img">
            <img
            top
            src={props.data.featuredImage}
            alt="Card Image"
            className="CardImage"
            style={{objectFit:'cover', width: '300', height: '300'}}
            />
            </div>
            </div>
        );
    }

export default HeroImage;