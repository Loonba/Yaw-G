document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from local storage
    const savedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists
    if (savedUserData && savedUserData.username) {
        // Display the username in the welcome message
        document.getElementById('usernameDisplay').textContent = savedUserData.username;
    } else {
        // Handle case where user data is not found (optional)
        document.getElementById('usernameDisplay').textContent = 'Guest';
    }
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
// user_dashboard.js

// Display the username on the welcome message
document.addEventListener('DOMContentLoaded', function () {
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
    
    if (savedUserData && savedUserData.username) {
        document.getElementById('usernameDisplay').textContent = savedUserData.username;
    } else {
        document.getElementById('usernameDisplay').textContent = 'Guest';
    }

    // Check if user is logged in
    if (!savedUserData) {
        // Disable the Edit Settings button
        const editButton = document.getElementById('editSettingsButton');
        editButton.classList.add('disabled'); // Add Bootstrap disabled class
        editButton.onclick = function(e) {
            e.preventDefault(); // Prevent the default action
            alert('You must be logged in to edit your account settings.');
            // Optionally, redirect to login page
            window.location.href = 'log_in.html'; // Change this to your login page URL
        };
    }
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Clear user data from local storage
    localStorage.removeItem('userData');

    // Redirect to the login page or home page
    window.location.href = 'log_in.html'; // Change this to your login page URL
});