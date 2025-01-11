//your code here
// script.js
function changeImage() {
    const img = document.querySelector('.animal-image');
    img.src = 'https://example.com/another-elephant.jpg'; // Change to another image URL
}

// Add an event listener to change the image on click
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.animal-image');
    img.addEventListener('click', changeImage);
});