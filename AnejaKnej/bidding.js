// script.js

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
    window.location.href = 'login.html';
  
    // Prevent the form from submitting (we handle it manually)
    event.preventDefault();
  }
  