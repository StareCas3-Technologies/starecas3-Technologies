// StareCas3 Technologies — main.js

// --- Current year in footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// --- Mobile burger menu ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

burger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  burger.classList.toggle('open', menuOpen);
  burger.setAttribute('aria-expanded', String(menuOpen));
  mobileMenu.setAttribute('aria-hidden', String(!menuOpen));
});

// Close menu on mobile link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// --- Scroll reveal ---
const fadeEls = document.querySelectorAll(
  '.about__layout, .stats, .service-card, .value-item, .talent__layout, .contact__inner, .section-header'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Stagger service cards
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});

// Stagger value items
document.querySelectorAll('.value-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 80}ms`;
});
