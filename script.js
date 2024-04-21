let slideIndex = 0;

function moveCarousel(n) {
  const slides = document.querySelectorAll('.product-item');
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

// Automatic carousel rotation
setInterval(() => {
  moveCarousel(1);
}, 5000); // Adjust timing as needed
