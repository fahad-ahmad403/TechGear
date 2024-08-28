var swiper1 = new Swiper('.swiper1', {

  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper1 .swiper-button-next1',
    prevEl: '.swiper1 .swiper-button-prev1',
  },
});

var swiper2 = new Swiper('.swiper2', {

  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper2 .swiper-button-next2',
    prevEl: '.swiper2 .swiper-button-prev2',
  },
  breakpoints: {
    880: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    571: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    180: {
      slidesPerView: 1,
    },
  }
});

const fa_heart = document.querySelectorAll(".fa-heart");
const text1 = document.querySelector(".heart_text1");
const text2 = document.querySelector(".heart_text2");
const fa_xmark = document.querySelector(".fa-xmark");

function displaytext(element) {

  element.classList.toggle("change");

  if (element.classList.contains("change")) {
    text1.classList.add("display_hearttext");
    text2.classList.remove("display_hearttext");
  }
  else {
    text1.classList.remove("display_hearttext");
    text2.classList.add("display_hearttext");
  }

  setTimeout(() => {
    text1.classList.remove("display_hearttext");
    text2.classList.remove("display_hearttext");
  }, 2000);
}

const navbar_search = document.querySelector(".navbar_search");

function open_searchbar() {
  navbar_search.classList.add("show_searchbar");
}

function hide_searchbar() {
  navbar_search.classList.remove("show_searchbar");
}

const sidebar = document.querySelector(".sidebar")

function open_sidebar() {
  sidebar.classList.add("close_sidebar");
}

function hide_sidebar() {
  sidebar.classList.remove("close_sidebar");
}