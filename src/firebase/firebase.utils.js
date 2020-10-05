import firebase from 'firebase/app'
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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;