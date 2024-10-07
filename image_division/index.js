// Get the elements
const divElement = document.getElementById('hoverDiv');
const imageElement = document.getElementById('hoverImage');

// When the mouse enters the div
divElement.addEventListener('mouseenter', function() {
    imageElement.style.zIndex = '1';       // Bring image to the front
    imageElement.style.opacity = '1';      // Make image visible
    imageElement.style.transitionDelay = '0s'; // Remove delay from z-index change
});

// When the mouse leaves the div
divElement.addEventListener('mouseleave', function() {
    imageElement.style.zIndex = '-1';      // Send image to the back
    imageElement.style.opacity = '0';      // Make image invisible
    imageElement.style.transitionDelay = '0.5s'; // Delay z-index change for smooth fade-out
});
