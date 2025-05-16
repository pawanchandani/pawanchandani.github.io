document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-list').classList.toggle('show');
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});