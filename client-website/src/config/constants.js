import firebase from 'firebase'

const config = {
 apiKey: "AIzaSyCm-BMV-9av6hj7d133Kis6ESHn1dwfbbQ",
    authDomain: "qpwebsite-b831f.firebaseapp.com",
    databaseURL: "https://qpwebsite-b831f.firebaseio.com",
    projectId: "qpwebsite-b831f",
    storageBucket: "",
    messagingSenderId: "1089922348909"
  };

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth