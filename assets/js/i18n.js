/**
 * i18n.js — Korean/English language switcher
 */

const i18nData = {
  ko: {
    'nav.about': '소개',
    'nav.members': '단원',
    'nav.gallery': '갤러리',
    'nav.concerts': '공연 일정',
    'nav.contact': '문의',
    'hero.eyebrow': '경남 최초 플루트 앙상블',
    'hero.title.ko': '아이네 앙상블',
    'hero.subtitle': '음악으로 세상과 소통하는 플루트 앙상블',
    'hero.cta.primary': '단원 소개',
    'hero.cta.secondary': '공연 안내',
    'hero.scroll': '스크롤',
    'about.section.title': '아이네 앙상블',
    'about.section.subtitle': '음악으로 전하고, 예술로 연결하다',
    'about.intro': '「아이네앙상블」은 음악을 넘어 역사·문화·환경·평화의 가치를 전합니다. 예술과 장르의 경계를 넘어 한국의 문화와 메시지를 세계와 다음 세대에 전하는 문화예술단체이자 민간 문화외교의 주체입니다.',
    'about.history.heading': '1997년 창단, 음악으로 세상과 소통하다.',
    'about.history.description': '1997년 경남 최초의 플루트 전문연주단체「아이네플루트앙상블」로 창단되어 병원, 사회복지시설 방문연주로 재능기부와 다양한 문화 교류 활동해 왔습니다. 2020년「아이네앙상블」로 개명, 서양악기와 국악기, 그리고 미술과 영상, 무용 등 다양한 장르로 협업하며 주한미군 용산기지 초청공연과 중국, 오스트리아, 미국, 베트남 등 해외 순회공연과 워크샵으로 국내외 주요 무대에 초청되어 공연했으며, 주한미군 총사령관 감사패를 수여받기도 했습니다.',
    'about.mission.heading': '음악으로 대한민국을 이야기하다.',
    'about.mission.description': '2022년부터 시작한 프로젝트 「고맙습니다, PC-701 백두산함」을 통해 대한민국을 지켜낸 용사들의 헌신과 희생을 기억하고 감사하는 메시지를 전하고, 조각가 \'문신\' 및 \'창녕 우포늪\' 등 예술과 환경의 생명가치를 담은 ‘지구살리기 환경음악회’를 통하여 자연과 인간의 공존을 이야기하고 한국의 문화예술과 환경자산을 국내외에 널리 알리는데 기여하는 민간문화외교관으로 활동하고 있습니다.',
    'about.tag.austria': '오스트리아',
    'about.tag.usa': '미국',
    'about.tag.vietnam': '베트남',
    'about.stat.founded': '창단',
    'about.stat.concerts': '정기연주회',
    'about.stat.members': '단원',
    'about.stat.countries': '해외공연국',
    'about.history.title': '연혁',
    'members.section.title': '단원',
    'members.section.subtitle': '열다섯 명의 뛰어난 음악가들이 함께합니다',
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
    'nav.concerts': 'Concerts',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Premier Flute Ensemble of Gyeongnam',
    'hero.title.ko': 'Eine Ensemble',
    'hero.subtitle': 'A Flute Ensemble Communicating with the World through Music',
    'hero.cta.primary': 'Meet Our Members',
    'hero.cta.secondary': 'Upcoming Concerts',
    'hero.scroll': 'Scroll',
    'about.section.title': 'Eine Ensemble',
    'about.section.subtitle': 'Conveying through Music, Connecting through Art',
    'about.intro': '「Eine Ensemble」 communicates the values of history, culture, the environment, and peace through more than music. Crossing the boundaries between artistic genres, we are a cultural arts organization and an active voice in cultural diplomacy, sharing Korea\'s culture and messages with the world and future generations.',
    'about.history.heading': 'Founded in 1997, communicating with the world through music.',
    'about.history.description': 'Founded in 1997 as Gyeongnam\'s first professional flute ensemble, 「Eine Flute Ensemble」 contributed its talents through performances at hospitals and social welfare facilities while engaging in diverse cultural exchanges. Renamed 「Eine Ensemble」 in 2020, the group began collaborating across Western and Korean traditional music, visual art, film, dance, and other genres. It has been invited to major stages in Korea and abroad, including the U.S. military\'s Yongsan Garrison and tours and workshops in China, Austria, the United States, and Vietnam, and has received a certificate of appreciation from the Commander of U.S. Forces Korea.',
    'about.mission.heading': 'Telling the story of Korea through music.',
    'about.mission.description': 'Through 「Thank You, PC-701 ROKS Baekdusan」, a project launched in 2022, the ensemble honors and expresses gratitude for the dedication and sacrifice of those who defended the Republic of Korea. It also explores coexistence between people and nature through the “Save the Earth Environmental Concert,” which embraces the vitality of art and the environment through subjects such as sculptor Moon Shin and Changnyeong Upo Wetland. In doing so, Eine Ensemble serves as a cultural ambassador, promoting Korea\'s arts, culture, and environmental heritage at home and abroad.',
    'about.tag.austria': 'Austria',
    'about.tag.usa': 'USA',
    'about.tag.vietnam': 'Vietnam',
    'about.stat.founded': 'Founded',
    'about.stat.concerts': 'Regular Concerts',
    'about.stat.members': 'Members',
    'about.stat.countries': 'International Tour',
    'about.history.title': 'History',
    'members.section.title': 'Members',
    'members.section.subtitle': 'Fifteen outstanding musicians performing together',
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
