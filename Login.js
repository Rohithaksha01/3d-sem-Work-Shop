// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simple validation (ensure all fields are filled)
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
    } else if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
    } else {
        // Show a confirmation message
        alert(`Sign up successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        
        // Reset the form
        document.getElementById('signupForm').reset();
    }
});

// Social buttons can be enhanced with real APIs for Google/Facebook login.
document.querySelector('.google-btn').addEventListener('click', function() {
    alert('Google Sign-in clicked (implement actual API integration).');
});

document.querySelector('.facebook-btn').addEventListener('click', function() {
    alert('Facebook Sign-in clicked (implement actual API integration).');
});
