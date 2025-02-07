document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const showPasswordCheckbox = document.getElementById('showLoginPassword');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission; // Prevent default form submission

            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            // Retrieve user data (mock example using localStorage)
            const savedUserData = JSON.parse(localStorage.getItem('userData'));

            if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
                alert('Login successful!');
                window.location.href = 'user_dashboard.html'; // Redirect on success
            } else {
                alert('Invalid username or password.'); // Alert on failure
            }
        });

    }
});
// login.js
document.addEventListener('DOMContentLoaded', function () {
    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('loginPassword');

    showPasswordCheckbox.addEventListener('change', function () {
        passwordInput.type = this.checked ? 'text' : 'password';
    });
});
document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Clear user data from local storage
    localStorage.removeItem('userData');

    // Optionally, you can also clear session storage if used
    // sessionStorage.clear();

    // Redirect to the login page or home page
    window.location.href = 'log_in.html'; // Change this to your login page URL
});
