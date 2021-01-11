import React from 'react';

const HotlineButton = () => {
    return (
        <a className="button__hotline" onClick ={() => console.log('trying to call')}>
            Hotline 435.233.5732
        </a>
    )
}


export default HotlineButton;