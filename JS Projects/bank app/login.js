document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var eid = document.getElementById("eid").value;
    var pass = document.getElementById("pass").value;

    // Retrieve registration credentials from the registration page
    var registeredEid = localStorage.getItem("eid");
    var registeredPass = localStorage.getItem("pass");

    if (eid !== registeredEid || pass !== registeredPass) {
        alert("Employee ID or Password is incorrect.");
    } else {
        alert("Login successful!");
        // Redirect to a dashboard or homepage
        window.location.href = "dashboard.html";
    }
});
