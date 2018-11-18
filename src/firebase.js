import firebase from 'firebase';
import { secrets } from './secrets.json';

firebase.initializeApp(secrets);

const database = firebase.database();

export default database;