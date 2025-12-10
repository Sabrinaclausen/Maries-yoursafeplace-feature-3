const slider = document.querySelector('.slider-event-images');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

const start = (e) => {
  isDown = true;
  isDragging = false;

  const x = e.pageX || e.touches?.[0].pageX;
  startX = x;
  scrollLeft = slider.scrollLeft;

  slider.classList.add('active');
}

const move = (e) => {
  if (!isDown) return;

  const x = e.pageX || e.touches?.[0].pageX;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;

  if (Math.abs(walk) > 2) {
    isDragging = true;
  }

  e.preventDefault();
}

const end = () => {
	isDown = false;
  slider.classList.remove('active');
};

slider.addEventListener('click', (e) => {
  if (isDragging) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// events
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start, { passive: false });

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move, { passive: false });

    slider.addEventListener('mouseleave', end);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchend', end);

