import { db, auth } from './firebaseConfig.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js';

function submitDisasterReport() {
  const disasterType = document.getElementById('disasterType').value;
  const disasterDescription = document.getElementById('disasterDescription').value;
  const disasterLocation = document.getElementById('disasterLocation').value;
  const disasterDate = document.getElementById('disasterDate').value;

  // Ensure a user is logged in before allowing them to submit a report
  onAuthStateChanged(auth, user => {
    if (user) {
      const reportData = {
        userId: user.uid,
        disasterType,
        disasterDescription,
        disasterLocation,
        disasterDate,
        reportedAt: new Date().toISOString()
      };

      // Store the report in Firestore under the 'disasterReports' collection
      setDoc(doc(db, 'disasterReports', `${user.uid}_${Date.now()}`), reportData)
        .then(() => {
          alert('Disaster report submitted successfully!');
          // Optionally, redirect to a confirmation or dashboard page
          window.location.href = 'confirmation.html';
        })
        .catch(error => {
          console.error('Error submitting disaster report:', error);
        });
    } else {
      alert('Please log in to submit a disaster report.');
    }
  });
}

export { submitDisasterReport };
