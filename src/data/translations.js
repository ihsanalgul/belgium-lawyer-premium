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
      x: 'X',
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
      imageAlt0: 'Ankara Courthouse',
      imageAlt1: 'Constitutional Court building, Ankara',
      imageAlt2: 'Classical palace of justice architecture',
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
    x: {
      eyebrow: 'X',
      title: '@y_ziya_kahya',
      subtitle: 'Selected commentary on criminal law and current affairs.',
      viewProfile: 'View on X',
      readMore: 'Read on X',
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
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    whatsapp: {
      label: 'Contact via WhatsApp (WhatsApp only)',
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
      x: 'X',
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
      imageAlt0: 'Palais de justice d\'Ankara',
      imageAlt1: 'Bâtiment de la Cour constitutionnelle, Ankara',
      imageAlt2: 'Architecture classique d\'un palais de justice',
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
    x: {
      eyebrow: 'X',
      title: '@y_ziya_kahya',
      subtitle: 'Commentaires sélectionnés sur le droit pénal et l\'actualité.',
      viewProfile: 'Voir sur X',
      readMore: 'Lire sur X',
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
    },
    theme: {
      toLight: 'Passer au thème clair',
      toDark: 'Passer au thème sombre',
    },
    whatsapp: {
      label: 'Contacter via WhatsApp (WhatsApp uniquement)',
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
      x: 'X',
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
      imageAlt0: 'Gerechtsgebouw Ankara',
      imageAlt1: 'Gebouw van het Constitutioneel Hof, Ankara',
      imageAlt2: 'Klassieke paleis van justitie architectuur',
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
    x: {
      eyebrow: 'X',
      title: '@y_ziya_kahya',
      subtitle: 'Geselecteerde commentaren over strafrecht en actualiteit.',
      viewProfile: 'Bekijk op X',
      readMore: 'Lees op X',
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
    },
    theme: {
      toLight: 'Schakel over naar licht thema',
      toDark: 'Schakel over naar donker thema',
    },
    whatsapp: {
      label: 'Contact via WhatsApp (alleen WhatsApp)',
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
      x: 'X',
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
      imageAlt0: 'Ankara Adliyesi',
      imageAlt1: 'Anayasa Mahkemesi binası, Ankara',
      imageAlt2: 'Klasik adalet sarayı mimarisi',
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
    x: {
      eyebrow: 'X',
      title: '@y_ziya_kahya',
      subtitle: 'Ceza hukuku ve güncel meseleler üzerine seçilmiş paylaşımlar.',
      viewProfile: 'X\'te görüntüle',
      readMore: 'X\'te oku',
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
    },
    theme: {
      toLight: 'Açık temaya geç',
      toDark: 'Koyu temaya geç',
    },
    whatsapp: {
      label: 'WhatsApp ile iletişim (sadece WhatsApp)',
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
