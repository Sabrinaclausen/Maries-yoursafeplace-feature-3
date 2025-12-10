const slider = document.querySelector('.slider-event-images');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;
let velocity = 0;
let lastX = 0;
let momentumFrame;

const start = (e) => {
  cancelAnimationFrame(momentumFrame);
  isDown = true;
  isDragging = false;

  const x = e.pageX || e.touches?.[0].pageX;
  startX = x;
  scrollLeft = slider.scrollLeft;
  lastX = x;

  slider.classList.add('active');
}

const move = (e) => {
  if (!isDown) return;

  const x = e.pageX || e.touches?.[0].pageX;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;

   velocity = lastX - x;
  lastX = x;

  if (Math.abs(walk) > 2) isDragging = true;

  e.preventDefault();
}

const end = () => {
  isDown = false;
  slider.classList.remove('active');

  if (isDragging) {
    momentumScroll();
  }
}

const momentumScroll = () => {
  if (Math.abs(velocity) < 0.1) return;

  slider.scrollLeft += velocity;
  velocity *= 0.95;
  momentumFrame = requestAnimationFrame(momentumScroll);
}

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

