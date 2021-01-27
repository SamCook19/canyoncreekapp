import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDib58YJZavHg93G8Lh8xgSmXHTbMpXY84",
  authDomain: "canyoncreekservices-3de87.firebaseapp.com",
  databaseURL: "https://canyoncreekservices-3de87-default-rtdb.firebaseio.com",
  projectId: "canyoncreekservices-3de87",
  storageBucket: "canyoncreekservices-3de87.appspot.com",
  messagingSenderId: "640204766768",
  appId: "1:640204766768:web:4b710f46d9e7504d00f7f5",
  measurementId: "G-4KT3997K3S"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase