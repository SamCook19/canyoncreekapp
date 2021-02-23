import React from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleHeroImgRedirect = () => {
    console.log("edit")
}

function HeroImgButton() {
    
    const { currentUser } = useAuth();
    
    return ( 
       currentUser ? (  <div className='action-icon'>
            <a onClick={handleHeroImgRedirect}>
           <FontAwesomeIcon icon="edit" />
           </a>

       </div> ) : null
        
    );
}

export default HeroImgButton;