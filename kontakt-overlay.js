// Popup

// Popup-elementer
const popupOverlay = document.getElementById('kontakt-overlay');
const backBtn = document.getElementById('buy-button');

function fadeSwapButton(newSrc) {
  // Fade out
  backBtn.style.opacity = 0;

  setTimeout(() => {
    backBtn.src = newSrc;
    backBtn.style.opacity = 1;
  }, 800); // Hvor lang tid vores transition skal være
}

// Funktioner til åbning og lukning af popup
function openPopup() {
  popupOverlay.style.display = 'flex';
  setTimeout(() => popupOverlay.classList.add('active'), 10); // Til CSS transition

  popupVideo.currentTime = 0;
  popupVideo.play();

  console.log('Popup opened!'); // Debugging log

  // Skifter luk-knap til tilbage-knap
  fadeSwapButton('images/tilbage-knap.svg');
  backBtn.onclick = closePopup;
}

function closePopup() {
  popupOverlay.classList.remove('active');
  setTimeout(() => popupOverlay.style.display = 'none', 500); // Venter på CSS transition
  
  popupVideo.pause();
  popupVideo.currentTime = 0; // Nulstiller video til starten

  console.log('Popup closed!'); // Debugging log

  // Skifter tilbage-knap til luk-knap
  fadeSwapButton('images/luk-knap.svg');
}

backBtn.addEventListener('click', () => {
  // Hvis popup er aktiv, lukkes den
  if (popupOverlay.classList.contains('active')) {
    closePopup();
  } 
  // Hvis popup ikke er aktiv, gå tilbage til startskærmen
  else {
    // Fade skærm ind
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "index.html"; // går tilbage til startskærmen
    }, 800);
  }
});

// --- Event listeners ---
wangVideo.addEventListener('click', openPopup);
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) closePopup();
});

// Debugging log - kunne ikke finde ud af hvilket element der var i vejen for popup-knappen
document.addEventListener('click', e => console.log('Clicked:', e.target));