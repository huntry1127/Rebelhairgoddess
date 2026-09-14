// Replace this single URL when the client's GlossGenius booking page is ready.
const GLOSSGENIUS_BOOKING_URL = "https://www.glossgenius.com/";

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.href = GLOSSGENIUS_BOOKING_URL;
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
