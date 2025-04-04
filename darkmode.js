// Get the toggle element
const toggleSwitch = document.getElementById('toggleDarkMode');

// Set the toggle to match the default mode (dark-mode is set by default)
toggleSwitch.checked = document.body.classList.contains('dark-mode');

// Listen for toggle changes
toggleSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});