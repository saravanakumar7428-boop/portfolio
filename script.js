
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// EDIT THESE VALUES when needed
const studentEmail = "saravanakumar7428@gmail.com";
const githubUsername = "saravanakumar7428-boop";

// Configure contact links
document.getElementById("emailLink").href =
  `mailto:${studentEmail}`;

document.getElementById("githubLink").href =
  `https://github.com/${githubUsername}`;
