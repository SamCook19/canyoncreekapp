import React from 'react';

const HotlineButton = () => {
    return (
        <button className="button__hotline" onClick ={() => console.log('trying to call')}>
            Emergency Hotline 
            435-123-4567
        </button>
    )
}


export default HotlineButton;