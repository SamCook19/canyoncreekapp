import React from 'react';

const EscapeButton = () => {
        return (
            <div>
            <a className="button__escape"  onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                    }}>
                Escape Site Here
            </a>
            </div>
        );
    }


export default EscapeButton;