import React from 'react';

const HotlineButton = () => {
    return (
        <a className="button__hotline" onClick ={() => console.log('trying to call')}>
            <p> <strong>Hotline</strong> 435.233.5732 </p>
        </a>
    )
}


export default HotlineButton;