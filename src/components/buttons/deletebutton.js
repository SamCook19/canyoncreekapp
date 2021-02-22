import React from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";

const db = firebase.default.firestore()

setArticle(data.docs.map(doc => {return {...doc.data(), id: doc.id}}))

const handleDelete = () => {
    db
    .collection( 'Articles' )
    .doc(setArticle)
    .delete()
}

function DeleteButton() {
    
    const { currentUser } = useAuth();
    
    return ( 
       currentUser ? (  <div className='action-icon'>
            <a onClick={handleDelete}>
           <FontAwesomeIcon icon="trash" />
           </a>
       </div> ) : null
        
    );
}

export default DeleteButton;