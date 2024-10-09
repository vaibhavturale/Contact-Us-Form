document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Clear form fields
    document.getElementById('contactForm').reset();
});
