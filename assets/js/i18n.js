/**
 * i18n.js — Korean/English language switcher
 */

const i18nData = {
  ko: {
    'nav.about': '소개',
    'nav.members': '단원',
    'nav.gallery': '갤러리',
    'nav.contact': '문의',
    'hero.eyebrow': '경남 최초 플루트 앙상블',
    'hero.title.ko': '아이네 앙상블',
    'hero.subtitle': '음악으로 세상과 소통하는 플루트 앙상블',
    'hero.cta.primary': '단원 소개',
    'hero.cta.secondary': '공연 안내',
    'hero.scroll': '스크롤',
    'about.section.title': '아이네 앙상블',
    'about.section.subtitle': '1997년 창단, 음악으로 세상과 소통하다',
    'about.desc1': '「아이네앙상블」은 사회적 소외계층과의 화합을 도모하며 1997년 경남 최초의 플루트 전문연주단체로 창단되어 병원과 사회복지시설 방문 연주로 재능기부와 다양한 문화 교류 활동을 하였습니다.',
    'about.desc2': '2020년, 「아이네앙상블」로 개명한 후 서양악기와 국악기의 합동공연을 통하여 오스트리아, 미국, 베트남 등 해외 순회공연과 워크샵으로 한국 문화와 예술을 알리며, 융복합 연주단체로서의 활동을 확장하고 있습니다.',
    'about.tag.austria': '오스트리아',
    'about.tag.usa': '미국',
    'about.tag.vietnam': '베트남',
    'about.stat.founded': '창단',
    'about.stat.concerts': '정기연주회',
    'about.stat.members': '단원',
    'about.stat.countries': '해외공연국',
    'about.history.title': '연혁',
    'members.section.title': '단원',
    'members.section.subtitle': '열여섯 명의 뛰어난 음악가들이 함께합니다',
    'gallery.section.title': '갤러리 & 공연 영상',
    'gallery.section.subtitle': '아이네앙상블의 공연 영상을 감상하세요',
    'gallery.concerts.title': '공연 일정',
    'gallery.photos.title': '공연 사진',
    'gallery.videos.title': '공연 영상',
    'gallery.no.photos': '공연 사진이 준비되고 있습니다.',
    'contact.section.title': '문의',
    'contact.section.subtitle': '아이네앙상블에 문의하세요',
    'contact.address.label': '주소',
    'contact.address.value': '창원시 마산합포구 불종거리로 76 (상남동 208-3) 1층',
    'contact.phone.label': '전화',
    'contact.phone.value': '010-8937-2490',
    'contact.email.label': '이메일',
    'contact.email.value': 'flutistky@gmail.com',
    'contact.instagram': '인스타그램',
    'contact.youtube': '유튜브',
    'contact.form.name.label': '이름',
    'contact.form.name.placeholder': '성함을 입력해 주세요',
    'contact.form.email.label': '이메일',
    'contact.form.email.placeholder': '이메일 주소를 입력해 주세요',
    'contact.form.message.label': '메시지',
    'contact.form.message.placeholder': '문의 내용을 입력해 주세요',
    'contact.form.submit': '보내기',
    'contact.form.success.title': '전송 완료',
    'contact.form.success.msg': '메시지가 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
    'profile.back': '← 단원 목록',
    'profile.education': '학력',
    'profile.awards': '수상 경력',
    'profile.current': '현재 활동',
    'profile.bio': '소개',
    'footer.copy': '© 2025 아이네앙상블. All rights reserved.',
  },
  en: {
    'nav.about': 'About',
    'nav.members': 'Members',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Premier Flute Ensemble of Gyeongnam',
    'hero.title.ko': 'Eine Ensemble',
    'hero.subtitle': 'A Flute Ensemble Communicating with the World through Music',
    'hero.cta.primary': 'Meet Our Members',
    'hero.cta.secondary': 'Upcoming Concerts',
    'hero.scroll': 'Scroll',
    'about.section.title': 'Eine Ensemble',
    'about.section.subtitle': 'Founded 1997 — Speaking to the World through Music',
    'about.desc1': 'Eine Ensemble was founded in 1997 as the first professional flute ensemble in Gyeongnam Province, devoted to fostering harmony with the socially underprivileged through performances at hospitals and social welfare facilities.',
    'about.desc2': 'Renamed "Eine Ensemble" in 2020, the group has expanded its activities through joint performances of Western and Korean traditional instruments, international tours in Austria, the USA, and Vietnam.',
    'about.tag.austria': 'Austria',
    'about.tag.usa': 'USA',
    'about.tag.vietnam': 'Vietnam',
    'about.stat.founded': 'Founded',
    'about.stat.concerts': 'Regular Concerts',
    'about.stat.members': 'Members',
    'about.stat.countries': 'Countries',
    'about.history.title': 'History',
    'members.section.title': 'Members',
    'members.section.subtitle': 'Sixteen outstanding musicians performing together',
    'gallery.section.title': 'Gallery & Videos',
    'gallery.section.subtitle': 'Watch Eine Ensemble in concert',
    'gallery.concerts.title': 'Concert Schedule',
    'gallery.photos.title': 'Performance Photos',
    'gallery.videos.title': 'Performance Videos',
    'gallery.no.photos': 'Performance photos coming soon.',
    'contact.section.title': 'Contact',
    'contact.section.subtitle': 'Get in touch with Eine Ensemble',
    'contact.address.label': 'Address',
    'contact.address.value': '76 Buljong-geori, Masanhapo-gu, Changwon 1F',
    'contact.phone.label': 'Phone',
    'contact.phone.value': '+82-10-8937-2490',
    'contact.email.label': 'Email',
    'contact.email.value': 'flutistky@gmail.com',
    'contact.instagram': 'Instagram',
    'contact.youtube': 'YouTube',
    'contact.form.name.label': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'Your email address',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'Your message',
    'contact.form.submit': 'Send Message',
    'contact.form.success.title': 'Message Sent',
    'contact.form.success.msg': 'Your message has been sent. We will get back to you soon.',
    'profile.back': '← Back to Members',
    'profile.education': 'Education',
    'profile.awards': 'Awards',
    'profile.current': 'Current Activities',
    'profile.bio': 'Biography',
    'footer.copy': '© 2025 Eine Ensemble. All rights reserved.',
  }
};

const I18n = (() => {
  let currentLang = 'ko';

  function init() {
    const saved = localStorage.getItem('eine-lang');
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'ko';
    currentLang = saved || browserLang;
    applyLanguage(currentLang);
    setupSwitcher();
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('eine-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = i18nData[lang][key];
      if (text !== undefined) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = i18nData[lang][key];
      if (text !== undefined) el.setAttribute('placeholder', text);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function setupSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
  }

  function t(key) {
    return i18nData[currentLang][key] || key;
  }

  function getLang() {
    return currentLang;
  }

  return { init, applyLanguage, t, getLang };
})();

export default I18n;
