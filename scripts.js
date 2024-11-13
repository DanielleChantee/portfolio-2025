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
    carouselElement.classList.add("is-initialized");
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
    featuredClientsElement.classList.add("is-initialized");
  }

  // Services marquee
  var marqueeElement = document.querySelector("#services-marquee .marquee");
  if (marqueeElement) {
    var textContent = marqueeElement.innerHTML;

    // Duplicate text content to fill the viewport twice
    while (marqueeElement.offsetWidth < window.innerWidth * 2) {
      marqueeElement.innerHTML += textContent;
    }

    marqueeElement.style.animation = "scroll-right 20s linear infinite";
  }
});
