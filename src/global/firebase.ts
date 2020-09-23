import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'autoportfolio-me.firebaseapp.com',
  databaseURL: 'https://autoportfolio-me.firebaseio.com',
  projectId: 'autoportfolio-me',
  storageBucket: 'autoportfolio-me.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID?.split(':')[1],
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
