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
// Replace your Reveal and Counter logic with this:
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // If it's the stats section, start the counter
      if (entry.target.classList.contains('stats')) {
        startCounters();
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal, .stats").forEach(el => observer.observe(el));

function startCounters() {
  document.querySelectorAll("[data-count]").forEach(counter => {
    if (counter.classList.contains('counted')) return; // Prevent re-running
    counter.classList.add('counted');

    let target = +counter.dataset.count;
    let count = 0;
    let increment = target / 50;

    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target + (target === 14 ? "+" : ""); // Adds + for years
      }
    };
    update();
  });
} window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
document.querySelectorAll('.cta-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty(
      '--x',
      `${e.clientX - rect.left}px`
    );
  });
});
const indicator = document.querySelector(".nav-indicator");
const navItems = document.querySelectorAll(".nav-links a");

function moveIndicator(el) {
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement.getBoundingClientRect();

  indicator.style.width = rect.width + "px";
  indicator.style.left = rect.left - parentRect.left + "px";
}

navItems.forEach(link => {
  link.addEventListener("mouseenter", () => moveIndicator(link));
  link.addEventListener("click", () => moveIndicator(link));
});

window.addEventListener("load", () => {
  const active = document.querySelector(".nav-links a.active");
  if (active) moveIndicator(active);
});

const toggleBtn = document.getElementById('navToggle');
const menu = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  // This adds/removes a class called 'open' when you click
  menu.classList.toggle('open');
  toggleBtn.classList.toggle('active');
});

// Close the menu automatically when you click a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggleBtn.classList.remove('active');
  });
});
