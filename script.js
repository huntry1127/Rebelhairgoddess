document.documentElement.classList.add("js");

// Replace this single URL when the client's GlossGenius booking page is ready.
const GLOSSGENIUS_BOOKING_URL = "https://www.glossgenius.com/";

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.href = GLOSSGENIUS_BOOKING_URL;
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const menuLabel = menuButton?.querySelector(".sr-only");

function setMenu(open) {
  menuButton?.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  if (menuLabel) menuLabel.textContent = open ? "Close menu" : "Open menu";
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((section) => section.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach((section) => observer.observe(section));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
