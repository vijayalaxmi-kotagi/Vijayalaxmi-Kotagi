// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar toggle (single source of truth)
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navbarMenu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => navbarMenu.classList.remove("active"))
    );
  }

  // ----- Animations -----
  // Navbar
  gsap.from("nav", { y: -100, opacity: 0, duration: 1, ease: "power3.out" });

  // Hero sequence
  const heroTl = gsap.timeline();
  heroTl
    .from(".hero_text", { y: 50, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
    .from(".hero_title", { y: 50, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")
    .from(".hero__description", { y: 50, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
    .from(".social_Media_div", { y: 50, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
    .from(".hero_image", { x: 100, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

  // Services
  gsap.from(".services .common-title", {
    scrollTrigger: { trigger: ".services", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    y: 50, opacity: 0, duration: 0.6, ease: "back.out(1.7)"
  });
  gsap.from(".services .grid-item", {
    scrollTrigger: { trigger: ".services .grid-container", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    y: 100, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out"
  });

  // Projects
  gsap.from(".projects .common-title", {
    scrollTrigger: { trigger: ".projects", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    y: 50, opacity: 0, duration: 0.6, ease: "back.out(1.7)"
  });
  gsap.from(".projects .projects_item", {
    scrollTrigger: { trigger: ".projects .grid-container", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out"
  });

  // Contact (if/when you add it)
  gsap.from(".contactus .common-title", {
    scrollTrigger: { trigger: ".contactus", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    y: 50, opacity: 0, duration: 0.6, ease: "back.out(1.7)"
  });
  gsap.from(".contact-form", {
    scrollTrigger: { trigger: ".contact-container", start: "top 80%", scrub: true, toggleActions: "play none none none" },
    y: 50, opacity: 0, duration: 0.6, ease: "power3.out"
  });
});

