import React from 'react';

const EscapeButton = () => {
        return (
            <div>
            <button className="button__escape"  onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                    }}>
                Escape
            </button>
            </div>
        );
    }


export default EscapeButton;