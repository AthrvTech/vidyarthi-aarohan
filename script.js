const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && e.target !== menuToggle) {
    navLinks.classList.remove('active');
  }
});
