import firebase from "firebase/app";
import 'firebase/database'
// import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:"https://firecontact-app-6d148-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
 
};

firebase.initializeApp(firebaseConfig)

export default firebase;


