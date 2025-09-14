// header sticky
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

// hero section slider
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      animateSlideText(this.slides[this.activeIndex]);
    },
    slideChangeTransitionStart: function () {
      resetSlideText(this.slides);
    },
    slideChangeTransitionEnd: function () {
      animateSlideText(this.slides[this.activeIndex]);
    },
  },
});

// Function to reset all slide texts
function resetSlideText(slides) {
  slides.forEach((slide) => {
    const text = slide.querySelector(".slide-text");
    if (text) text.classList.remove("active");
  });
}

// Function to animate active slide text
function animateSlideText(slide) {
  const text = slide.querySelector(".slide-text");
  if (text) text.classList.add("active");
}

// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down 200px
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to top on click
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
