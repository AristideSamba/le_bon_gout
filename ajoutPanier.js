const images = document.querySelectorAll('.img-menu figure');
const popup = document.getElementById('popupAjoutPanier');
const popupContent = popup.querySelector('p');
const popupImage = popup.querySelector('img:not(.close)'); // Sélectionne la deuxième image (l'image du burger)
const closeButton = popup.querySelector('.close');
// Initialiser l'image avec la valeur de data-src
popupImage.src = popupImage.dataset.src;

images.forEach(figure => {
  figure.addEventListener('click', () => {
    const burgerName = figure.dataset.burgerName;
    const burgerPrice = figure.dataset.burgerPrice;
    const burgerImage = figure.dataset.burgerImage;

    popupContent.textContent = `${burgerName}  ${burgerPrice}€`;
    popupImage.src = burgerImage;

    popup.classList.remove('hidden');
  });
});

closeButton.addEventListener('click', () => {
  popup.classList.add('hidden');
});