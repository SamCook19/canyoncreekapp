import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import Image from 'react-bootstrap/Image';

const HeroImage = (props) => {
        return (
            <div className='hero-image-container'>
            <div className="hero-image-img">
            <Image
            top
            src={props.data.featuredImage}
            alt="Card Image"
            className="CardImage"
            fluid
            />
            </div>
            </div>
        );
    }

export default HeroImage;