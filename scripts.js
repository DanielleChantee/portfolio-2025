document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#carousel");
  if (carouselElement) {
    var carousel = new Splide(carouselElement, {
      perPage: 4,
      rewind: true,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      breakpoints: {
        1410: {
          perPage: 3,
        },
        1100: {
          perPage: 2,
        },
        800: {
          perPage: 1,
        },
      },
    });

    carousel.mount();
  }

  var featuredClientsElement = document.querySelector("#featured-clients");
  if (featuredClientsElement) {
    var featuredClients = new Splide(featuredClientsElement, {
      perPage: 2,
      rewind: true,
      autoplay: true,
      interval: 4000,
      pauseOnHover: false,
      pauseOnFocus: false,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });

    featuredClients.mount();
  }
});
