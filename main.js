// Rotating hero word
const words = ["Mobiles", "Accessories", "Computers", "Laptops", "Printers", "Repairs"];
const wordEl = document.getElementById("rotate-word");
let wi = 0;
setInterval(() => {
  wordEl.classList.add("out");
  setTimeout(() => {
    wi = (wi + 1) % words.length;
    wordEl.textContent = words[wi];
    wordEl.classList.remove("out");
  }, 350);
}, 2400);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Header shadow on scroll
const topbar = document.getElementById("topbar");
const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Card spotlight follows the cursor
document.querySelectorAll(".card, .why-item").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
