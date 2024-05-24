const itemWidth = carouselItems[0].offsetWidth * 3; // Multiplicar por 3 para desplazar 3 imágenes a la vez

function moveCarousel(index) {
  carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextItem() {
  currentIndex = (currentIndex + 1) % itemCount;
  moveCarousel(currentIndex);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  moveCarousel(currentIndex);
});

nextBtn.addEventListener('click', nextItem);

setInterval(nextItem, 5000);