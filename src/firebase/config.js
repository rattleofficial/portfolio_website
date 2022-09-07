import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBooog4zNPTSSnvcm2gMre_pZjbgPkcCQg",
    authDomain: "feedback-bd1c5.firebaseapp.com",
    projectId: "feedback-bd1c5",
    storageBucket: "feedback-bd1c5.appspot.com",
    messagingSenderId: "872504176900",
    appId: "1:872504176900:web:bc9e5fd8cf468776312051",
    measurementId: "G-3MXBHQ7N2L"
  };
  

export const Firebase=firebase.initializeApp(firebaseConfig);
