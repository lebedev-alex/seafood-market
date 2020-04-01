import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCy35Xb-4HZhHdusHWb47gRxB_5HbAH6yY',
  authDomain: 'catch-of-the-day-41078.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-41078.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
