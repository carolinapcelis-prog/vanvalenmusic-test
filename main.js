/* ═══════════════════════════════════════════════
   VAN VALEN MUSIC · main.js
═══════════════════════════════════════════════ */

// ── NAV: scroll effect ──────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── NAV: mobile toggle ──────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── YOUTUBE: lazy load on click ─────────────────
// Replaces thumbnail with actual iframe embed
// Keeps page fast — no YouTube scripts until user clicks
function loadVideo(el) {
  const id = el.dataset.videoId;
  if (!id || id.startsWith('VIDEO_ID')) {
    // Placeholder — no real ID yet
    el.style.opacity = '0.5';
    setTimeout(() => el.style.opacity = '1', 400);
    return;
  }
  const wrap = document.createElement('div');
  wrap.className = 'video-iframe-wrap';
  wrap.innerHTML = `<iframe 
    src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" 
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`;
  el.replaceWith(wrap);
}

// ── CONTACT FORM ────────────────────────────────
// Wires up to Formspree (free) — replace the action URL with yours
// Or swap for Netlify forms, EmailJS, etc.
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  // Formspree endpoint — replace YOUR_FORM_ID with your actual Formspree form ID
  // Sign up free at formspree.io to get one
  const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

  btn.textContent = 'Sending…';
  btn.disabled = true;

  const data = new FormData(form);

  fetch(FORMSPREE_URL, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      form.reset();
      success.style.display = 'block';
      btn.textContent = 'Sent ✓';
    } else {
      throw new Error('Form error');
    }
  })
  .catch(() => {
    // Fallback: open mailto link if Formspree not set up
    const name    = data.get('name') || '';
    const email   = data.get('email') || '';
    const message = data.get('message') || '';
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body    = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:vanvalenmusic@gmail.com?subject=${subject}&body=${body}`;
    btn.textContent = 'Send message';
    btn.disabled = false;
  });
}

// ── SCROLL REVEAL ───────────────────────────────
// Lightweight fade-in on scroll — no library needed
const revealEls = document.querySelectorAll(
  '.about__grid, .lessons__what, .price-card, .video-wrap, .contact__grid, .booking-strip'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
}
