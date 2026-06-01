import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDJbsjigQyAv0wUoVLxIJl2qiL9HwU_ddo",
  authDomain: "reniforms-ad354.firebaseapp.com",
  projectId: "reniforms-ad354",
  storageBucket: "reniforms-ad354.firebasestorage.app",
  messagingSenderId: "538499424907",
  appId: "1:538499424907:web:bdac4ac09161a729eeaa8e"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();