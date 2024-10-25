const image = document.getElementById('image');
const textSections = document.querySelectorAll('.text-section');

window.addEventListener('scroll', () => {
  let currentImage = '';

  textSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentImage = section.getAttribute('data-image');
    }
  });

  if (currentImage) {
    image.src = `./img/section/${currentImage}`;
  }
});
