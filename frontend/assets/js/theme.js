// Ee script website lo Light Mode mariyu Dark Mode theme toggle ni manage chesthundi

(function() {
    // LocalStorage nundi user theme preference check chesthunnam (default: dark mode)
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default dark theme setting
    const activeTheme = storedTheme || (systemPrefersDark ? 'dark' : 'dark');

    if (activeTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// User theme switch button press chesinappudu Run avuthundi
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

window.toggleTheme = toggleTheme;
