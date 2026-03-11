/**
 * gallery.js — Lightbox for gallery photos
 */

const Gallery = (() => {
  let images = [];
  let currentIndex = 0;

  function init() {
    bindGalleryItems();
    setupControls();
    setupKeyboard();
  }

  function bindGalleryItems() {
    const items = document.querySelectorAll('.gallery-item[data-src]');
    images = Array.from(items).map(item => ({
      src: item.dataset.src,
      alt: item.dataset.alt || ''
    }));

    items.forEach((item, index) => {
      item.addEventListener('click', () => open(index));
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(index);
        }
      });
    });
  }

  function setupControls() {
    document.getElementById('lightboxClose')?.addEventListener('click', close);
    document.getElementById('lightboxPrev')?.addEventListener('click', prev);
    document.getElementById('lightboxNext')?.addEventListener('click', next);

    document.getElementById('lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') close();
    });
  }

  function open(index) {
    currentIndex = index;
    updateImage();
    const lb = document.getElementById('lightbox');
    lb?.classList.add('open');
    document.body.style.overflow = 'hidden';

    const hasMultiple = images.length > 1;
    const prev = document.getElementById('lightboxPrev');
    const next = document.getElementById('lightboxNext');
    if (prev) prev.style.display = hasMultiple ? '' : 'none';
    if (next) next.style.display = hasMultiple ? '' : 'none';
  }

  function close() {
    document.getElementById('lightbox')?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function updateImage() {
    const img = document.getElementById('lightboxImg');
    if (img && images[currentIndex]) {
      img.src = images[currentIndex].src;
      img.alt = images[currentIndex].alt;
    }
  }

  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb?.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });
  }

  return { init };
})();

export default Gallery;
