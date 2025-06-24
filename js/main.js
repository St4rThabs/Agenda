import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


document.addEventListener('DOMContentLoaded', () => {
  const myCarousel = document.querySelector('#carouselExample');

  if (!myCarousel) {
    console.error('Carrossel não encontrado!');
    return;
  }

  // Inicializa o carrossel (se não estiver inicializado)
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(myCarousel);

  // Adiciona o listener para o evento 'slide.bs.carousel'
  myCarousel.addEventListener('slide.bs.carousel', event => {
    console.log('O carrossel vai trocar para o slide:', event.to);
    // Aqui você pode colocar o código que quiser executar antes do slide trocar
  });
});
