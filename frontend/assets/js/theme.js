// Global Theme Manager (Dark / Light Mode)
(function() {
    window.initTheme = function() {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    window.toggleTheme = function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = document.getElementById('global-theme-icon');
        if (icon) {
            icon.textContent = isDark ? 'light_mode' : 'dark_mode';
        }
    };

    window.initTheme();
})();
