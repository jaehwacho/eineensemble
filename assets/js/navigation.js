/**
 * navigation.js — Scroll header + mobile menu
 */

const Navigation = (() => {
  function init() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navOverlay = document.getElementById('navOverlay');
    const overlayClose = document.getElementById('overlayClose');

    if (!navbar) return;

    // Scroll behavior
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Mobile menu
    function openMenu() {
      if (!navOverlay) return;
      navOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      navToggle?.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      if (!navOverlay) return;
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
      navToggle?.setAttribute('aria-expanded', 'false');
    }

    navToggle?.addEventListener('click', openMenu);
    overlayClose?.addEventListener('click', closeMenu);

    navOverlay?.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    navOverlay?.addEventListener('click', (e) => {
      if (e.target === navOverlay) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    // Active section highlight
    const sections = document.querySelectorAll('section[id]');
    if (sections.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.toggle('active-nav', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      sections.forEach(s => obs.observe(s));
    }
  }

  return { init };
})();

export default Navigation;
