document.querySelectorAll('.toggleBtn').forEach(btn => {
    btn.addEventListener('click', () => {
    const contentDiv = btn.closest('.content').querySelector('.hidden-content');
    contentDiv.classList.toggle('show');
    });
});
