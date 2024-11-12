document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#carousel", {
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

  splide.mount();
});
