import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaXXXXXXXXXXXXXXXXXXXXXXX',
//   authDomain: 'test-XXXX.firebaseapp.com',
//   databaseURL: 'https://test-XXXXXX.firebaseio.com',
//   projectId: 'test-XXXX',
//   storageBucket: 'test-XXXX.appspot.com',
//   messagingSenderId: 'XXXXXXX',
//   appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
// }; 

var firebaseConfig = {
  apiKey: "AIzaSyAhdXgLjcFAF6U-Yi1NT0Q-whIgUirLxy0",
  authDomain: "internship-53906.firebaseapp.com",
  projectId: "internship-53906",
  storageBucket: "internship-53906.appspot.com",
  messagingSenderId: "478329272646",
  appId: "1:478329272646:web:88269c0ad374e3fcdbcd47"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};