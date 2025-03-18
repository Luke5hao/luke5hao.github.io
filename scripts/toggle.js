document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const toggleLabel = document.querySelector('.toggle-label');

  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.classList.add(savedTheme + '-mode');

  // Set the initial emoji based on the saved theme
  toggleLabel.textContent = savedTheme === 'dark' ? '🌜' : '🌞';

  // Toggle the theme on checkbox change
  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      toggleLabel.textContent = '🌜'; // Change emoji to moon
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      toggleLabel.textContent = '🌞'; // Change emoji to sun
    }
  });

  // Set the checkbox state based on the saved theme
  toggle.checked = savedTheme === 'dark';
});