export const siteConfig = {
  name: 'Av. Yusuf Ziya KAHYA',
  nameShort: { first: 'Yusuf Ziya', last: 'Kahya' },
  title: 'Avukat',
  bar: 'Ankara Barosu, Hukuk ve Danışmanlık',
  barSicilNo: 'Ankara 1 nolu Barosu 43223',
  kvkkUrl: '/kvkk.html',
  privacyUrl: '/gizlilik.html',
  whatsapp: {
    number: '905067151119',
    display: '0506 715 11 19',
    url: 'https://wa.me/905067151119',
  },
  addresses: {
    tr: {
      label: 'Ankara',
      line: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
    },
    be: {
      label: 'Yurtdışı Ofis',
      line: 'Avenue Louise 149, 1050 Brüksel, Belçika',
    },
  },
  maps: {
    ankaraEmbedUrl:
      'https://www.google.com/maps?q=Merkez+Mah.+Sun+Sok.+No:33/20+Pursaklar+Ankara+06140&output=embed',
  },
  googleCalendarUrl: '',
  x: {
    handle: '@y_ziya_kahya',
    profileUrl: 'https://x.com/y_ziya_kahya',
  },
  heroSlides: [
    {
      id: 'ankara',
      src: '/images/hero/ankara-adliyesi.jpg',
      altKey: 'slide0Alt',
      layout: 'cover',
      overlay: false,
      objectPosition: 'center center',
    },
    {
      id: 'justice',
      src: '/images/hero/pexels-pixabay-159832.jpg',
      altKey: 'slide1Alt',
      layout: 'cover',
      overlay: false,
      objectPosition: 'center center',
    },
    {
      id: 'portrait',
      src: '/images/lawyer/yusuf-ziya-kahya-slider.png',
      altKey: 'slide2Alt',
      layout: 'portrait-split',
      overlay: false,
      background: 'pattern',
      objectPosition: 'center top',
    },
  ],
};
