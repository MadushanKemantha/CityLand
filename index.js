AOS.init({
  duration: 1000,
});

AOS.init({
  disable: function () {
    var maxWidth = 600;
    return window.innerWidth < maxWidth;
  },
});
// Initialization for ES Users
// import { Carousel, initMDB } from "mdb-ui-kit";

// initMDB({ Carousel });

// Initialize the carousel
// document.addEventListener("DOMContentLoaded", function () {
//   var myCarousel = new mdb.Carousel(
//     document.getElementById("carouselMaterialStyle")
//   );
// });

// const imageUrls = [
//   "images/background1.jpg",
//   "images/background2.jpg",
//   "images/background3.jpg",
// ];

// // console.log("abc");

// const coverElement = document.getElementById("coverElement");

// function changeCover() {
//   const randomIndex = Math.floor(Math.random() * imageUrls.length);
//   const randomImageUrl = imageUrls[randomIndex];
//   // coverElement.style.background = `url("${randomImageUrl}")`;
//   coverElement.style.background = `linear-gradient(rgba(102,63,147,0.3), rgba(0,0,0,0.3)), url("${randomImageUrl}")`;
// }

setInterval(changeCover, 5000);

changeCover();

const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 10 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToSection();

// const crds = document.querySelectorAll(".card");
// crds.forEach();

document.addEventListener("DOMContentLoaded", function () {
  const carouselSlides = document.querySelectorAll(" .item");
  let currentSlide = 0;

  function showSlide(slideIndex) {
    carouselSlides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
    });

    currentSlide = slideIndex;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % carouselSlides.length);
  }

  function previousSlide() {
    showSlide(
      (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
    );
  }

  document
    .querySelector(".project_carousel .carousel-button_previous")
    .addEventListener("click", previousSlide);
  document
    .querySelector(".project_carousel .carousel-button_next")
    .addEventListener("click", nextSlide);

  showSlide(0);
});

//process-section
