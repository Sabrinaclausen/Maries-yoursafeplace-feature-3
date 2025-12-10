// -- Kontakt-overlay JavaScript --

// Overlay-elementer
const kontaktOverlay = document.querySelector('.kontakt-overlay');
const closeOverlayButton = document.querySelector('.luk-kontakt-overlay');
const bookButton = document.querySelector('.book-button');

// Funktioner til åbning og lukning af popup
function openOverlay () {
  kontaktOverlay.style.display = 'flex';
  setTimeout(() => kontaktOverlay.classList.add('active'), 10);
}

function closeOverlay() {
  kontaktOverlay.classList.remove('active');
  setTimeout(() => kontaktOverlay.style.display = 'none', 300);
}

bookButton.addEventListener('click', openOverlay);
  closeOverlayButton.addEventListener('click', closeOverlay);

kontaktOverlay.addEventListener('click', (e) => {
    if (e.target === kontaktOverlay) {
      closeOverlay();
    }
});