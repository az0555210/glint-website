<<<<<<< HEAD
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const toTop = document.getElementById("toTop");
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("main section[id]");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* Preloader */
  const hidePreloader = () => document.getElementById("preloader").classList.add("hide");
  window.addEventListener("load", () => setTimeout(hidePreloader, 300));
  setTimeout(hidePreloader, 3000);

  /* Mobile menu */
  const closeMenu = () => {
    nav.classList.remove("open");
    menuToggle.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    header.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  /* Scroll: sticky header, active link, back-to-top */
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 500);

    let current = "home";
    sections.forEach((section) => {
      if (y >= section.offsetTop - 140) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Portfolio filter */
  const filters = document.querySelectorAll(".filter");
  const works = document.querySelectorAll(".work");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.dataset.filter;
      works.forEach((work) => {
        work.classList.toggle("hide", type !== "all" && work.dataset.category !== type);
      });
    });
  });

  /* Animated counters */
  const counters = document.querySelectorAll(".counter");
  const runCounter = (el) => {
    const target = Number(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => observer.observe(c));
  } else {
    counters.forEach((c) => { c.textContent = c.dataset.target; });
  }

  /* Testimonial slider */
  const slides = document.querySelectorAll(".slide");
  const dotsWrap = document.getElementById("dots");
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
    dot.addEventListener("click", () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll(".dot");

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === index));
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5000);
  }
  restart();

  /* Contact form validation */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (field, message) => {
    form.querySelector('.error[data-for="' + field.id + '"]').textContent = message;
    field.classList.toggle("invalid", Boolean(message));
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";
    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;
    let valid = true;

    setError(name, name.value.trim() ? "" : "Please enter your name.");
    setError(email, emailPattern.test(email.value.trim()) ? "" : "Please enter a valid email address.");
    setError(message, message.value.trim().length >= 10 ? "" : "Please write at least 10 characters.");

    [name, email, message].forEach((f) => { if (f.classList.contains("invalid")) valid = false; });

    if (valid) {
      form.reset();
      status.textContent = "Thank you! Your message has been sent.";
    }
  });
=======
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const toTop = document.getElementById("toTop");
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("main section[id]");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* Preloader */
  const hidePreloader = () => document.getElementById("preloader").classList.add("hide");
  window.addEventListener("load", () => setTimeout(hidePreloader, 300));
  setTimeout(hidePreloader, 3000);

  /* Mobile menu */
  const closeMenu = () => {
    nav.classList.remove("open");
    menuToggle.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    header.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  /* Scroll: sticky header, active link, back-to-top */
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 500);

    let current = "home";
    sections.forEach((section) => {
      if (y >= section.offsetTop - 140) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Portfolio filter */
  const filters = document.querySelectorAll(".filter");
  const works = document.querySelectorAll(".work");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.dataset.filter;
      works.forEach((work) => {
        work.classList.toggle("hide", type !== "all" && work.dataset.category !== type);
      });
    });
  });

  /* Animated counters */
  const counters = document.querySelectorAll(".counter");
  const runCounter = (el) => {
    const target = Number(el.dataset.target);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => observer.observe(c));
  } else {
    counters.forEach((c) => { c.textContent = c.dataset.target; });
  }

  /* Testimonial slider */
  const slides = document.querySelectorAll(".slide");
  const dotsWrap = document.getElementById("dots");
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
    dot.addEventListener("click", () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll(".dot");

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === index));
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5000);
  }
  restart();

  /* Contact form validation */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (field, message) => {
    form.querySelector('.error[data-for="' + field.id + '"]').textContent = message;
    field.classList.toggle("invalid", Boolean(message));
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";
    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;
    let valid = true;

    setError(name, name.value.trim() ? "" : "Please enter your name.");
    setError(email, emailPattern.test(email.value.trim()) ? "" : "Please enter a valid email address.");
    setError(message, message.value.trim().length >= 10 ? "" : "Please write at least 10 characters.");

    [name, email, message].forEach((f) => { if (f.classList.contains("invalid")) valid = false; });

    if (valid) {
      form.reset();
      status.textContent = "Thank you! Your message has been sent.";
    }
  });
>>>>>>> 588527461640c63bf99a5a0ebfcfee7d24a845b0
});