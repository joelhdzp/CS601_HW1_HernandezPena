/*
CS601 - Assignment 1 - JS
Created by Joel Hernandez Pena
*/

// Defining constants to DOM elements: form and summary
const form = document.getElementById('interactiveWebForm');
const summaryDiv = document.getElementById('summary');

// Validating helpers using RegEx: text and email
const validateText = (value) => /^[a-zA-Z]{2,}$/.test(value);
const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Function to validate form fields and manipulate DOM
 */
function handleFormSubmit(event) {
  event.preventDefault();

  // Capturing field constant values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const packageValue = document.getElementById('package').value;
  const subscribed = document.getElementById('subscribe').checked;

  // Creating validation rules: each error has its own message
  const validations = [
    { valid: validateText(firstName), message: 'First name must have at least 2 letters' },
    { valid: validateText(lastName), message: 'Last name must have at least 2 letters' },
    { valid: validateEmail(email), message: 'Invalid email format' },
    { valid: packageValue !== '', message: 'Please select a package' },
    { valid: subscribed, message: 'You must subscribe to continue' },
  ];

  // Filtering errors with filter() function
  const errors = validations.filter(v => !v.valid).map(v => v.message);

  // Reseting summary display
  summaryDiv.innerHTML = '';

  // Evaluating errors in the list before inserting into the summary
  if (errors.length > 0) {
    // Displaying validation errors as a list with map() function
    summaryDiv.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>`;
  } else {
    // Cleaning up form and displaying success message
    form.style.display = 'none';
    document.querySelectorAll('h1, p').forEach(el => el.remove());

    // Displaying expected message
    summaryDiv.innerHTML = `
      <p>Thank you, ${firstName} ${lastName}, for subscribing!</p>
      <p>Your email ${email} is registered with our ${packageValue} package.</p>
    `;
  }
}

// Attaching the form handler function to the submit event
form.addEventListener('submit', handleFormSubmit);