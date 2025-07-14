
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.toggle-btn, .action-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.previousElementSibling;
                content.classList.toggle('expanded');
                button.textContent = content.classList.contains('expanded') ? 'Show Less' : 'Show More';
            });
        });
    });
