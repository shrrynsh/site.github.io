document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const bulbIcon = document.querySelector('.bulb-icon');
  
  // Get saved theme or default to dark
  let currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply theme on page load
  applyTheme(currentTheme);
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', function() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
  
  function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'light') {
      // Light theme colors
      root.style.setProperty('--nav-bg', '#ffffff');
      root.style.setProperty('--text-secondary', '#333333');
      root.style.setProperty('--text-primary', '#2c3e50');
      root.style.setProperty('--border', '#e0e0e0');
      root.style.setProperty('--accent', '#ff6b35');
      root.style.setProperty('--card-bg', '#f8f9fa');
      root.style.setProperty('--bg-dark', '#ffffff');
      
      // Update body background
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
      
      // Update bulb icon
      bulbIcon.textContent = '☀️';
      bulbIcon.style.filter = 'drop-shadow(0 0 8px #ff6b35)';
      
      // Set data attribute
      root.setAttribute('data-theme', 'light');
    } else {
      // Dark theme colors (default)
      root.style.setProperty('--nav-bg', '#2a2a2a');
      root.style.setProperty('--text-secondary', '#e4e4e4');
      root.style.setProperty('--text-primary', '#f4d17c');
      root.style.setProperty('--border', '#333');
      root.style.setProperty('--accent', '#ffc107');
      root.style.setProperty('--card-bg', '#2a2a2a');
      root.style.setProperty('--bg-dark', '#1a1a1a');
      
      // Update body background
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#e4e4e4';
      
      // Update bulb icon
      bulbIcon.textContent = '💡';
      bulbIcon.style.filter = 'drop-shadow(0 0 8px #ffc107)';
      
      // Set data attribute
      root.setAttribute('data-theme', 'dark');
    }
  }
});
