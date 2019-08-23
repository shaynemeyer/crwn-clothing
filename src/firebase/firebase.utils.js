import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCf-MJxZCRy4Kw9YSYW6f71TZw5wJ2Zg1U',
  authDomain: 'crwn-db-2607c.firebaseapp.com',
  databaseURL: 'https://crwn-db-2607c.firebaseio.com',
  projectId: 'crwn-db-2607c',
  storageBucket: '',
  messagingSenderId: '187904081506',
  appId: '1:187904081506:web:859fec7ed4fce5ee'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
