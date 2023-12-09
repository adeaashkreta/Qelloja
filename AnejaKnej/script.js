function redirectToLogin() {
  // You can replace the URL with the actual login page URL
  window.location.href = "path/to/login.html";
}

function checkLogin() {
  var isLoggedIn = /* Check if the user is logged in (replace with your logic) */ false;

  if (isLoggedIn) {
    // User is already logged in, proceed with the bidding logic
    alert("You are logged in. Proceed with bidding logic.");
    // Add your bidding logic here
  } else {
    // User is not logged in, redirect to the login page
    window.location.href = "login.html";
  }
}
function checkLogin() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    // User is logged in, proceed with the bidding logic
    alert("You are logged in. Proceed with bidding logic.");
    // Add your bidding logic here
  } else {
    // User is not logged in, redirect to the login page
    window.location.href = "login.html";
  }
}

// script.js

function login(event) {
  // Get user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple authentication logic (replace this with server-side authentication)
  if (authenticateUser(email, password)) {
    // Redirect to the bidding page after successful login
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }

  // Prevent the form from submitting (we handle it manually)
  event.preventDefault();
}

// Replace this function with your actual authentication logic
function authenticateUser(email, password) {
  // Hardcoded credentials for demonstration (replace with your actual user database lookup)
  const validEmail = 'user@example.com';
  const validPassword = 'password123';

  // Check if the provided credentials match the valid credentials
  return email === validEmail && password === validPassword;
}





function submitBid(event) {
  // Get the bid amount from the form
  const bidAmount = parseFloat(document.getElementById('bidAmount').value);

  // Validate the bid amount (you can add more validation logic)
  if (isNaN(bidAmount) || bidAmount <= 0) {
    alert('Please enter a valid bid amount.');
    event.preventDefault();
    return;
  }

  // Process the bid (you can send it to the server, update the UI, etc.)
  alert('Bid placed successfully!');

  // For demonstration, let's redirect back to the products page after bidding
  window.location.href = 'products.html';

  // Prevent the form from submitting (we handle it manually)
  event.preventDefault();
}


  
  