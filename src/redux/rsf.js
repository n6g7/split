import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwTc7dxZeKPlyswwLUf2VcsydmmvM5MvY',
  authDomain: 'split-9c056.firebaseapp.com',
  databaseURL: 'https://split-9c056.firebaseio.com',
  projectId: 'split-9c056',
  storageBucket: 'split-9c056.appspot.com',
  messagingSenderId: '492776632907'
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export const authProvider = new firebase.auth.GoogleAuthProvider()

export default rsf
