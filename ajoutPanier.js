const button = document.getElementById('ajoutPanier');
const popup = document.getElementById('popupAjoutPanier');
const closeButton = document.querySelector('.close'); // On cible l'élément avec la classe 'close'

button.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});