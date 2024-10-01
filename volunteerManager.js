import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { db } from './firebaseConfig.js';

async function registerVolunteer() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  try {
    const docRef = await addDoc(collection(db, 'volunteers'), {
      name: name,
      email: email,
      registeredAt: new Date()
    });

    console.log('Volunteer registered with ID: ', docRef.id);
    alert('Thank you for registering as a volunteer!');
  } catch (error) {
    console.error('Error registering volunteer: ', error);
    alert('There was an error. Please try again.');
  }
}

export { registerVolunteer };
