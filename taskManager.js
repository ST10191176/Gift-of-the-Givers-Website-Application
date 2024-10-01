import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';
import { db } from './firebaseConfig.js';

async function getTasks() {
  const tasksSnapshot = await getDocs(collection(db, 'tasks'));
  const tasks = tasksSnapshot.docs.map(doc => doc.data());

  const tasksTableBody = document.querySelector('#tasksTable tbody');
  tasksTableBody.innerHTML = '';

  tasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.name}</td>
      <td>${task.description}</td>
      <td>${new Date(task.date.seconds * 1000).toLocaleString()}</td>
      <td>${task.location}</td>
    `;
    tasksTableBody.appendChild(row);
  });
}

export { getTasks };
