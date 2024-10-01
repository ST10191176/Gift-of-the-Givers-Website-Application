import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
  } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js';
  import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
  import { auth, db } from './firebaseConfig.js';

  // Register function
  function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User registered:', user);

        // Add user to Firestore
        return setDoc(doc(db, 'users', user.uid), { email: user.email });
      })
      .then(() => {
        // Log the user in automatically after registration
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        // Redirect to disaster-report page after successful login
        window.location.href = 'disaster-report.html';
      })
      .catch(error => {
        console.error('Error registering or logging in user:', error.message);
      });
  }
    // Login function with debug logs
  function login() {
    console.log('Login button clicked'); // Log when the button is clicked
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    console.log(`Attempting login with email: ${email}`); // Log email
  
    // Firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User logged in:', user); // Log user data
  
        // Redirect to disaster-report page after successful login
        window.location.href = 'disaster-report.html';
      })
      .catch(error => {
        console.error('Error logging in:', error.message); // Log any errors
      });
  }
  
  export { login };
  