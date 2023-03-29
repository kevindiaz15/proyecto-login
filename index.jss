const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  if (username === 'myusername' && password === 'mypassword') {
    // Store the username in localStorage
    localStorage.setItem('username', username);
    alert('Logged in successfully!');
  } else {
    alert('Incorrect username or password.');
  }
});

const loggedInUser = localStorage.getItem('username');
if (loggedInUser) {
  alert(`Welcome back, ${loggedInUser}!`);
}
