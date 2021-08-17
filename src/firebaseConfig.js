 import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "***************************************",
    authDomain: "********************************",
    projectId: "***************",
    storageBucket: "*******************",
    messagingSenderId: "**********",
    appId: "********************************"
  };
  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);
  const db=app.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export  { db , auth , provider }
  
