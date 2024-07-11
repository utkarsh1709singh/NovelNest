document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const mainContent = document.querySelector('main');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    });
});

function updateProgress(input, max) {
    const progressBar = document.getElementById(`progress-bar${input.id.replace('progress', '')}`);
    progressBar.value = input.value;
}
