import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import * as firebase from 'firebase';

export default function ArticleDelete (props)  {

const db = firebase.default.firestore()

function removeArticle() {
    db.collection("Articles").doc(`${props.data.id}`)
        .delete()
        .then( res => {
            console.log(res)
        } )
        .catch( err => console.log(err))
}

  const { currentUser } = useAuth();

  return (
    currentUser ? (
        <button onClick={() => removeArticle(props.data.id)}>Delete</button>
        ): null 

  );
}