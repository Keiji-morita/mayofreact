import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyB2XAxIW01E_NSIwbgmfldNqQVwMJkUHdw',
  authDomain: 'reactsite-322c7.firebaseapp.com',
  databaseURL: 'https://reactsite-322c7-default-rtdb.firebaseio.com/',
  projectId: 'reactsite-322c7',
  storageBucket: 'reactsite-322c7.appspot.com',
  messagingSenderId: '527560685708'
}

firebase.initializeApp(config)

export default firebase