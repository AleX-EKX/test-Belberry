export function progress() {
    const swiper = new Swiper(".carouselSwiper", {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    
}