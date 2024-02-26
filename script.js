// script.js

// Define the functions
function toggleAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// You can add more functions or variables as needed
// For example:
function greetUser() {
    alert("Hello, User!");
}
