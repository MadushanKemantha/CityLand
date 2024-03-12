// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel slider js
var owl = $(".project_carousel").owlCarousel({
  loop: true,
  margin: 15,
  center: true,
  startPosition: 2,
  autoplay: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  autoplayHoverPause: false,
  responsive: {
    0: {
      center: false,
      items: 1,
      margin: 0,
    },
    769: {
      items: 2,
    },
    992: {
      center: true,
      items: 3,
    },
  },
});

// owl.owlcarousel2_filter

$(".owl-filter-bar").on("click", ".item", function (e) {
  e.preventDefault();
  var $items = $(".owl-filter-bar a");
  var $item = $(this);
  var filter = $item.data("owl-filter");
  $items.removeClass("active");
  $item.addClass("active");
  owl.owlcarousel2_filter(filter);

  e.preventDefault();
});
/** google_map js **/
function myMap() {
  var dmsLatLang = new google.maps.LatLng(7.0929733808062, 79.99857287934792);
  var mapProp = {
    center: dmsLatLang,
    zoom: 18,
  };

  var marker = new google.maps.Marker({
    position: dmsLatLang,
    title: "Digital Marketing Stratergies",
  });
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  marker.setMap(map);
}

const servbtn = document.getElementById("servbtn");
const abtbtn = document.getElementById("abtbtn");
const prjbtn = document.getElementById("prjbtn");
const revbtn = document.getElementById("revbtn");
const ctusbtn = document.getElementById("ctusbtn");

const services = document.querySelector(".service_section");
const about = document.querySelector(".about_section");
const project = document.querySelector(".project_section");
const review = document.querySelector(".client_section");
const contact = document.querySelector(".contact_section");

const abtImage = document.getElementById("abtImage");

function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth" });
}
servbtn.addEventListener("click", function () {
  scrollToSection(services);
});
abtbtn.addEventListener("click", function () {
  scrollToSection(about);
});
prjbtn.addEventListener("click", function () {
  scrollToSection(project);
});
revbtn.addEventListener("click", function () {
  scrollToSection(review);
});
ctusbtn.addEventListener("click", function () {
  scrollToSection(contact);
});

const boxes = document.querySelectorAll(".box");

const isInView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 10 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

function animateElementOnScroll() {
  boxes.forEach((k) => {
    if (isInView(k)) {
      k.classList.add("animated");
    } else {
      k.classList.remove("animated");
    }
  });
}

window.addEventListener("scroll", function () {
  animateElementOnScroll();
});

const header = document.getElementById("header");
const scrollTop = document.querySelector(".scrollTop");
function hideHeader() {
  var vPosition = window.scrollY;
  if (vPosition > 10) {
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

const ctusbtns = document.querySelectorAll(".btn1");

const btns = document.querySelectorAll(".btn1");
ctusbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    scrollToSection(contact);
  });
});

function animateElementsOnScroll() {}

const getQuoteBtn = document.querySelector(".getQuoteBtn");
const leadForm = document.querySelector(".info_form");

const whyUsSection = document.querySelector(".why_us_section");
const imgBox = document.querySelector(".whyusimg");
const imgBox1 = document.querySelector(".whyusimg1");
const imgBox2 = document.querySelector(".whyusimg2");
const detailbox1 = document.querySelector(".detailbox1");
const detailbox2 = document.querySelector(".detailbox2");
const detailbox3 = document.querySelector(".detailbox3");

getQuoteBtn.addEventListener("click", function () {
  scrollToSection(leadForm);
});
abtImage.classList.add("animated");
window.addEventListener("scroll", function () {
  hideHeader();
  if (isInView(leadForm)) {
    leadForm.classList.add("animated");
  } else {
    leadForm.classList.remove("animated");
  }
  if (isInView(abtImage)) {
    abtImage.classList.add("animated");
  } else {
    abtImage.classList.remove("animated");
  }
  if (isInView(imgBox)) {
    imgBox.classList.add("animated");
  } else {
    imgBox.classList.remove("animated");
  }
  if (isInView(imgBox1)) {
    imgBox1.classList.add("animated");
  } else {
    imgBox1.classList.remove("animated");
  }
  if (isInView(imgBox2)) {
    imgBox2.classList.add("animated");
  } else {
    imgBox2.classList.remove("animated");
  }
  if (isInView(detailbox1)) {
    detailbox1.classList.add("animated");
  } else {
    detailbox1.classList.remove("animated");
  }
  if (isInView(detailbox2)) {
    detailbox2.classList.add("animated");
  } else {
    detailbox2.classList.remove("animated");
  }
  if (isInView(detailbox3)) {
    detailbox3.classList.add("animated");
  } else {
    detailbox3.classList.remove("animated");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var serviceBoxes = document.querySelectorAll(".service_box");
  serviceBoxes.forEach((serviceBox) => {
    var readMoreBtn = serviceBox.querySelector(".readMorebtn");
    var content = serviceBox.querySelector(".content");
    var bool = false;
    readMoreBtn.addEventListener("click", function () {
      console.log("click");
      if (bool) {
        content.style.maxHeight = "100px";
        content.style.overflow = "hidden";
        readMoreBtn.innerHTML = "Read More";
        bool = false;
      } else {
        bool = true;
        content.style.maxHeight = "200px";
        content.style.overflow = "auto";
        readMoreBtn.innerHTML = "Hide";
      }
    });
  });
});
