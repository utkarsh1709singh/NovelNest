document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        main.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        main.classList.add('active');
    }
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        main.classList.remove('active');
    } else {
        sidebar.classList.add('active');
        main.classList.add('active');
    }
});




