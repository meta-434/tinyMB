import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBg53PUIpmx1HitoVlkuQMeOSCWg9yNOrE",
  authDomain: "tiny-mb.firebaseapp.com",
  databaseURL: "https://tiny-mb.firebaseio.com",
  projectId: "tiny-mb",
  storageBucket: "tiny-mb.appspot.com",
  messagingSenderId: "246445912343",
  appId: "1:246445912343:web:09a932fac8deefa6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
