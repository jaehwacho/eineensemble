/**
 * main.js — Entry point, initialization
 */

import Navigation from './navigation.js';
import Animations from './animations.js';
import Gallery from './gallery.js';
import I18n from './i18n.js';

// ----------------------------------------
// Members rendering
// ----------------------------------------
async function renderMembers() {
  const container = document.getElementById('membersGrid');
  if (!container) return;

  try {
    // Support both root-level and members/ subdirectory
    const basePath = document.location.pathname.includes('/members/') ? '../' : '';
    const res = await fetch(`${basePath}data/members.json`);
    if (!res.ok) throw new Error('Failed to load members');
    const members = await res.json();

    function renderCards(lang) {
      container.innerHTML = members
        .sort((a, b) => a.order - b.order)
        .map(member => {
          const data = member[lang] || member.ko;
          const initials = data.name.replace(/\s/g, '').slice(0, 2);
          const photoSrc = member.photo
            ? (basePath ? `../${member.photo}` : member.photo)
            : null;
          const memberHref = basePath
            ? `${member.slug}.html`
            : `members/${member.slug}.html`;

          return `
            <a href="${memberHref}" class="member-card animate-on-scroll"
               aria-label="${data.name} - ${data.role}">
              <div class="member-photo-wrap">
                ${photoSrc
                  ? `<img class="member-photo"
                          src="${photoSrc}"
                          alt="${data.name}"
                          loading="lazy"
                          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                     <div class="member-photo-placeholder" style="display:none">
                       <span class="member-initials">${initials}</span>
                     </div>`
                  : `<div class="member-photo-placeholder">
                       <span class="member-initials">${initials}</span>
                     </div>`
                }
                <div class="member-hover-overlay">
                  <span class="member-hover-text">${lang === 'ko' ? '프로필 보기' : 'View Profile'}</span>
                </div>
              </div>
              <div class="member-info">
                <div class="member-name">${data.name}</div>
                <div class="member-role">${data.role}</div>
              </div>
            </a>
          `;
        }).join('');

      Animations.init();
    }

    renderCards(I18n.getLang());
    document.addEventListener('langchange', (e) => renderCards(e.detail.lang));

  } catch (err) {
    console.warn('Members data load failed:', err);
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-muted);padding:2rem;">단원 정보를 불러오는 중입니다...</p>`;
  }
}

// ----------------------------------------
// Gallery photos rendering
// ----------------------------------------
async function renderGallery() {
  const container = document.getElementById('photoGrid');
  const section = document.getElementById('photoSection');
  if (!container || !section) return;

  try {
    const basePath = document.location.pathname.includes('/members/') ? '../' : '';
    const res = await fetch(`${basePath}data/gallery.json`);
    if (!res.ok) throw new Error('Failed to load gallery');
    const photos = await res.json();

    if (!photos.length) {
      section.style.display = 'none';
      return;
    }

    function renderCards(lang) {
      container.innerHTML = photos.map(photo => {
        const data = photo[lang] || photo.ko;
        return `
          <div class="gallery-item"
               data-src="${photo.src}"
               data-alt="${data.caption}"
               role="button"
               aria-label="${data.caption}">
            <img src="${photo.src}" alt="${data.caption}" loading="lazy">
            <div class="gallery-item-overlay">
              <span class="gallery-zoom-icon" aria-hidden="true">⊕</span>
            </div>
          </div>
        `;
      }).join('');

      Gallery.init();
      Animations.init();
    }

    renderCards(I18n.getLang());
    document.addEventListener('langchange', e => renderCards(e.detail.lang));

  } catch (err) {
    console.warn('Gallery data load failed:', err);
    if (section) section.style.display = 'none';
  }
}

// ----------------------------------------
// Videos rendering
// ----------------------------------------
async function renderVideos() {
  const container = document.getElementById('videoGrid');
  if (!container) return;

  try {
    const basePath = document.location.pathname.includes('/members/') ? '../' : '';
    const res = await fetch(`${basePath}data/videos.json`);
    if (!res.ok) throw new Error('Failed to load videos');
    const videos = await res.json();

    function renderGrid(lang) {
      container.innerHTML = videos.map(video => {
        const data = video[lang] || video.ko;
        const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

        return `
          <div class="video-card animate-on-scroll"
               role="button"
               tabindex="0"
               aria-label="${data.title} 영상 재생"
               data-youtube-id="${video.youtubeId}"
               data-title="${data.title}">
            <div class="video-thumbnail-wrap">
              <img class="video-thumbnail"
                   src="${thumbUrl}"
                   alt="${data.title}"
                   loading="lazy"
                   onerror="this.style.background='var(--color-bg-warm)'">
              <div class="video-play-btn" aria-hidden="true">
                <div class="video-play-icon">
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            <div class="video-info">
              <div class="video-title">${data.title}</div>
              <div class="video-desc">${data.description}</div>
            </div>
          </div>
        `;
      }).join('');

      // Bind click events
      container.querySelectorAll('.video-card').forEach(card => {
        const open = () => openVideoModal(card.dataset.youtubeId, card.dataset.title);
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
      });

      Animations.init();
    }

    renderGrid(I18n.getLang());
    document.addEventListener('langchange', e => renderGrid(e.detail.lang));

  } catch (err) {
    console.warn('Videos data load failed:', err);
    if (container) container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-muted);padding:2rem;">영상을 불러오는 중입니다...</p>`;
  }
}

function openVideoModal(youtubeId, title) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const titleEl = document.getElementById('videoModalTitle');
  if (!modal || !iframe) return;

  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  if (titleEl) titleEl.textContent = title || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (iframe) iframe.src = ''; // stop video
}

function setupVideoModal() {
  document.getElementById('videoModalClose')?.addEventListener('click', closeVideoModal);
  document.getElementById('videoModalBackdrop')?.addEventListener('click', closeVideoModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideoModal();
  });
}

// ----------------------------------------
// Concerts rendering
// ----------------------------------------
async function renderConcerts() {
  const container = document.getElementById('concertsList');
  if (!container) return;

  try {
    const basePath = document.location.pathname.includes('/members/') ? '../' : '';
    const res = await fetch(`${basePath}data/concerts.json`);
    if (!res.ok) throw new Error('Failed to load concerts');
    const concerts = await res.json();

    function renderList(lang) {
      const upcoming = concerts.filter(c => c.status !== 'past');
      const past = concerts.filter(c => c.status === 'past').slice(0, 3);
      const display = [...upcoming, ...past];

      if (!display.length) {
        container.innerHTML = `<p style="color:var(--color-text-muted);text-align:center;padding:2rem;">${lang === 'ko' ? '예정된 공연이 없습니다' : 'No upcoming concerts'}</p>`;
        return;
      }

      container.innerHTML = display.map(concert => {
        const data = concert[lang] || concert.ko;
        let dateDisplay = { day: '—', month: lang === 'ko' ? '미정' : 'TBD', year: '' };

        if (concert.date && !concert.date.includes('TBD')) {
          const d = new Date(concert.date);
          if (!isNaN(d)) {
            dateDisplay = {
              day: d.getDate().toString().padStart(2, '0'),
              month: d.toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US', { month: 'short' }).toUpperCase(),
              year: d.getFullYear()
            };
          }
        }

        const isPast = concert.status === 'past';
        return `
          <div class="concert-item animate-on-scroll${isPast ? ' past-concert' : ''}">
            <div class="concert-date-block">
              <span class="concert-date-month">${dateDisplay.month}</span>
              <span class="concert-date-day">${dateDisplay.day}</span>
              <span class="concert-date-year">${dateDisplay.year}</span>
            </div>
            <div class="concert-info">
              <div class="concert-title">${data.title}</div>
              <div class="concert-venue">📍 ${data.venue}</div>
              ${data.program && data.program !== '미정' && data.program !== 'TBD'
                ? `<div class="concert-program">${data.program}</div>` : ''}
            </div>
            <div>
              ${data.ticketUrl
                ? `<a href="${data.ticketUrl}" class="concert-ticket" target="_blank" rel="noopener">${lang === 'ko' ? '티켓' : 'Tickets'}</a>`
                : isPast
                  ? `<span class="concert-ticket-na">${lang === 'ko' ? '완료' : 'Completed'}</span>`
                  : `<span class="concert-ticket-na">${lang === 'ko' ? '추후 공지' : 'TBA'}</span>`
              }
            </div>
          </div>
        `;
      }).join('');
    }

    renderList(I18n.getLang());
    document.addEventListener('langchange', (e) => renderList(e.detail.lang));

  } catch (err) {
    console.warn('Concerts data load failed:', err);
  }
}

// ----------------------------------------
// Contact form
// ----------------------------------------
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lang = I18n.getLang();
    const nameEl = form.querySelector('#formName');
    const emailEl = form.querySelector('#formEmail');
    const messageEl = form.querySelector('#formMessage');
    const submitBtn = form.querySelector('#formSubmit');

    // Clear errors
    form.querySelectorAll('.form-error-msg').forEach(el => el.classList.remove('visible'));
    form.querySelectorAll('.form-input, .form-textarea').forEach(el => el.classList.remove('error'));

    let valid = true;

    if (!nameEl.value.trim()) {
      showError(nameEl, lang === 'ko' ? '이름을 입력해 주세요' : 'Please enter your name');
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      showError(emailEl, lang === 'ko' ? '올바른 이메일 주소를 입력해 주세요' : 'Please enter a valid email address');
      valid = false;
    }

    if (!messageEl.value.trim()) {
      showError(messageEl, lang === 'ko' ? '메시지를 입력해 주세요' : 'Please enter your message');
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = lang === 'ko' ? '전송 중...' : 'Sending...';

    try {
      const formData = new FormData(form);
      const res = await fetch(form.getAttribute('action'), {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        document.getElementById('formSuccess')?.classList.add('visible');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = lang === 'ko' ? '보내기' : 'Send Message';
      alert(lang === 'ko' ? '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.' : 'Failed to send. Please try again.');
    }
  });
}

function showError(input, msg) {
  input.classList.add('error');
  const errorEl = input.parentElement.querySelector('.form-error-msg');
  if (errorEl) {
    errorEl.textContent = msg;
    errorEl.classList.add('visible');
  }
}

// ----------------------------------------
// DOMContentLoaded
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
  Navigation.init();
  Animations.init();
  Gallery.init();

  renderMembers();
  renderGallery();
  renderVideos();
  setupVideoModal();
  renderConcerts();
  setupContactForm();

  // Hero image
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    const src = heroBg.style.backgroundImage.replace(/url\(["']?|["']?\)/g, '');
    const img = new Image();
    img.onload = () => document.getElementById('hero')?.classList.add('loaded');
    img.onerror = () => { heroBg.style.display = 'none'; };
    img.src = src;
  }
});
