document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const bulbIcon = document.querySelector('.bulb-icon');
  
  // Get saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateBulbIcon(savedTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add click animation
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeToggle.style.transform = '';
    }, 150);
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateBulbIcon(newTheme);
  });
  
  function updateBulbIcon(theme) {
    if (theme === 'light') {
      bulbIcon.textContent = '🌞';
      bulbIcon.style.filter = 'drop-shadow(0 0 8px #ff6b35)';
    } else {
      bulbIcon.textContent = '💡';
      bulbIcon.style.filter = 'drop-shadow(0 0 8px #ffc107)';
    }
  }
});
