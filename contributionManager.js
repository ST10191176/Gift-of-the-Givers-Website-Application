import { getFirestore, collection, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { db } from './firebaseConfig.js';

async function getContributions() {
  const volunteerEmail = 'volunteer@example.com'; // Fetch email from auth
  const q = query(collection(db, 'contributions'), where('volunteerEmail', '==', volunteerEmail));

  const contributionsSnapshot = await getDocs(q);
  const contributions = contributionsSnapshot.docs.map(doc => doc.data());

  const contributionsTableBody = document.querySelector('#contributionsTable tbody');
  contributionsTableBody.innerHTML = '';

  contributions.forEach(contribution => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${contribution.taskName}</td>
      <td>${contribution.hours}</td>
      <td>${new Date(contribution.date.seconds * 1000).toLocaleString()}</td>
    `;
    contributionsTableBody.appendChild(row);
  });
}

export { getContributions };
