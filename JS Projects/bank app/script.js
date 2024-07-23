const registeredUsers = [];

function loadRegisteredUsers() {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
        registeredUsers.push(...JSON.parse(storedUsers));
    }
}

function saveRegisteredUsers() {
    try {
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        // Handle the error gracefully, such as showing an error message to the user.
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadRegisteredUsers();
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var keyShn = Math.floor(Math.random() * 1000000) + 1;
        var eid = keyShn.toString();
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var cpass = document.getElementById("cpass").value;
        var addr = document.getElementById("addr").value;
        var cno = document.getElementById("cno").value;

        if (pass !== cpass) {
            alert("Password and Confirm Password do not match.");
            return;
        }
        var user = {
            eid: eid,
            fname: fname,
            lname: lname,
            email: email,
            pass: pass,
            addr: addr,
            cno: cno
        };
        registeredUsers.push(user);



        document.getElementById("customerId").textContent = eid;
        document.getElementById("customerName").textContent = fname + " " + lname;
        document.getElementById("customerEmail").textContent = email;
        document.getElementById("mainId").style.display = "none";
        document.getElementById("acknowledgment").style.display = "block";
        saveRegisteredUsers();
    });

});


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submission prevented");

    var eid1 = document.getElementById("eid1").value;
    var pass1 = document.getElementById("pass1").value;


    var userExists = false;
    for (var i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].eid === eid1 && registeredUsers[i].pass === pass1) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert("Login successful!");
    }

    else {
        alert("Invalid credentials");
    }
});

function clickHandler() {
    window.location.href = 'login.html';
}