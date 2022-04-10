import firebase 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhJ3xPbFiTu5jn-cmSjQg67b-fpZXzynU",
    authDomain: "mymoney-finance-tracker.firebaseapp.com",
    projectId: "mymoney-finance-tracker",
    storageBucket: "mymoney-finance-tracker.appspot.com",
    messagingSenderId: "282939232035",
    appId: "1:282939232035:web:518992bd667b22b562c696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//init service
const projectFirestore = firebase.firestore()

export { projectFirestore }