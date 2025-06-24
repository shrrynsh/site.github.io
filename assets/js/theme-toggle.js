document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const bulbIcon = document.querySelector('.bulb-icon');
  
  if (!themeToggle || !bulbIcon) {
    console.error('Theme toggle elements not found');
    return;
  }
  
  // Get saved theme or default to dark
  let currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply theme on page load
  applyTheme(currentTheme);
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
  
  function applyTheme(theme) {
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'light') {
      // Light theme
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#333333';
      
      // Update navigation
      const nav = document.querySelector('.main-nav');
      if (nav) {
        nav.style.background = '#ffffff';
        nav.style.borderBottom = '1px solid #e0e0e0';
      }
      
      // Update nav links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.style.color = '#333333';
      });
      
      // Update bulb icon
      bulbIcon.textContent = '☀️';
      
      // Set data attribute
      root.setAttribute('data-theme', 'light');
    } else {
      // Dark theme
      body.style.backgroundColor = '#1a1a1a';
      body.style.color = '#e4e4e4';
      
      // Update navigation
      const nav = document.querySelector('.main-nav');
      if (nav) {
        nav.style.background = '#2a2a2a';
        nav.style.borderBottom = '1px solid #333';
      }
      
      // Update nav links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.style.color = '#ffc107';
      });
      
      // Update bulb icon
      bulbIcon.textContent = '💡';
      
      // Set data attribute
      root.setAttribute('data-theme', 'dark');
    }
  }
});
