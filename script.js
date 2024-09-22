// Get all anchor tags (links) inside <nav> and inside the social icons
var navButtons = document.querySelectorAll("nav a");
var socialButtons = document.querySelectorAll(".social-icons a");
var hoverSound = document.getElementById("hoverSound");

var logo = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        logo.style.top = '5px'; // Moves the logo up when scrolled
    } else {
        logo.style.top = '20px'; // Resets the position when near the top
    }
});

// Set the volume level (e.g., 0.2 for 20% volume)
hoverSound.volume = 0.2; // Adjust the volume here

// Combine both sets of buttons into one array
var allButtons = [...navButtons, ...socialButtons];
