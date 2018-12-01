// import * as firebase from 'firebase';
import firebase from 'firebase';
import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const favesRef = databaseRef.child('faves');