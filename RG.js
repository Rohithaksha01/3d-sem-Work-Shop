// Smooth scrolling functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Show a confirmation message
        alert(`Thank you, ${name}! Your message has been sent.\n\nDetails:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Clear the form
        document.getElementById('contactForm').reset();
    }
});
