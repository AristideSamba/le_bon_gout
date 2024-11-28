const button = document.getElementById('myButton');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close'); // On cible l'élément avec la classe 'close'

button.addEventListener('click', () => {
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
});