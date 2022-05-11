import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKpUZS1Oc9gaj5glZDkn85VWUXxmFoCfo",
    authDomain: "instagram-clone-eb68c.firebaseapp.com",
    projectId: "instagram-clone-eb68c",
    storageBucket: "instagram-clone-eb68c.appspot.com",
    messagingSenderId: "769064192327",
    appId: "1:769064192327:web:c115b2c1c89a39c6006462",
    measurementId: "G-LYPW305Q1W"
  };

  firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore()
  const auth= firebase.auth()
  const storage=firebase.storage()
  
  export {db, auth ,storage};