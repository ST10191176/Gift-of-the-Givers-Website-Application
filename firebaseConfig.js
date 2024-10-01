import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwIuiEFQsNUmUMMmhj7cqpVHqwkV9ttY",
  authDomain: "disaster-manager-f2250.firebaseapp.com",
  projectId: "disaster-manager-f2250",
  storageBucket: "disaster-manager-f2250.appspot.com",
  messagingSenderId: "895810155115",
  appId: "1:895810155115:web:a2b3b39b3ba93bfa06772e"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
