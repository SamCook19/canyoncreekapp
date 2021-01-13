import React from 'react';

const EscapeButton = () => {
        return (
            <div>
            <a className="button__escape"  onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                    }}>
                Leave This Site
            </a>
            </div>
        );
    }


export default EscapeButton;