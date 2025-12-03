// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAT_8BYUfGbf5TL2gYk7kU2OlkdPJJDsK0",
  authDomain: "admin-panel-4237d.firebaseapp.com",
  projectId: "admin-panel-4237d",
  storageBucket: "admin-panel-4237d.appspot.com",
  messagingSenderId: "581017219442",
  appId: "1:581017219442:web:c9743c5ec53b5c55a2edeb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore & Auth
const db = firebase.firestore();
const auth = firebase.auth();
