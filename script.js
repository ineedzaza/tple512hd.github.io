// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'You clicked the button! 🎉';
    });
});
