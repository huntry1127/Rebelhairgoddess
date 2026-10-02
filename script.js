// Replace once the client's direct GlossGenius booking URL is confirmed.
const GLOSSGENIUS_BOOKING_URL = "https://www.glossgenius.com/";
document.querySelectorAll('[data-booking-link]').forEach(link => { link.href = GLOSSGENIUS_BOOKING_URL; });
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
function setMenu(open) {
  button?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  const label = button?.querySelector('.sr-only');
  if (label) label.textContent = open ? 'Close menu' : 'Open menu';
}
button?.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { const open = button?.getAttribute('aria-expanded') === 'true'; setMenu(false); if (open) button.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
