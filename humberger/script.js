let isNavOpen = false;

function toggleNav() {
  const nav = document.getElementById("navs");

  if (isNavOpen) {
    nav.style.left = "-300px"; // Hide the menu
  } else {
    nav.style.left = "0"; // Show the menu
  }

  isNavOpen = !isNavOpen; // Toggle the state
}
