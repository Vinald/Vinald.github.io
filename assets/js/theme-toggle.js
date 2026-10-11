// Light / dark mode toggle - persisted in localStorage, applied via data-theme on <html>
(function () {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeToggleIcon');
    if (!toggle || !icon) return;

    function setIcon(theme) {
        icon.className = theme === 'light' ? 'bi bi-moon-stars' : 'bi bi-sun';
    }

    setIcon(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

    toggle.addEventListener('click', function () {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';

        if (next === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', next);
        setIcon(next);
    });
})();
