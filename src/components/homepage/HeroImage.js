import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';

const HeroImage = (props) => {
        return (
            <div className='hero-image-container'>
            <div className="hero-image-img">
            <CardImg
            top
            src={props.data.featuredImage}
            alt="Card Image"
            className="CardImage"
            />
            </div>
            </div>
        );
    }

export default HeroImage;