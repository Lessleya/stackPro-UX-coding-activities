// script.js
const button = document.getElementById('test-button');
const resultDiv = document.getElementById('result');

// Define the tasks for the user to perform
const tasks = [
  {
    title: 'Find the product page for the iPhone 12',
    successMessage: 'Great job! You found the product page for the iPhone 12.'
  },
  {
    title: 'Add the iPhone 12 to your shopping cart',
    successMessage: 'Nice work! You successfully added the iPhone 12 to your shopping cart.'
  },
  {
    title: 'Remove the iPhone 12 from your shopping cart',
    successMessage: 'Well done! You removed the iPhone 12 from your shopping cart.'
  }
];

function runTest() {
  // Clear previous results
  resultDiv.innerHTML = '';

  // Shuffle the tasks to be performed in a random order
  const shuffledTasks = shuffle(tasks);

  // Loop through each task and prompt the user to perform it
  for (let i = 0; i < shuffledTasks.length; i++) {
    const task = shuffledTasks[i];
    const success = confirm(task.title);

    // Display success message if the user successfully completed the task
    if (success) {
      const successMessage = document.createElement('p');
      successMessage.textContent = task.successMessage;
      resultDiv.appendChild(successMessage);
    }
  }
}

// Add event listener to the button to run the test when clicked
button.addEventListener('click', runTest);

// Helper function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
