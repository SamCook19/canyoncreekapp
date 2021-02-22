import React from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleEdit = () => {
    console.log('trying to edit')
}

function AdminButton() {
    
    const { currentUser } = useAuth();
    
    return ( 
       currentUser ? (  <div className='action-icon'>
            <a onClick={handleEdit}>
           <FontAwesomeIcon icon="edit" />
           </a>
       </div> ) : null
        
    );
}

export default AdminButton;