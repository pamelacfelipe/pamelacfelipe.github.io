const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
const systemTheme = getSystemTheme();
const currentTheme = savedTheme || systemTheme;

document.body.setAttribute('data-theme', currentTheme);
themeToggle.addEventListener('click', handleClickBtnToggle);
themeToggle.addEventListener('keydown', handleKeydownBtnToggle);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChangeSystemTheme);

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function handleClickBtnToggle() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function handleChangeSystemTheme(e){
    if (!localStorage.getItem('theme')) {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newSystemTheme);
    }
}

function handleKeydownBtnToggle(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClickBtnToggle();
    }
}