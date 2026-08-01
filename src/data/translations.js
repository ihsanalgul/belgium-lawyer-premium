import { appointmentsContent } from './appointments-content.js';
import { expertiseItems } from './expertise-items.js';

const baseTranslations = {
  en: {
    meta: {
      title: 'Av. Yusuf Ziya KAHYA | Lawyer · Ankara',
      description:
        'Av. Yusuf Ziya Kahya — Ankara Bar Association. Criminal, administrative, labour and immigration law; constitutional and international human rights applications.',
    },
    skip: 'Skip to main content',
    nav: {
      about: 'About',
      expertise: 'Expertise',
      appointments: 'Appointments',
      blogArchive: 'Blog',
      social: 'Social',
      contact: 'Contact',
      language: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'Ankara Bar · Lawyer',
      title: 'Av. Yusuf Ziya Kahya',
      subtitle:
        'Legal counsel in Turkey on criminal, administrative, labour and immigration law — constitutional court, ECtHR and UN applications, and petition drafting.',
      cta: 'Book an appointment',
      ctaContact: 'Contact us',
      slide0Alt: 'Ankara Courthouse',
      slide1Alt: 'Scales of justice and law books',
      slide2Alt: 'Av. Yusuf Ziya Kahya — Ankara Bar Association',
      slides: [
        {
          eyebrow: 'Ankara Bar · Lawyer',
          title: '"The good of the people is the supreme law."',
          subtitle: 'Cicero',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Welcome',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle:
            'Legal counsel in Turkey on criminal, administrative, labour and immigration law — constitutional court, ECtHR and UN applications, and petition drafting.',
          cta: 'Book an appointment',
          ctaHref: '#appointments',
        },
        {
          eyebrow: 'Lawyer & Legal Consultancy',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Ankara Bar Association · Confidential counsel',
          cta: 'Contact us',
          ctaHref: '#contact',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Ankara-based legal counsel',
      p1: 'Av. Yusuf Ziya Kahya is a lawyer registered with the Ankara Bar Association, practising primarily in Turkey across criminal, administrative, labour and immigration law.',
      p2: 'From the Pursaklar, Ankara office he provides confidential counsel with procedural precision; an abroad office is available for correspondence when required.',
      imageAlt: 'Av. Yusuf Ziya Kahya — Ankara Bar Association',
    },
    expertise: {
      eyebrow: 'Practice Areas',
      title: 'Areas of practice',
      items: [],
    },
    blog: {
      eyebrow: 'Articles',
      title: 'Criminal Law Writings',
      subtitle: 'Expert commentary on criminal procedure, detention, and defence strategy.',
      readMore: 'Read article',
      viewAll: 'View all articles',
    },
    social: {
      eyebrow: 'Social',
      title: 'Follow counsel online',
      subtitle: 'Updates on criminal law and current affairs. Reach out via WhatsApp for confidential matters.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Reach counsel directly',
      subtitle:
        'Communication is available via WhatsApp only. Office addresses are listed below for correspondence.',
      ankara: {
        label: 'Ankara Office',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Abroad Office',
        address: 'Avenue Louise 149, 1050 Brussels, Belgium',
      },
      whatsappLabel: 'WhatsApp only',
      whatsappCta: 'Send a WhatsApp message',
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya is a lawyer registered with the Ankara Bar Association. This website does not constitute legal advice.',
      rights: 'All rights reserved.',
      kvkk: 'Privacy Notice (KVKK)',
      privacy: 'Privacy Policy',
      barSicilPrefix: 'Ankara Bar Registry No:',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    whatsapp: {
      label: 'Contact via WhatsApp (WhatsApp only)',
      shortLabel: 'WhatsApp',
    },
  },

  fr: {
    meta: {
      title: 'Av. Yusuf Ziya KAHYA | Avocat · Ankara',
      description:
        'Av. Yusuf Ziya Kahya — Barreau d\'Ankara. Droit pénal, administratif, du travail et des migrations ; recours constitutionnels et internationaux.',
    },
    skip: 'Aller au contenu principal',
    nav: {
      about: 'À propos',
      expertise: 'Expertises',
      appointments: 'Rendez-vous',
      blogArchive: 'Blog',
      social: 'Réseaux',
      contact: 'Contact',
      language: 'Langue',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
    },
    hero: {
      eyebrow: 'Barreau d\'Ankara · Avocat',
      title: 'Av. Yusuf Ziya Kahya',
      subtitle:
        'Conseil juridique en Turquie en droit pénal, administratif, du travail et des migrations — recours AYM, CEDH, ONU et rédaction de requêtes.',
      cta: 'Prendre rendez-vous',
      ctaContact: 'Nous contacter',
      slide0Alt: 'Palais de justice d\'Ankara',
      slide1Alt: 'Balance de la justice et livres de droit',
      slide2Alt: 'Av. Yusuf Ziya Kahya — Barreau d\'Ankara',
      slides: [
        {
          eyebrow: 'Barreau d\'Ankara · Avocat',
          title: '"Le bien du peuple est la loi suprême."',
          subtitle: 'Cicéron',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Bienvenue',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle:
            'Conseil juridique en Turquie en droit pénal, administratif, du travail et des migrations — recours AYM, CEDH, ONU et rédaction de requêtes.',
          cta: 'Prendre rendez-vous',
          ctaHref: '#appointments',
        },
        {
          eyebrow: 'Avocat & Conseil Juridique',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Barreau d\'Ankara · Conseil confidentiel',
          cta: 'Nous contacter',
          ctaHref: '#contact',
        },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Cabinet juridique basé à Ankara',
      p1: 'Av. Yusuf Ziya Kahya est avocat inscrit au Barreau d\'Ankara, exerçant principalement en Turquie en droit pénal, administratif, du travail et des migrations.',
      p2: 'Depuis le bureau de Pursaklar, Ankara, il conseille avec discrétion et rigueur procédurale ; un bureau à l\'étranger est disponible pour la correspondance si nécessaire.',
      imageAlt: 'Av. Yusuf Ziya Kahya — Barreau d\'Ankara',
    },
    expertise: {
      eyebrow: 'Domaines d\'intervention',
      title: 'Domaines de pratique',
      items: [],
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Écrits en droit pénal',
      subtitle: 'Analyses sur la procédure pénale, la détention et la stratégie de défense.',
      readMore: 'Lire l\'article',
      viewAll: 'Voir tous les articles',
    },
    social: {
      eyebrow: 'Réseaux',
      title: 'Suivre le cabinet en ligne',
      subtitle: 'Actualités en droit pénal. Pour les affaires confidentielles, contactez via WhatsApp.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contacter le conseil directement',
      subtitle:
        'La communication se fait uniquement via WhatsApp. Les adresses des bureaux sont indiquées ci-dessous.',
      ankara: {
        label: 'Bureau d\'Ankara',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Bureau à l\'étranger',
        address: 'Avenue Louise 149, 1050 Bruxelles, Belgique',
      },
      whatsappLabel: 'WhatsApp uniquement',
      whatsappCta: 'Envoyer un message WhatsApp',
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya est avocat inscrit au Barreau d\'Ankara. Ce site ne constitue pas un avis juridique.',
      rights: 'Tous droits réservés.',
      kvkk: 'Avis KVKK',
      privacy: 'Politique de confidentialité',
      barSicilPrefix: 'N° au Barreau d\'Ankara :',
    },
    theme: {
      toLight: 'Passer au thème clair',
      toDark: 'Passer au thème sombre',
    },
    whatsapp: {
      label: 'Contacter via WhatsApp (WhatsApp uniquement)',
      shortLabel: 'WhatsApp',
    },
  },

  nl: {
    meta: {
      title: 'Av. Yusuf Ziya KAHYA | Advocaat · Ankara',
      description:
        'Av. Yusuf Ziya Kahya — Ankara Balie. Straf-, bestuurs-, arbeids- en migratierecht; constitutionele en internationale mensenrechtenberoepen.',
    },
    skip: 'Ga naar hoofdinhoud',
    nav: {
      about: 'Over',
      expertise: 'Expertise',
      appointments: 'Afspraken',
      blogArchive: 'Blog',
      social: 'Sociaal',
      contact: 'Contact',
      language: 'Taal',
      menuOpen: 'Menu openen',
      menuClose: 'Menu sluiten',
    },
    hero: {
      eyebrow: 'Ankara Balie · Advocaat',
      title: 'Av. Yusuf Ziya Kahya',
      subtitle:
        'Juridisch advies in Turkije op straf-, bestuurs-, arbeids- en migratierecht — AYM-, EVRM- en VN-beroepen en verzoekschriftvoorbereiding.',
      cta: 'Afspraak maken',
      ctaContact: 'Contact opnemen',
      slide0Alt: 'Gerechtsgebouw Ankara',
      slide1Alt: 'Weegschaal der rechtvaardigheid en juridische boeken',
      slide2Alt: 'Av. Yusuf Ziya Kahya — Ankara Balie',
      slides: [
        {
          eyebrow: 'Ankara Balie · Advocaat',
          title: '"Het welzijn van het volk is de hoogste wet."',
          subtitle: 'Cicero',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Welkom',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle:
            'Juridisch advies in Turkije op straf-, bestuurs-, arbeids- en migratierecht — AYM-, EVRM- en VN-beroepen en verzoekschriftvoorbereiding.',
          cta: 'Afspraak maken',
          ctaHref: '#appointments',
        },
        {
          eyebrow: 'Advocaat & Juridisch Advies',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Ankara Balie · Vertrouwelijk advies',
          cta: 'Contact opnemen',
          ctaHref: '#contact',
        },
      ],
    },
    about: {
      eyebrow: 'Over',
      title: 'Juridisch kantoor gevestigd in Ankara',
      p1: 'Av. Yusuf Ziya Kahya is advocaat ingeschreven bij de Ankara Balie en werkt voornamelijk in Turkije op het gebied van straf-, bestuurs-, arbeids- en migratierecht.',
      p2: 'Vanuit het kantoor in Pursaklar, Ankara biedt hij vertrouwelijk advies met procedurele precisie; een buitenlands kantoor is beschikbaar voor correspondentie indien nodig.',
      imageAlt: 'Av. Yusuf Ziya Kahya — Ankara Balie',
    },
    expertise: {
      eyebrow: 'Praktijkgebieden',
      title: 'Werkgebieden',
      items: [],
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Strafrechtpublicaties',
      subtitle: 'Analyses over strafprocedure, voorlopige hechtenis en verdedigingsstrategie.',
      readMore: 'Lees artikel',
      viewAll: 'Alle artikelen',
    },
    social: {
      eyebrow: 'Sociaal',
      title: 'Volg het kantoor online',
      subtitle: 'Updates over strafrecht. Neem voor vertrouwelijke zaken contact op via WhatsApp.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Neem rechtstreeks contact op',
      subtitle:
        'Communicatie verloopt uitsluitend via WhatsApp. Kantooradressen staan hieronder vermeld.',
      ankara: {
        label: 'Kantoor Ankara',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Buitenlands kantoor',
        address: 'Avenue Louise 149, 1050 Brussel, België',
      },
      whatsappLabel: 'Alleen WhatsApp',
      whatsappCta: 'Stuur een WhatsApp-bericht',
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya is advocaat ingeschreven bij de Ankara Balie. Deze website vormt geen juridisch advies.',
      rights: 'Alle rechten voorbehouden.',
      kvkk: 'KVKK-verklaring',
      privacy: 'Privacybeleid',
      barSicilPrefix: 'Ankara Balie nr.:',
    },
    theme: {
      toLight: 'Schakel over naar licht thema',
      toDark: 'Schakel over naar donker thema',
    },
    whatsapp: {
      label: 'Contact via WhatsApp (alleen WhatsApp)',
      shortLabel: 'WhatsApp',
    },
  },

  tr: {
    meta: {
      title: 'Av. Yusuf Ziya KAHYA | Avukat · Ankara',
      description:
        'Av. Yusuf Ziya Kahya — Ankara Barosu. Ceza, idari, iş ve göçmen hukuku; AYM, AİHM ve BM başvuruları; dilekçe hazırlığı.',
    },
    skip: 'Ana içeriğe geç',
    nav: {
      about: 'Hakkında',
      expertise: 'Uzmanlık',
      appointments: 'Randevu',
      blogArchive: 'Blog',
      social: 'Sosyal',
      contact: 'İletişim',
      language: 'Dil',
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
    },
    hero: {
      eyebrow: 'Ankara Barosu · Avukat',
      title: 'Av. Yusuf Ziya Kahya',
      subtitle:
        'Türkiye\'de ceza, idari, iş ve göçmen hukuku alanlarında danışmanlık — AYM, AİHM ve BM başvuruları ile dilekçe hazırlığı.',
      cta: 'Randevu alın',
      ctaContact: 'İletişime geçin',
      slide0Alt: 'Ankara Adliyesi',
      slide1Alt: 'Adalet terazisi ve hukuk kitapları',
      slide2Alt: 'Av. Yusuf Ziya Kahya — Ankara Barosu',
      slides: [
        {
          eyebrow: 'Ankara Barosu · Avukat',
          title: '"Halkın yararı en yüce kanundur."',
          subtitle: 'Cicero',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Hoş Geldiniz',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle:
            'Türkiye\'de ceza, idari, iş ve göçmen hukuku alanlarında danışmanlık — AYM, AİHM ve BM başvuruları ile dilekçe hazırlığı.',
          cta: 'Randevu alın',
          ctaHref: '#appointments',
        },
        {
          eyebrow: 'Avukat & Hukuk Danışmanlığı',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Ankara Barosu · Gizli danışmanlık',
          cta: 'İletişime geçin',
          ctaHref: '#contact',
        },
      ],
    },
    about: {
      eyebrow: 'Hakkında',
      title: 'Ankara merkezli hukuk ve danışmanlık',
      p1: 'Av. Yusuf Ziya Kahya, Ankara Barosu\'na kayıtlı avukattır; ceza, idari, iş ve göçmen hukuku başta olmak üzere Türkiye odaklı hukuki danışmanlık ve temsil sunmaktadır.',
      p2: 'Pursaklar, Ankara ofisinden gizlilik ve usul hassasiyetiyle hizmet vermektedir; yurtdışı ofis yalnızca yazışma adresi olarak kullanılmaktadır.',
      imageAlt: 'Av. Yusuf Ziya Kahya — Ankara Barosu',
    },
    expertise: {
      eyebrow: 'Çalışma Alanları',
      title: 'Uzmanlık alanları',
      items: [],
    },
    blog: {
      eyebrow: 'Görüşler',
      title: 'Ceza Hukuku Yazıları',
      subtitle: 'Ceza muhakemesi, tutukluluk ve müdafaa stratejisi üzerine uzman yazılar.',
      readMore: 'Yazıyı oku',
      viewAll: 'Tüm yazılar',
    },
    social: {
      eyebrow: 'Sosyal',
      title: 'Çevrimiçi takip edin',
      subtitle: 'Ceza hukuku ve güncel meseleler. Gizli konular için WhatsApp üzerinden ulaşın.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Doğrudan ulaşın',
      subtitle:
        'İletişim yalnızca WhatsApp üzerinden sağlanmaktadır. Ofis adresleri aşağıdadır.',
      ankara: {
        label: 'Ankara Ofisi',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Yurtdışı Ofis',
        address: 'Avenue Louise 149, 1050 Brüksel, Belçika',
      },
      whatsappLabel: 'Sadece WhatsApp',
      whatsappCta: 'WhatsApp mesajı gönder',
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya, Ankara Barosu\'na kayıtlı avukattır. Bu web sitesi hukuki danışmanlık niteliği taşımaz.',
      rights: 'Tüm hakları saklıdır.',
      kvkk: 'KVKK Aydınlatma Metni',
      privacy: 'Gizlilik Politikası',
      barSicilPrefix: 'Ankara Barosu Sicil No:',
    },
    theme: {
      toLight: 'Açık temaya geç',
      toDark: 'Koyu temaya geç',
    },
    whatsapp: {
      label: 'WhatsApp ile iletişim (sadece WhatsApp)',
      shortLabel: 'WhatsApp',
    },
  },
};

export const translations = Object.fromEntries(
  Object.entries(baseTranslations).map(([lang, t]) => [
    lang,
    {
      ...t,
      appointments: appointmentsContent[lang],
      expertise: {
        ...t.expertise,
        items: expertiseItems[lang],
      },
    },
  ])
);
export const supportedLanguages = ['en', 'fr', 'nl', 'tr'];
export const defaultLanguage = 'tr';
