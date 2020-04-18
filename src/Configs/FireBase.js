import * as firebase from 'firebase';

// Required for side-effects
require('firebase/firestore');

// Initialize Firebase
var firebaseconfig = {
  apiKey: 'AIzaSyCMZMm30yQGt__yw4_Y3cHqLog2fVSwMvc',
  authDomain: 'pureco-limpeza.firebaseapp.com',
  databaseURL: 'https://pureco-limpeza.firebaseio.com',
  projectId: 'pureco-limpeza',
  storageBucket: 'pureco-limpeza.appspot.com',
  messagingSenderId: '825963876270',
  appId: '1:825963876270:web:2c6f43b07f7b72b48d023f',
  measurementId: 'G-FWMKQ6KL3D',
};

var FirebaseImpl;

if (!firebase.apps.length) {
  FirebaseImpl = firebase.initializeApp(firebaseconfig);
  FirebaseImpl.firestore().settings({});

  // passwordReset: email => {
  //     return firebase.auth().sendPasswordResetEmail(email)
  // }
}

export default FirebaseImpl;
