$(document).ready($ => {
  // Owl Carousel
  // $('.owl-carousel').owlCarousel();
  $('.owl-carousel').owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ['&#xf007', '&#xf006'],
    autoplay: true,
    autoplayTimeout: 4000,
  });
});
