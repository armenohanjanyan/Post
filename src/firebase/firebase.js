import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTbknR-LKChB8NtRKt_DA__AqPwoo2Rg8",
    authDomain: "simple-30074.firebaseapp.com",
    databaseURL: "https://simple-30074.firebaseio.com",
    projectId: "simple-30074",
    storageBucket: "simple-30074.appspot.com",
    messagingSenderId: "280333928018"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};