function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation (you can add more checks)
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // Perform login logic (e.g., send data to the server)
        alert("Login successful!");
        // Redirect to the dashboard or another page if needed
    }
}
