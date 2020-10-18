const toggleButton = document.getElementById('toggler'),
    themeMode = document.querySelector('.switch p'),
    body = document.body;

toggleButton.addEventListener('click', (e) => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeMode.textContent = "Light Mode";

    } else {
        body.classList.replace('light', 'dark');
        themeMode.textContent = "Dark Mode";
    }
})
