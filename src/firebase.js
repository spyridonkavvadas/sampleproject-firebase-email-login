import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDnEToCrFsfKvfQBpOfXODljT2BQeFhE_Q",
    authDomain: "sampleproject-auth-routing.firebaseapp.com",
    projectId: "sampleproject-auth-routing",
    storageBucket: "sampleproject-auth-routing.appspot.com",
    messagingSenderId: "1060936105750",
    appId: "1:1060936105750:web:9e4cb33c434dbbf5a15a37"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;