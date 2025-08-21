document.getElementById("navbar-toggle").addEventListener("click", function () {
  document.getElementById("navbar-menu").classList.toggle("active");
});
// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// Hero section animations
const heroTl = gsap.timeline();
heroTl
  .from(".hero_text", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  })
  .from(
    ".hero_title",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  )
  .from(
    ".hero__description",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".social_Media_div",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".hero_image",
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=1"
  );

// Services section animations
gsap.from(".services .common-title", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    scrub: true,
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
});

gsap.from(".services .grid-item", {
  scrollTrigger: {
    trigger: ".services .grid-container",
    start: "top 80%",
    scrub: true,
    toggleActions: "play none none none",
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// Projects section animations
gsap.from(".projects .common-title", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    scrub: true,
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
});

gsap.from(".projects .projects_item", {
  scrollTrigger: {
    scrub: true,
    trigger: ".projects .grid-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});

// Contact section animations
gsap.from(".contactus .common-title", {
  scrollTrigger: {
    scrub: true,
    trigger: ".contactus",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
});

gsap.from(".contact-form", {
  scrollTrigger: {
    scrub: true,
    trigger: ".contact-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
});

// Navbar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });
  }
});
