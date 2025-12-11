const galleriOverlay = document.querySelector('.galleri-overlay');
const galleriOverlayImg = document.querySelector('.galleri-overlay-img');
const galleriOverlayCaption = document.querySelector('.galleri-overlay-img-caption');
const galleriCloseOverlayButton = document.querySelector('.galleri-overlay-close-button');
const galleriImages = document.querySelectorAll('.galleri-img');

// Åbn galleri overlay ved klik
galleriImages.forEach((img) => {
    img.addEventListener('click', () => {
        galleriOverlayImg.src = img.src;
        galleriOverlayCaption.textContent = img.dataset.caption || '';
        galleriOverlay.style.display = 'flex';
        setTimeout(() => galleriOverlay.classList.add('active'), 10);
    });
});

// Luk overlay ved at klikke udenfor billedet eller på lukkeknappen
galleriOverlay.addEventListener('click', (e) => {
    if (e.target === galleriOverlay || e.target.closest('.galleri-overlay-close-button')) {
        galleriOverlay.classList.remove('active');
        setTimeout(() => galleriOverlay.style.display = 'none', 300);
    }  
});


