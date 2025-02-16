// Detect and apply the correct theme before React initializes
(function () {
  const userPref = localStorage.getItem('themeMode'); // Get saved preference
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const theme = userPref || (systemPrefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.backgroundColor =
    theme === 'dark' ? '#121212' : '#ffffff';

  // Ensure the loader matches the correct theme
  document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.borderColor = theme === 'dark' ? '#ffffff' : '#000000'; // Light or dark theme
      loader.style.borderTopColor = 'transparent'; // Keep animation visible
    }
  });

  // Remove preloader once React is ready
  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 500);
    }
  });
})();
