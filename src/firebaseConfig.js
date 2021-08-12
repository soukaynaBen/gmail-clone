 import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyDmlgoxaJK3iJQeTFfJMwWWWq7HSsCZNkA",
    authDomain: "whatsapp-2-7bc96.firebaseapp.com",
    projectId: "whatsapp-2-7bc96",
    storageBucket: "whatsapp-2-7bc96.appspot.com",
    messagingSenderId: "1078322551177",
    appId: "1:1078322551177:web:376e4d9576be5408292958"
  };
  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);
  const db=app.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export  { db , auth , provider }
  