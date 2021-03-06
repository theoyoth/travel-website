// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ====== TOGGLE MENU NAV MOBILE
// toggle open button
const toggle = document.getElementById("toggle");
const navMenu = document.getElementById("nav-menu");
const navItem = document.querySelectorAll(
  ".header .nav-container .nav-menu .nav-list .nav-item"
);
if (toggle) {
  toggle.addEventListener("click", () => {
    navMenu.classList.add("active");
  });
  // remove nav-menu when click nav-item is clicked
  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// toggle close button
const btnClose = document.getElementById("nav-close");
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
}

// // if the navbar more than 200px
function scrollHeader() {
  const header = document.getElementById("header");
  if (window.pageYOffset >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// ====ANIMATION GSAP
let tl = gsap.timeline();
// ================ header ================ //
tl.to(".logo-link", { y: 0, duration: 0.5, opacity: 1 });
tl.to(".nav-item", { y: 0, opacity: 1, duration: 1, stagger: 0.2 });

// scroll header . to change background color of header
// gsap.to(".header", {
//   scrollTrigger: {
//     trigger: ".home",
//     start: "center 10%",
//     toggleClass: { targets: "header", className: "scroll-header" },
//   },
// });

// ================ home page ================ //
tl.to(".title", { x: 0, opacity: 1 });
tl.to(".btn-explore", { opacity: 1 });
tl.to(".five-maldives-beaches", { x: 0, opacity: 1 }, "-=1");
tl.to(".social-media", { opacity: 1 }, "-=0.3");

// ================ about page ================ //
// to bring up the about-title from top to the place it should be
gsap.to(".about-title", {
  opacity: 1,
  y: 0,

  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    end: "top 20%",
    toggleActions: "play resume resume reset",
  },
});
// to move image from right to left
gsap.to(".about-img", {
  opacity: 1,
  x: 0,
  stagger: 0.2,

  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    end: "top 20%",
    toggleActions: "play none none none",
  },
});

// ================ discover page ================ //
gsap.to(".discover-title", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".discover",
    start: "top 50%",
    end: "top 10%",
    toggleActions: "play resume resume reset",
  },
});

// ================ Discover swiper =============== //

const swiper = new Swiper(".discover-image", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
  },
});

// ================ Discover experience =============== //

gsap.to(".serve-title h2", {
  y: 0,
  opacity: 1,

  scrollTrigger: {
    trigger: ".discover-page-two",
    start: "top 60%",
    end: "bottom 10%",
    toggleActions: "play reserve resume reverse",
  },
});
gsap.to(".experience-company", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".discover-page-two",
    start: "top 60%",
    end: "bottom 10%",
    toggleActions: "play reverse resume reverse",
  },
});

// ================ Discover video =============== //
gsap.to(".video-discover-title", {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".discover-page-three",
    start: "top 60%",
    end: "bottom 20%",
    toggleActions: "play reserve resume reverse",
  },
});

const videoFile = document.getElementById("video-file"),
  playBtn = document.getElementById("play-button"),
  playIcon = document.getElementById("play-icon");

function playPause() {
  if (videoFile.paused) {
    // play video
    videoFile.play();

    // change the icon
    playIcon.classList.add("ri-pause-line");
    playIcon.classList.remove("ri-play-fill");
  } else {
    // pause video
    videoFile.pause();

    // change the icon
    playIcon.classList.add("ri-play-fill");
    playIcon.classList.remove("ri-pause-line");
  }
}
playBtn.addEventListener("click", playPause);

// ===================== Places ====================== //
gsap.to(".beach-maldives", {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".places",
    start: "top 60%",
    end: "bottom 10%",
    toggleActions: "play resume none none",
  },
});
