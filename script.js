const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on click
menuToggle.addEventListener('click', () => {
  sidebar.style.right = '0';
});

// Hide sidebar when clicked outside
document.addEventListener('click', function (e) {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.style.right = '-250px';
  }
});
