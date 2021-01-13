import React from 'react';

function CenterSlideshow() {
        return (
            <section className='slideshow'>
                <div className='slide-holder'>
                <section className="slide previous-slide">
                    <div className="slide-thumbnail"></div>
                    </section>
                    <section className="slide current-slide">
                    <div className="slide-thumbnail"></div>
                    </section>
                    <section className="slide next-slide">
                    <div className="slide-thumbnail"></div>
                    </section>
                </div>
                <div className='slideshow-controller'>

                </div>
            </section>
        );
}

export default CenterSlideshow;