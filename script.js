document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelector('input[name="hobby"]:checked');
    const namePattern = /^[A-Za-z\s]{3,}$/;
    
    if (!namePattern.test(name)) {
        alert('Name must contain only letters and spaces and be at least 3 characters long.');
        event.preventDefault();
        return;
    }

    if (email.trim() === "") {
        alert("Please enter a valid email.");
        event.preventDefault();
        return;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        event.preventDefault();
        return;
    }

    if (address.trim() === "") {
        alert("Please enter your address.");
        event.preventDefault();
        return;
    }

    if (!genderSelected) {
        alert("Please select a gender.");
        event.preventDefault();
        return;
    }

    if (!hobbies) {
        alert("Please select a hobby.");
        event.preventDefault();
        return;
    }
});
