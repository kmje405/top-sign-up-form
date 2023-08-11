document.querySelector(".button").addEventListener("click", function () {
  validateForm();
});

function validateForm() {
  // Get all the input fields
  var firstName = document.getElementById("first-name");
  var lastName = document.getElementById("last-name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone-number");
  var password = document.getElementById("psw");
  var confirmPassword = document.getElementById("psw-confirm");

  // Validation functions for each field
  validateInput(firstName, "first-name-error");
  validateInput(lastName, "last-name-error");
  validateEmail(email, "email-error");
  validatePhone(phone, "phone-number-error");
  validatePassword(password, "password-error");
  validateConfirmPassword(password, confirmPassword, "confirm-password-error");
}

function validateInput(input, errorId) {
  var errorMessage = document.getElementById(errorId);
  if (input.value.trim() === "") {
    input.classList.add("input-error");
    errorMessage.textContent = "This field is required.";
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorMessage.style.display = "none";
  }
}

function validateEmail(input, errorId) {
  var errorMessage = document.getElementById(errorId);
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(input.value.trim())) {
    input.classList.add("input-error");
    errorMessage.textContent = "Please enter a valid email.";
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorMessage.style.display = "none";
  }
}

function validatePhone(input, errorId) {
  var errorMessage = document.getElementById(errorId);
  var regex = /^[0-9]{10}$/;
  if (!regex.test(input.value.trim())) {
    input.classList.add("input-error");
    errorMessage.textContent = "Please enter a valid phone number.";
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorMessage.style.display = "none";
  }
}

function validatePassword(input, errorId) {
  var errorMessage = document.getElementById(errorId);
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!regex.test(input.value)) {
    input.classList.add("input-error");
    errorMessage.textContent = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorMessage.style.display = "none";
  }
}

function validateConfirmPassword(password, confirmPassword, errorId) {
  var errorMessage = document.getElementById(errorId);
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("input-error");
    errorMessage.textContent = "Passwords do not match.";
    errorMessage.style.display = "block";
  } else {
    confirmPassword.classList.remove("input-error");
    errorMessage.style.display = "none";
  }
}
