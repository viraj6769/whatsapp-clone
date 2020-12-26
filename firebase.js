import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCfUzMvxKcw4s30rWucD-zJx4tXeJLwsS4",
    authDomain: "whatsapp-a5440.firebaseapp.com",
    projectId: "whatsapp-a5440",
    storageBucket: "whatsapp-a5440.appspot.com",
    messagingSenderId: "662378993380",
    appId: "1:662378993380:web:13e009c7ac3ae38c1a3ef1",
    measurementId: "G-99YSJPEV63"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;