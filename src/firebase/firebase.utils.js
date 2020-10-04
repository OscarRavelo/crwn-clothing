import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


 const config = {
    apiKey: "AIzaSyAfOrE22w1o1ngZxPzU9nnpoBx3xaV9HSc",
    authDomain: "crwn-db-e9acc.firebaseapp.com",
    databaseURL: "https://crwn-db-e9acc.firebaseio.com",
    projectId: "crwn-db-e9acc",
    storageBucket: "crwn-db-e9acc.appspot.com",
    messagingSenderId: "404190086392",
    appId: "1:404190086392:web:7ed49a8306144c68a1670d",
    measurementId: "G-39DGY8778L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;