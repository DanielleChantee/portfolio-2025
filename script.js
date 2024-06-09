const target = document.getElementById("typewriter");
const cursor = document.getElementById("cursor");
const text = "Full Stack Developer";
let index = 0;
let isAdding = true;
let delay = 50; // Time in milliseconds

function typeEffect() {
  setTimeout(
    () => {
      target.innerText = text.slice(0, index);
      target.appendChild(cursor); // Keep the cursor at the end of the text
      if (isAdding) {
        if (index > text.length) {
          isAdding = false;
          delay = 750; // Wait longer before backspacing
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          delay = 250; // Wait before typing again
        } else {
          index--;
        }
      }
      typeEffect();
    },
    isAdding ? delay : delay / 2
  );
}

typeEffect();

/* Page Effects */
document.addEventListener("DOMContentLoaded", function () {
  var transitionWrapper = document.querySelector(".page-transition-wrapper");

  function triggerTransition(event) {
    event.preventDefault();
    var target = event.target.closest("a").getAttribute("href");

    // Activate the transition wrapper
    transitionWrapper.classList.add("active");

    // Wait for the transition to finish before redirecting
    setTimeout(function () {
      window.location.href = target;
    }, 500); // This should match the transition time

    // Deactivate the transition wrapper after the transition
    setTimeout(function () {
      transitionWrapper.classList.remove("active");
    }, 500);
  }

  // Attach the transition event to all navigation links, buttons, and the navbar-brand
  var navElements = document.querySelectorAll(
    "a.nav-link, a.btn, a.navbar-brand"
  );
  navElements.forEach(function (element) {
    element.addEventListener("click", triggerTransition);
  });
});

// Background Images//
