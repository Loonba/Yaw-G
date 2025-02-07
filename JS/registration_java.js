document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const contactInput = document.getElementById('contact');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const showPasswordCheckbox = document.getElementById('showPassword');
  const fileInput = document.getElementById('profilePicture');
  const fileLabel = document.querySelector('.custom-file-label');

  const successMessageContainer = document.createElement('div');
  successMessageContainer.style.display = 'none';
  successMessageContainer.className = 'alert alert-success mt-3';
  form.prepend(successMessageContainer); 

  // File input label update on file change
  if (fileInput) {
      fileInput.addEventListener('change', function (e) {
          const fileName = e.target.files[0]?.name || 'Choose file';
          if (fileLabel) fileLabel.textContent = fileName;
      });
  }

  // Validate password with regex
  function validatePassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      return regex.test(password);
  }

  // Validate email format
  function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
  }

  // Check if passwords match
  function passwordsMatch(password, confirmPassword) {
      return password === confirmPassword;
  }

  // Clear input validation styles
  function clearValidation(input) {
      input.classList.remove('is-invalid');
  }

  // Display a success message
  function showSuccessMessage(message) {
      successMessageContainer.textContent = message;
      successMessageContainer.style.display = 'block';
  }

  // Save user data to local storage
  function saveUserData(username, email, contact, password) {
    const userData = { username, email, contact, password };
    console.log('Saving user data:', userData); // Add this line
    localStorage.setItem('userData', JSON.stringify(userData));
}

  // Form submission handler
  if (form) {
      form.addEventListener('submit', function (e) {
          e.preventDefault(); 

          const username = usernameInput.value.trim();
          const email = emailInput.value.trim();
          const contact = contactInput.value.trim().replace(/\D/g, '');
          const password = passwordInput.value;
          const confirmPassword = confirmPasswordInput.value;

          // Clear previous validation errors
          clearValidation(emailInput);
          clearValidation(contactInput);
          clearValidation(passwordInput);
          clearValidation(confirmPasswordInput);

          // Validate email
          if (!validateEmail(email)) {
              emailInput.classList.add('is-invalid');
              document.getElementById('emailError').textContent = 'Please enter a valid email address.';
              emailInput.focus();
              return;
          }

          // Validate contact number length
          if (contact.length < 10) {
              contactInput.classList.add('is-invalid');
              document.getElementById('contactError').textContent = 'Contact number must be at least 10 digits.';
              contactInput.focus();
              return;
          }

          // Validate password
          if (!validatePassword(password)) {
              passwordInput.classList.add('is-invalid');
              document.getElementById('passwordError').textContent =
                  'Password must be at least 12 characters, contain an uppercase letter, a number, and a special character.';
              passwordInput.focus();
              return;
          }

          // Check if passwords match
          if (!passwordsMatch(password, confirmPassword)) {
              confirmPasswordInput.classList.add('is-invalid');
              document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
              confirmPasswordInput.focus();
              return;
          }

          // Save user data and show success message
          saveUserData(username, email, contact, password);
          showSuccessMessage('Registration successful! Redirecting to dashboard...');

          // Redirect after 2 seconds
          setTimeout(function () {
              window.location.href = 'user_dashboard.html';
          }, 2000);

          // Reset form
          form.reset();
          if (fileLabel) fileLabel.textContent = 'Choose file';
      });
  }

  // Show/hide password functionality
  if (showPasswordCheckbox) {
      showPasswordCheckbox.addEventListener('change', function () {
          const type = this.checked ? 'text' : 'password';
          passwordInput.type = type;
          confirmPasswordInput.type = type;
      });
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
