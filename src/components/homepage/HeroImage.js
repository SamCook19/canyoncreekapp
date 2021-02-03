import React, { Component } from 'react';

class HeroImage extends Component {
    render() {
        const { hero_image_url } = this.props.item;
        return (
            <div className="hero-image-img"
            style={{backgroundImage: "url(" + hero_image_url + ")"
        }}
            />
        );
    }
}

export default HeroImage;