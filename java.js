document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberMeCheckbox.checked;

        if (validateForm(username, password)) {
            console.log('Form submitted');
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Remember Me:', rememberMe);

            // Simulate successful login (replace with actual login logic)
            alert('Login successful');
            form.reset();  // Clear the form after submission
        }
    });

    function validateForm(username, password) {
        if (username === '') {
            alert('Please enter your username.');
            return false;
        }

        if (password === '') {
            alert('Please enter your password.');
            return false;
        }

        // Additional validation rules can be added here
        return true;
    }
});
