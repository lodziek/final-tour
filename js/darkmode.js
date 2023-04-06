// --------------- Dark Mode ------------------

var darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.dark');

const enableDarkMode = () => {
    document.body.classList.add('dark-it');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-it');
    localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener('click', () => {
    var darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})