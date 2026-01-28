// Typing
const roles = [
  "Staffing Strategist",
  "Operations Leader",
  "Sales & Growth Executive"
];
let r = 0, c = 0;
const t = document.getElementById("typing");

function type() {
  if (c < roles[r].length) {
    t.textContent += roles[r][c++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (c > 0) {
    t.textContent = roles[r].substring(0, --c);
    setTimeout(erase, 50);
  } else {
    r = (r + 1) % roles.length;
    setTimeout(type, 500);
  }
}
type();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Counters
document.querySelectorAll("[data-count]").forEach(counter => {
  let target = +counter.dataset.count;
  let count = 0;
  let step = target / 100;

  const update = () => {
    count += step;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
