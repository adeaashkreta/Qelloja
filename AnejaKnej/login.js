// Your JavaScript functions here

function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  // Check if both email and password are provided
  if (email !== "" && password !== "") {
    // Store the email in local storage to simulate login
    localStorage.setItem("loggedInEmail", email);
    
    // Add your authentication logic here (for demonstration, let's show an alert)
    alert("Login successful!");
    // Redirect to the index page or any other page as needed
    window.location.href = "index.html";
  } else {
    alert("Please enter both email and password.");
  }
}

function checkLoggedIn() {
  // Replace this with your actual authentication logic
  var storedEmail = localStorage.getItem("loggedInEmail");
  return !!storedEmail; // Returns true if an email is stored, indicating the user is logged in
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
  