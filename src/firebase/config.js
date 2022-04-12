import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAhJ3xPbFiTu5jn-cmSjQg67b-fpZXzynU",
    authDomain: "mymoney-finance-tracker.firebaseapp.com",
    projectId: "mymoney-finance-tracker",
    storageBucket: "mymoney-finance-tracker.appspot.com",
    messagingSenderId: "282939232035",
    appId: "1:282939232035:web:518992bd667b22b562c696"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }