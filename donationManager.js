import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { db } from './firebaseConfig.js';

async function donateResource() {
  const resourceType = document.getElementById('resourceType').value;
  const quantity = document.getElementById('quantity').value;
  const notes = document.getElementById('notes').value;

  try {
    // Add the donation to the Firestore database
    const docRef = await addDoc(collection(db, 'donations'), {
      resourceType: resourceType,
      quantity: quantity,
      notes: notes,
      timestamp: new Date(),
    });

    console.log('Donation recorded with ID: ', docRef.id);
    alert('Thank you for your donation!');

  } catch (error) {
    console.error('Error adding donation: ', error);
    alert('There was an error submitting your donation. Please try again.');
  }
}

export { donateResource };
