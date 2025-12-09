const slider = document.querySelector('.slider-event-images');
let isDown = false;
let startX;
let scrollLeft;

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = (e.pageX || e.touches?.[0].pageX) - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = (e.pageX || e.touches?.[0].pageX) - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
}

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start, { passive: false });

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move, { passive: false });

    slider.addEventListener('mouseleave', end);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchend', end);
})();
