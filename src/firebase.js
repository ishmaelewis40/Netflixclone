import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAnlm5MhPNr9lZRFwFG59XX7VSh_JKejus",
    authDomain: "netflixclone-e531e.firebaseapp.com",
    projectId: "netflixclone-e531e",
    storageBucket: "netflixclone-e531e.appspot.com",
    messagingSenderId: "795998185452",
    appId: "1:795998185452:web:439e58a78c26f6855942c9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth} 
  export default db;