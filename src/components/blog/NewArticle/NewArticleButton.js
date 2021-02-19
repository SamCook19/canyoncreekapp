import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'reactstrap';
import { useAuth } from '../../../contexts/AuthContext'


function NewArticleButton() {
    
    const { currentUser } = useAuth();
    
    return ( 
       currentUser ? (  
       
       <div className='action-icon'>
            <NavLink href='/newarticle'>
            <div className='spacer-newarticle'></div>
           <FontAwesomeIcon icon="edit"  /> New Article
           </NavLink>

       </div> ) : null
        
    );
}

export default NewArticleButton;