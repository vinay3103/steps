// script.js
const stepsInput = document.getElementById('steps-input');
const stepsSubmit = document.getElementById('steps-submit');
const stepsDisplay = document.getElementById('steps-display');

const exerciseSelect = document.getElementById('exercise-select');
const exerciseDisplay = document.getElementById('exercise-display');

const reminderInput = document.getElementById('reminder-input');
const reminderSubmit = document.getElementById('reminder-submit');
const reminderList = document.getElementById('reminder-list');

let totalSteps = 0;
let isWalking = false;
let lastAcceleration = 0;

// Steps functionality
window.addEventListener('devicemotion', (event) => {
  const acceleration = event.acceleration;
  const x = acceleration.x;
  const y = acceleration.y;
  const z = acceleration.z;

  // Calculate the magnitude of the acceleration
  const magnitude = Math.sqrt(x * x + y * y + z * z);

  // Check if the user is walking
  if (magnitude > 2 && magnitude > lastAcceleration) {
    isWalking = true;
  } else {
    isWalking = false;
  }

  // Update the last acceleration value
  lastAcceleration = magnitude;

  // Count steps
  if (isWalking) {
    totalSteps++;
    stepsDisplay.textContent = `Total steps: ${totalSteps}`;
  }
});

// Exercise functionality
exerciseSelect.addEventListener('change', () => {
  const exercise = exerciseSelect.value;
  if (exercise) {
    exerciseDisplay.textContent = `You've done ${exercise} today!`;
  } else {
    exerciseDisplay.textContent = '';
  }
});

// Reminders functionality
reminderSubmit.addEventListener('click', () => {
  const reminder = reminderInput.value;
  if (reminder) {
    const reminderListItem = document.createElement('li');
    reminderListItem.textContent = reminder;
    reminderList.appendChild(reminderListItem);
    reminderInput.value = '';
  } else {
    alert('Please enter a reminder');
  }
});

// Initialize reminders list
const reminders = [
  'Take a walk',
  'Drink water',
  'Eat a healthy snack'
];
reminders.forEach((reminder) => {
  const reminderListItem = document.createElement('li');
  reminderListItem.textContent = reminder;
  reminderList.appendChild(reminderListItem);
});
