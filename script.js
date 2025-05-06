const form = document.getElementById('subscriptionForm');
const summaryDiv = document.getElementById('summary');

const validateText = (value) => /^[a-zA-Z]{2,}$/.test(value);
const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const packageValue = document.getElementById('package').value;
  const subscribed = document.getElementById('subscribe').checked;

  const validations = [
    { valid: validateText(firstName), message: 'First name must have at least 2 letters' },
    { valid: validateText(lastName), message: 'Last name must have at least 2 letters' },
    { valid: validateEmail(email), message: 'Invalid email format' },
    { valid: packageValue !== '', message: 'Please select a package' },
    { valid: subscribed, message: 'You must subscribe to continue' },
  ];

  const errors = validations.filter(v => !v.valid).map(v => v.message);
  
  summaryDiv.innerHTML = '';
  if (errors.length > 0) {
    summaryDiv.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>`;
  } else {
    form.style.display = 'none';
    summaryDiv.innerHTML = `
      <p>Thank you, ${firstName} ${lastName}, for subscribing!</p>
      <p>Your email ${email} is registered with our ${packageValue} package.</p>
    `;
  }
});