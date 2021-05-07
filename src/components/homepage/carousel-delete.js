import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as firebase from 'firebase';

export default function RemoveImage (props)  {

const db = firebase.default.firestore()

function removeImage() {
    db.collection("Carousel").doc(`${props.data.id}`)
        .delete()
        
            .catch( err => console.log(err))
            
}

  const { currentUser } = useAuth();

  return (
    currentUser ? (
        <button onClick={() => removeImage(props.data.id)}>Delete Image and Quote</button>
        ): null 

  );
}