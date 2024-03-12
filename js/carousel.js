const quote = document.querySelector(".boxBorder");
const coverContainter = document.querySelector(".about_main_section");
const numbers = document.querySelectorAll(".number");
const imageHolder = document.querySelector(".imageHolderp");
const teamCards = document.querySelectorAll(".card");

document.getElementById("getQuotebtn").addEventListener("click", function () {
  scrollInToSection(leadForm);
});

// const clientNo = document.getElementById("clientsNo");
// const projectsNo = document.getElementById("projectsNo");
// const leadsNo = document.getElementById("leadsNo");

// window.addEventListener('scroll', function(){hideQuote();})

const header = document.getElementById("header");
const scrollTop = document.querySelector(".scrollTop");
function hideHeader() {
  var vPosition = window.scrollY;
  if (vPosition > 20) {
    header.style.display = "none";
    scrollTop.style.display = "flex";
  } else {
    header.style.display = "flex";
    scrollTop.style.display = "none";
  }
}
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 10 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

function hideQuote() {
  var vPosition = window.scrollY;
  if (vPosition > 10) {
    quote.classList.remove("animated");
  } else {
    quote.classList.add("animated");
  }
}

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

// quote.addEventListener("DOMContentLoaded", function () {
//   quote.classList.add("animated");
//   new Chart("myChart", {
//     type: "pie",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           backgroundColor: barColors,
//           data: yValues,
//         },
//       ],
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Example",
//       },
//     },
//   });
// });

const getQuoteBtn = document.querySelector(".getQuoteBtn");
const leadForm = document.querySelector(".info_form");
window.addEventListener("scroll", function () {
  hideHeader();
  if (isInView(leadForm)) {
    leadForm.classList.add("animated");
  } else {
    leadForm.classList.remove("animated");
  }
});

function animateElementOnScroll() {
  teamCards.forEach((k) => {
    if (isInView(k)) {
      k.style.opacity = "1";
      //k.classList.add('animated');
    }
  });
}

window.addEventListener("scroll", function () {
  animateElementOnScroll();
});

const clientNo = document.getElementById("clientsNo");
const projectsNo = document.getElementById("projectsNo");
const leadsNo = document.getElementById("leadsNo");

const motbtn = document.getElementById("motbtn");
const motSection = document.querySelector(".meet-our-team");

function updateCounter(target, final) {
  // Get the current counter value
  // var targetNumber = final;
  // var currentCount = parseInt(target.innerText);

  // // Check if the current count is less than the target number
  // if (currentCount < targetNumber) {
  //     currentCount++;
  //     target.innerText = currentCount;
  //     setTimeout(function() {
  //         updateCounter(target, final);
  //     }, 60);
  // }
  const startTime = Date.now();
  const startCount = parseInt(target.innerText);
  const difference = final - startCount;

  function update() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < 1000) {
      const progress = (elapsedTime / 1000) * difference;
      target.innerText = Math.round(startCount + progress);
      requestAnimationFrame(update);
    } else {
      target.innerText = final;
    }
  }

  requestAnimationFrame(update);
}

function continousCounterUpdate(final) {
  const startTime = Date.now();
  const startCount = parseInt(target.innerText);
  const difference = final - startCount;
  function update() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < 1000) {
      const progress = (elapsedTime / 1000) * difference;
      clientNo.innerText = Math.round(startCount + progress);
      requestAnimationFrame(update);
    } else {
      clientNo.innerText = final;
    }
  }

  requestAnimationFrame(update);
}

const counter = () => {
  updateCounter(clientNo, 34);
  updateCounter(projectsNo, 1000);
  updateCounter(leadsNo, 10000);
  // console.log(numbers.length);
  // numbers.forEach(number => {
  //     number.getElementById()
  // });
};
document.addEventListener("scroll", function () {
  if (isInView(imageHolder)) {
    counter();
  }
});

function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

motbtn.addEventListener("click", function () {
  scrollToSection(motSection);
});

function scrollInToSection(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

slidein;
gsap.to(".element", {
  duration: 1,
  x: 100,
  opacity: 0.5,
  ease: "power2.inOut",
});

function showmodel() {
  document.getElementById(btn_box);
}

// const container = document.querySelector(".containerN");
// const cardWidth = document.querySelector(".cardN").offsetWidth;
// let currentIndex = 0;

// function scrollNext() {
//   currentIndex = Math.min(currentIndex + 1, container.children.length - 5);
//   updateTransform();
// }

// function scrollPrev() {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   updateTransform();
// }

// function updateTransform() {
//   container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
// }
//counter();
