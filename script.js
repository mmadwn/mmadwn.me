const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burgerMenu.classList.toggle("toggle");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burgerMenu.classList.remove("toggle");
  });
});

// Hide maintenance notification
setTimeout(function () {
  document.getElementById("maintenanceNotification").style.display = "none";
}, 100);
