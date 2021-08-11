import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5V6zfOj9Cp0kHe4t3f7i1_JmwKaVDQhs",
    authDomain: "clone-774c9.firebaseapp.com",
    projectId: "clone-774c9",
    storageBucket: "clone-774c9.appspot.com",
    messagingSenderId: "762995798693",
    appId: "1:762995798693:web:f7dd7bf59130dc5dbf934c",
    measurementId: "G-C92PZ749XD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};