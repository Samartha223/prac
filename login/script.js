// Reference to the login form
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Valid phone numbers (demo purposes only)
const validPhoneNumbers = ["1234567890", "9876543210", "9998887776"];

// Handle form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const phone = document.getElementById("phone").value;

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Invalid phone number format. Please enter a 10-digit number.";
        return;
    }

    // Check if the phone number exists in the list
    if (validPhoneNumbers.includes(phone)) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Phone number not registered.";
    }
});
