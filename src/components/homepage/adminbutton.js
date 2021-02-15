import React from 'react';
import { useAuth } from '../../contexts/AuthContext'

function AdminButton() {
    
    const { currentUser } = useAuth()
    
    return ( 
       currentUser ? <h1>hello world</h1> : null
        
    );
}

export default AdminButton;