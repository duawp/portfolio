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

// Add hover event to each button (nav links and social media icons)
allButtons.forEach(function(button) {
    button.hasPlayed = false; // Set a flag for each button to track if sound has played
    
    button.onmouseover = function() {
        if (!button.hasPlayed) {   // Only play sound if it hasn't played yet for this button
            hoverSound.currentTime = 0; // Reset sound to the beginning
            hoverSound.play();
            button.hasPlayed = true; // Mark sound as played for this button
        }
    };

    button.onmouseout = function() {
        button.hasPlayed = false; // Reset the flag when the user moves the mouse away
    };
});
