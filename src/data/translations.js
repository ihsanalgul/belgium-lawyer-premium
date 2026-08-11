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
      slide1Alt: 'Av. Yusuf Ziya Kahya — Ankara Bar Association',
      slides: [
        {
          eyebrow: '',
          title: 'A good state stands not by the power of laws, but by the power of justice.',
          subtitle: 'Immanuel Kant',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Lawyer & Legal Consultancy',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Legal counsel in Turkey on criminal, administrative, labour and immigration law',
          cta: 'Contact us',
          ctaHref: '#contact',
        },
      ],
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
      subtitle: 'Updates on criminal law and current affairs. Reach out via WhatsApp.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Reach counsel directly',
      subtitle:
        'Send a message via the form, or reach us on WhatsApp. Office addresses are listed below.',
      ankara: {
        label: 'Ankara Office',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Abroad Office',
        address: 'Avenue Louise 149, 1050 Brussels, Belgium',
      },
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Send a WhatsApp message',
      calendarCta: 'Book online',
      form: {
        title: 'Send a message',
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        subjectPlaceholder: 'Select',
        message: 'Message',
        submit: 'Send message',
        success: 'Your message has been received. We will get back to you shortly.',
        topics: {
          execution: 'Sentence calculation',
          consultation: 'Legal consultation',
          interpol: 'Interpol proceedings',
          other: 'Other',
        },
      },
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya is a lawyer registered with the Ankara Bar Association. This website does not constitute legal advice.',
      rights: 'All rights reserved.',
      kvkk: 'Privacy Notice (KVKK)',
      privacy: 'Privacy Policy',
      barSicilPrefix: 'Ankara Bar Registry No:',
      callHint: 'Reach us on WhatsApp',
      officesHeading: 'Offices',
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
      slide1Alt: 'Av. Yusuf Ziya Kahya — Barreau d\'Ankara',
      slides: [
        {
          eyebrow: '',
          title: 'Un bon État ne subsiste pas par la force des lois, mais par la force de la justice.',
          subtitle: 'Immanuel Kant',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Avocat & Conseil Juridique',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Conseil juridique en Turquie en droit pénal, administratif, du travail et des migrations',
          cta: 'Nous contacter',
          ctaHref: '#contact',
        },
      ],
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
      subtitle: 'Actualités en droit pénal. Contactez via WhatsApp.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contacter le conseil directement',
      subtitle:
        'Envoyez un message via le formulaire ou contactez-nous sur WhatsApp. Les adresses des bureaux figurent ci-dessous.',
      ankara: {
        label: 'Bureau d\'Ankara',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Bureau à l\'étranger',
        address: 'Avenue Louise 149, 1050 Bruxelles, Belgique',
      },
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Envoyer un message WhatsApp',
      calendarCta: 'Prendre rendez-vous en ligne',
      form: {
        title: 'Envoyer un message',
        name: 'Nom complet',
        email: 'E-mail',
        phone: 'Téléphone',
        subject: 'Sujet',
        subjectPlaceholder: 'Choisir',
        message: 'Message',
        submit: 'Envoyer le message',
        success: 'Votre message a bien été reçu. Nous vous répondrons sous peu.',
        topics: {
          execution: 'Calcul de peine',
          consultation: 'Consultation juridique',
          interpol: 'Procédures Interpol',
          other: 'Autre',
        },
      },
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya est avocat inscrit au Barreau d\'Ankara. Ce site ne constitue pas un avis juridique.',
      rights: 'Tous droits réservés.',
      kvkk: 'Avis KVKK',
      privacy: 'Politique de confidentialité',
      barSicilPrefix: 'N° au Barreau d\'Ankara :',
      callHint: 'Contactez-nous sur WhatsApp',
      officesHeading: 'Bureaux',
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
      slide1Alt: 'Av. Yusuf Ziya Kahya — Ankara Balie',
      slides: [
        {
          eyebrow: '',
          title: 'Een goede staat staat niet door de macht van wetten, maar door de macht van gerechtigheid.',
          subtitle: 'Immanuel Kant',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Advocaat & Juridisch Advies',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Juridisch advies in Turkije op straf-, bestuurs-, arbeids- en migratierecht',
          cta: 'Contact opnemen',
          ctaHref: '#contact',
        },
      ],
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
      subtitle: 'Updates over strafrecht. Neem contact op via WhatsApp.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Neem rechtstreeks contact op',
      subtitle:
        'Stuur een bericht via het formulier of neem contact op via WhatsApp. Kantooradressen staan hieronder.',
      ankara: {
        label: 'Kantoor Ankara',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Buitenlands kantoor',
        address: 'Avenue Louise 149, 1050 Brussel, België',
      },
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Stuur een WhatsApp-bericht',
      calendarCta: 'Online afspraak maken',
      form: {
        title: 'Stuur een bericht',
        name: 'Volledige naam',
        email: 'E-mail',
        phone: 'Telefoon',
        subject: 'Onderwerp',
        subjectPlaceholder: 'Kies',
        message: 'Bericht',
        submit: 'Bericht versturen',
        success: 'Uw bericht is ontvangen. We nemen spoedig contact met u op.',
        topics: {
          execution: 'Strafuitvoeringsberekening',
          consultation: 'Juridische consultatie',
          interpol: 'Interpol-procedures',
          other: 'Overig',
        },
      },
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya is advocaat ingeschreven bij de Ankara Balie. Deze website vormt geen juridisch advies.',
      rights: 'Alle rechten voorbehouden.',
      kvkk: 'KVKK-verklaring',
      privacy: 'Privacybeleid',
      barSicilPrefix: 'Ankara Balie nr.:',
      callHint: 'Bereik ons via WhatsApp',
      officesHeading: 'Kantoren',
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
      slide1Alt: 'Av. Yusuf Ziya Kahya — Ankara Barosu',
      slides: [
        {
          eyebrow: '',
          title: 'İyi bir devlet, yasaların gücüyle değil, adaletin gücüyle ayakta durur.',
          subtitle: 'Immanuel Kant',
          cta: '',
          ctaHref: '',
        },
        {
          eyebrow: 'Avukat & Hukuk Danışmanlığı',
          title: 'Av. Yusuf Ziya Kahya',
          subtitle: 'Türkiye\'de ceza, idari, iş ve göçmen hukuku alanlarında danışmanlık',
          cta: 'İletişime geçin',
          ctaHref: '#contact',
        },
      ],
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
      subtitle: 'Ceza hukuku ve güncel meseleler. WhatsApp üzerinden ulaşın.',
      whatsapp: 'WhatsApp',
      x: 'X (Twitter)',
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Doğrudan ulaşın',
      subtitle:
        'Form üzerinden mesaj gönderin veya WhatsApp ile ulaşın. Ofis adresleri aşağıdadır.',
      ankara: {
        label: 'Ankara Ofisi',
        address: 'Merkez Mah. Sun Sok. No:33/20 Pursaklar Ankara 06140',
      },
      brussels: {
        label: 'Yurtdışı Ofis',
        address: 'Avenue Louise 149, 1050 Brüksel, Belçika',
      },
      emailLabel: 'E-posta',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'WhatsApp mesajı gönder',
      calendarCta: 'Online randevu alın',
      form: {
        title: 'Mesaj gönderin',
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        subject: 'Konu',
        subjectPlaceholder: 'Seçiniz',
        message: 'Mesaj',
        submit: 'Mesaj gönder',
        success: 'Mesajınız alındı. En kısa sürede size dönüş yapılacaktır.',
        topics: {
          execution: 'İnfaz Hesabı',
          consultation: 'Hukuki Danışma',
          interpol: 'Interpol İşlemleri',
          other: 'Diğer',
        },
      },
    },
    footer: {
      disclaimer:
        'Av. Yusuf Ziya Kahya, Ankara Barosu\'na kayıtlı avukattır. Bu web sitesi hukuki danışmanlık niteliği taşımaz.',
      rights: 'Tüm hakları saklıdır.',
      kvkk: 'KVKK Aydınlatma Metni',
      privacy: 'Gizlilik Politikası',
      barSicilPrefix: 'Ankara Barosu Sicil No:',
      callHint: 'WhatsApp ile ulaşın',
      officesHeading: 'Ofisler',
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
