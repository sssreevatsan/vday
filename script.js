const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const yaayImage = document.querySelector('.yaay-image');

// Handle YES button click
yesButton.addEventListener('click', () => {
    yaayImage.classList.remove('hidden');
});

// Handle NO button hover
noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
