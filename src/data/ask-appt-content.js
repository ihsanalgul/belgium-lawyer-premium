/** Shared askLawyer + appointments content per locale — merged into translations.js */
export const askApptContent = {
  en: {
    nav: { askLawyer: 'Ask a Lawyer', appointments: 'Appointments' },
    askLawyer: {
      eyebrow: 'Legal Inquiry',
      titleLine1: 'Send your question',
      titleEmphasis: 'directly',
      titleLine2: 'to our team',
      subtitle:
        'We accept a limited number of mandates each year; every inquiry is reviewed by a partner. Complete the form below and a lawyer in the relevant practice area will respond.',
      trust: [
        { bold: '48 hours', text: 'Your inquiry is typically reviewed within 48 hours on business days.' },
        { bold: 'attorney-client privilege', text: 'Information you share is held under strict confidentiality and professional privilege.' },
        { bold: 'Ankara and Brussels', text: 'Complex cross-border matters are handled by lawyers seated in both offices.' },
      ],
      disclaimer:
        'Responses through this form are for general orientation only and do not constitute binding legal advice. For case-specific analysis, we recommend',
      disclaimerLink: 'booking an appointment',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Telephone (optional)',
        area: 'Practice area',
        areaPlaceholder: 'Select',
        message: 'Your question',
        messagePlaceholder:
          'Summarise your matter briefly. Dates, jurisdictions, or document references help us respond faster.',
        consent:
          'I consent to the processing of my personal data for the purpose of evaluating this inquiry.',
        submit: 'Submit question',
        submitted: 'Submitted',
        note: 'To book a consultation, use the',
        noteLink: 'appointments section',
        noteSuffix: 'below.',
        areas: [
          'Corporate & Commercial',
          'EU Regulatory & Compliance',
          'Investment & Finance',
          'Arbitration & Dispute Resolution',
          'Employment & Mobility',
          'Other',
        ],
      },
      qa: {
        eyebrow: 'Answered Questions',
        items: [
          {
            tag: 'Corporate Law',
            title: 'How long does company formation take for a foreign investor in Turkey?',
            excerpt:
              'Once corporate documents and capital requirements are in order, trade registry registration typically completes within a few business days. The decisive factor is often not the registry itself but prior approvals, notarisation, and bank account opening timelines.',
            readMore: 'Read more',
          },
          {
            tag: 'EU Regulation',
            title: 'Who falls under the new CBAM obligations for exports to the EU?',
            excerpt:
              'The Carbon Border Adjustment Mechanism initially targets steel, cement, aluminium, fertilisers, electricity, and hydrogen. Importers must report embedded emissions; full financial obligations phase in from 2026. Supply-chain due diligence is increasingly relevant for Turkish exporters.',
            readMore: 'Read more',
          },
          {
            tag: 'Arbitration',
            title: 'What are the principal differences between ISTAC and ICC arbitration?',
            excerpt:
              'Both institutions apply international arbitration rules, but differ in cost structure, default seat, language options, and case administration. ISTAC is often chosen for Turkey-related contracts; ICC remains the default for multi-jurisdictional commercial disputes.',
            readMore: 'Read more',
          },
        ],
      },
    },
    appointments: {
      eyebrow: 'Appointments & Packages',
      title: 'Choose the consultation that fits your matter',
      subtitle:
        'Each package has a defined scope and duration. Select a package, pick an available date, and our team will confirm by email.',
      footnote: 'Payment instructions for fee-based packages are sent with the appointment confirmation.',
      selectedLabel: 'Selected',
      packages: [
        {
          id: 'intro-call',
          duration: '15 Minutes',
          title: 'Introductory Call',
          price: 'Free',
          priceNote: '',
          desc: 'A brief call to clarify the scope of your matter and identify the right practice area.',
          features: [
            'Practice area assessment',
            'Summary of recommended next steps',
            'By phone, 15 minutes',
          ],
        },
        {
          id: 'consultation',
          duration: '45 Minutes',
          title: 'Consultation Session',
          price: '€250',
          priceNote: '/ session',
          desc: 'A video consultation with substantive legal orientation tailored to your file.',
          features: [
            'Preliminary document review',
            'Written summary of key points',
            'Video call, 45 minutes',
          ],
        },
        {
          id: 'corporate-briefing',
          duration: 'Custom Scope',
          title: 'Corporate Briefing',
          price: 'On request',
          priceNote: '',
          desc: 'A structured briefing for cross-border, multi-party matters requiring advance preparation.',
          features: [
            'Multi-participant attendance',
            'Scope memo and proposal document',
            'In office or video',
          ],
        },
      ],
      booker: {
        title: 'Select date & time',
        chooseFirst: 'Select a package above first',
        name: 'Full name',
        email: 'Email address',
        note: 'Brief note (optional)',
        notePlaceholder: 'Topic you wish to discuss',
        summaryEmpty: 'No selection yet.',
        confirm: 'Confirm appointment',
        successTitle: 'Your appointment request has been received',
        successBody:
          'Our team will confirm by email within 24 hours. If you have questions in the meantime, contact us directly.',
      },
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  },

  fr: {
    nav: { askLawyer: 'Poser une Question', appointments: 'Rendez-vous' },
    askLawyer: {
      eyebrow: 'Demande Juridique',
      titleLine1: 'Adressez votre question',
      titleEmphasis: 'directement',
      titleLine2: 'à notre équipe',
      subtitle:
        'Nous acceptons un nombre limité de mandats chaque année ; chaque demande est examinée par un associé. Remplissez le formulaire ci-dessous et un avocat du domaine concerné vous répondra.',
      trust: [
        { bold: '48 heures', text: 'Votre demande est généralement examinée sous 48 heures ouvrables.' },
        { bold: 'secret professionnel', text: 'Les informations partagées sont traitées en stricte confidentialité.' },
        { bold: 'Ankara et Bruxelles', text: 'Les affaires transfrontalières complexes sont traitées depuis nos deux bureaux.' },
      ],
      disclaimer:
        'Les réponses via ce formulaire sont à titre informatif et ne constituent pas un avis juridique contraignant. Pour une analyse spécifique, nous recommandons de',
      disclaimerLink: 'prendre rendez-vous',
      form: {
        name: 'Nom complet',
        email: 'Adresse e-mail',
        phone: 'Téléphone (facultatif)',
        area: 'Domaine juridique',
        areaPlaceholder: 'Sélectionner',
        message: 'Votre question',
        messagePlaceholder:
          'Résumez brièvement votre affaire. Dates, juridictions ou références documentaires accélèrent notre réponse.',
        consent:
          'J\'accepte le traitement de mes données personnelles aux fins d\'évaluation de cette demande.',
        submit: 'Envoyer la question',
        submitted: 'Envoyé',
        note: 'Pour une consultation, utilisez la section',
        noteLink: 'rendez-vous',
        noteSuffix: 'ci-dessous.',
        areas: [
          'Droit des sociétés et commercial',
          'Réglementation et conformité UE',
          'Investissement et finance',
          'Arbitrage et résolution des litiges',
          'Droit du travail et mobilité',
          'Autre',
        ],
      },
      qa: {
        eyebrow: 'Questions Traitées',
        items: [
          {
            tag: 'Droit des sociétés',
            title: 'Quel délai pour la création d\'une société par un investisseur étranger en Turquie ?',
            excerpt:
              'Une fois les documents et exigences de capital réunis, l\'immatriculation au registre du commerce intervient généralement en quelques jours ouvrables. Les approbations préalables et l\'ouverture de compte bancaire conditionnent souvent le calendrier.',
            readMore: 'Lire la suite',
          },
          {
            tag: 'Réglementation UE',
            title: 'Qui est concerné par le nouveau mécanisme CBAM pour les exportations vers l\'UE ?',
            excerpt:
              'Le mécanisme d\'ajustement carbone aux frontières cible initialement l\'acier, le ciment, l\'aluminium et d\'autres secteurs. Les importateurs doivent déclarer les émissions incorporées ; les obligations financières pleines entrent en vigueur progressivement à partir de 2026.',
            readMore: 'Lire la suite',
          },
          {
            tag: 'Arbitrage',
            title: 'Quelles différences entre l\'arbitrage ISTAC et ICC ?',
            excerpt:
              'Les deux institutions appliquent des règles internationales, mais diffèrent en structure de coûts, siège par défaut et administration des dossiers. L\'ISTAC est souvent retenu pour les contrats liés à la Turquie ; la CCI reste la référence pour les litiges commerciaux multijuridictionnels.',
            readMore: 'Lire la suite',
          },
        ],
      },
    },
    appointments: {
      eyebrow: 'Rendez-vous & Forfaits',
      title: 'Choisissez la consultation adaptée à votre affaire',
      subtitle:
        'Chaque forfait a un périmètre et une durée définis. Sélectionnez un forfait, choisissez une date disponible, et notre équipe confirmera par e-mail.',
      footnote: 'Les instructions de paiement pour les forfaits payants sont envoyées avec la confirmation.',
      selectedLabel: 'Sélectionné',
      packages: [
        {
          id: 'intro-call',
          duration: '15 Minutes',
          title: 'Appel Préliminaire',
          price: 'Gratuit',
          priceNote: '',
          desc: 'Un bref échange pour clarifier le périmètre de votre affaire et identifier le bon domaine.',
          features: ['Évaluation du domaine', 'Résumé des prochaines étapes', 'Par téléphone, 15 minutes'],
        },
        {
          id: 'consultation',
          duration: '45 Minutes',
          title: 'Séance de Consultation',
          price: '€250',
          priceNote: '/ séance',
          desc: 'Une consultation vidéo avec orientation juridique adaptée à votre dossier.',
          features: ['Examen préliminaire des documents', 'Synthèse écrite des points clés', 'Visioconférence, 45 minutes'],
        },
        {
          id: 'corporate-briefing',
          duration: 'Périmètre sur mesure',
          title: 'Briefing Corporate',
          price: 'Sur devis',
          priceNote: '',
          desc: 'Un briefing structuré pour les affaires transfrontalières multi-parties.',
          features: ['Participation multi-intervenants', 'Note de périmètre et proposition', 'Au cabinet ou en visio'],
        },
      ],
      booker: {
        title: 'Choisir date et heure',
        chooseFirst: 'Sélectionnez d\'abord un forfait ci-dessus',
        name: 'Nom complet',
        email: 'Adresse e-mail',
        note: 'Note brève (facultatif)',
        notePlaceholder: 'Sujet que vous souhaitez aborder',
        summaryEmpty: 'Aucune sélection.',
        confirm: 'Confirmer le rendez-vous',
        successTitle: 'Votre demande de rendez-vous a été reçue',
        successBody:
          'Notre équipe confirmera par e-mail sous 24 heures. Pour toute question, contactez-nous directement.',
      },
      weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    },
  },

  nl: {
    nav: { askLawyer: 'Vraag een Advocaat', appointments: 'Afspraken' },
    askLawyer: {
      eyebrow: 'Juridische Vraag',
      titleLine1: 'Stel uw vraag',
      titleEmphasis: 'rechtstreeks',
      titleLine2: 'aan ons team',
      subtitle:
        'Wij aanvaarden jaarlijks een beperkt aantal opdrachten; elke aanvraag wordt door een vennoot beoordeeld. Vul het formulier in en een advocaat uit het relevante praktijkgebied zal reageren.',
      trust: [
        { bold: '48 uur', text: 'Uw aanvraag wordt doorgaans binnen 48 werkuren beoordeeld.' },
        { bold: 'beroepsgeheim', text: 'Gedeelde informatie wordt strikt vertrouwelijk behandeld.' },
        { bold: 'Ankara en Brussel', text: 'Complexe grensoverschrijdende zaken worden vanuit beide kantoren behandeld.' },
      ],
      disclaimer:
        'Antwoorden via dit formulier zijn ter oriëntatie en vormen geen bindend juridisch advies. Voor dossierspecifieke analyse raden wij aan een',
      disclaimerLink: 'afspraak te maken',
      form: {
        name: 'Volledige naam',
        email: 'E-mailadres',
        phone: 'Telefoon (optioneel)',
        area: 'Praktijkgebied',
        areaPlaceholder: 'Selecteer',
        message: 'Uw vraag',
        messagePlaceholder:
          'Vat uw zaak kort samen. Data, jurisdicties of documentverwijzingen versnellen ons antwoord.',
        consent:
          'Ik stem in met de verwerking van mijn persoonsgegevens voor de beoordeling van deze aanvraag.',
        submit: 'Vraag verzenden',
        submitted: 'Verzonden',
        note: 'Voor een consult, gebruik de',
        noteLink: 'afspraken sectie',
        noteSuffix: 'hieronder.',
        areas: [
          'Ondernemings- en handelsrecht',
          'EU-regelgeving en naleving',
          'Investering en financiering',
          'Arbitrage en geschillenbeslechting',
          'Arbeidsrecht en mobiliteit',
          'Overig',
        ],
      },
      qa: {
        eyebrow: 'Beantwoorde Vragen',
        items: [
          {
            tag: 'Ondernemingsrecht',
            title: 'Hoe lang duurt oprichting van een vennootschap voor een buitenlandse investeerder in Turkije?',
            excerpt:
              'Zodra documenten en kapitaalvereisten in orde zijn, voltooit handelsregisterregistratie doorgaans binnen enkele werkdagen. Voorafgaande goedkeuringen en bankrekeningopening bepalen vaak de tijdlijn.',
            readMore: 'Lees meer',
          },
          {
            tag: 'EU-regelgeving',
            title: 'Wie valt onder de nieuwe CBAM-verplichtingen voor export naar de EU?',
            excerpt:
              'Het koolstofgrenscorrectiemechanisme richt zich initieel op staal, cement, aluminium en andere sectoren. Importeurs moeten ingesloten emissies rapporteren; volledige financiële verplichtingen worden gefaseerd ingevoerd vanaf 2026.',
            readMore: 'Lees meer',
          },
          {
            tag: 'Arbitrage',
            title: 'Wat zijn de belangrijkste verschillen tussen ISTAC- en ICC-arbitrage?',
            excerpt:
              'Beide instellingen passen internationale arbitrageregels toe, maar verschillen in kostenstructuur, zetel en dossierbeheer. ISTAC wordt vaak gekozen voor Turkije-gerelateerde contracten; ICC blijft de standaard voor multijurisdictionele geschillen.',
            readMore: 'Lees meer',
          },
        ],
      },
    },
    appointments: {
      eyebrow: 'Afspraken & Pakketten',
      title: 'Kies het consult dat bij uw zaak past',
      subtitle:
        'Elk pakket heeft een gedefinieerde scope en duur. Selecteer een pakket, kies een beschikbare datum, en ons team bevestigt per e-mail.',
      footnote: 'Betalingsinstructies voor betaalde pakketten worden met de bevestiging verzonden.',
      selectedLabel: 'Geselecteerd',
      packages: [
        {
          id: 'intro-call',
          duration: '15 Minuten',
          title: 'Kennismakingsgesprek',
          price: 'Gratis',
          priceNote: '',
          desc: 'Een kort gesprek om de scope van uw zaak te verduidelijken en het juiste praktijkgebied te bepalen.',
          features: ['Beoordeling praktijkgebied', 'Samenvatting vervolgstappen', 'Telefonisch, 15 minuten'],
        },
        {
          id: 'consultation',
          duration: '45 Minuten',
          title: 'Consultatiesessie',
          price: '€250',
          priceNote: '/ sessie',
          desc: 'Een videoconsult met substantiële juridische oriëntatie op maat van uw dossier.',
          features: ['Voorlopige documentreview', 'Schriftelijke samenvatting', 'Videogesprek, 45 minuten'],
        },
        {
          id: 'corporate-briefing',
          duration: 'Maatwerk',
          title: 'Corporate Briefing',
          price: 'Op aanvraag',
          priceNote: '',
          desc: 'Een gestructureerde briefing voor grensoverschrijdende zaken met meerdere partijen.',
          features: ['Meerdere deelnemers', 'Scopememo en voorstel', 'Op kantoor of video'],
        },
      ],
      booker: {
        title: 'Datum en tijd kiezen',
        chooseFirst: 'Selecteer eerst een pakket hierboven',
        name: 'Volledige naam',
        email: 'E-mailadres',
        note: 'Korte notitie (optioneel)',
        notePlaceholder: 'Onderwerp dat u wilt bespreken',
        summaryEmpty: 'Nog geen selectie.',
        confirm: 'Afspraak bevestigen',
        successTitle: 'Uw afspraakaanvraag is ontvangen',
        successBody:
          'Ons team bevestigt binnen 24 uur per e-mail. Bij vragen kunt u rechtstreeks contact opnemen.',
      },
      weekdays: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
      months: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    },
  },

  tr: {
    nav: { askLawyer: 'Avukata Sorun', appointments: 'Randevu' },
    askLawyer: {
      eyebrow: 'Hukuki Danışma Talebi',
      titleLine1: 'Sorunuzu',
      titleEmphasis: 'doğrudan',
      titleLine2: 'ekibimize iletin',
      subtitle:
        'Yılda sınırlı sayıda dosya kabul ediyoruz; her talep bir ortak tarafından incelenir. Formu doldurun, ilgili uzmanlık alanındaki avukatımız size dönüş yapsın.',
      trust: [
        { bold: '48 saat', text: 'Talebiniz iş günlerinde genellikle 48 saat içinde değerlendirilir.' },
        { bold: 'avukat-müvekkil gizliliği', text: 'Paylaştığınız bilgiler meslek sırrı ve gizlilik yükümlülüğü kapsamında korunur.' },
        { bold: 'Ankara ve Brüksel', text: 'Karmaşık sınır ötesi dosyalar her iki ofisimizdeki avukatlarca yürütülür.' },
      ],
      disclaimer:
        'Bu form üzerinden verilen yanıtlar genel bilgilendirme niteliğindedir ve bağlayıcı hukuki danışmanlık teşkil etmez. Dosyanıza özgü değerlendirme için',
      disclaimerLink: 'randevu almanızı',
      form: {
        name: 'Ad soyad',
        email: 'E-posta adresi',
        phone: 'Telefon (isteğe bağlı)',
        area: 'Hukuk alanı',
        areaPlaceholder: 'Seçiniz',
        message: 'Sorunuz',
        messagePlaceholder:
          'Meselenizi kısaca özetleyin. Tarih, yargı alanı veya belge referansları yanıt süresini kısaltır.',
        consent:
          'Kişisel verilerimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.',
        submit: 'Sorumu ilet',
        submitted: 'İletildi',
        note: 'Görüşme randevusu için aşağıdaki',
        noteLink: 'randevu bölümünü',
        noteSuffix: 'kullanın.',
        areas: [
          'Şirketler ve Ticaret Hukuku',
          'AB Mevzuatı ve Uyum',
          'Yatırım ve Finans',
          'Tahkim ve Uyuşmazlık Çözümü',
          'İş Hukuku ve Mobilite',
          'Diğer',
        ],
      },
      qa: {
        eyebrow: 'Yanıtlanan Sorular',
        items: [
          {
            tag: 'Şirketler Hukuku',
            title: 'Yurt dışı yatırımcı için Türkiye\'de şirket kuruluşu ne kadar sürer?',
            excerpt:
              'Kuruluş belgeleri ve sermaye şartları tamamlandığında ticaret sicili tescili genellikle birkaç iş günü içinde sonuçlanır. Süreyi asıl uzatan unsur çoğu zaman sicil değil; ön izinler, noter işlemleri ve banka hesabı açılışıdır.',
            readMore: 'Devamını oku',
          },
          {
            tag: 'AB Mevzuatı',
            title: 'AB\'ye ihracatta yeni CBAM yükümlülüğü kimleri kapsıyor?',
            excerpt:
              'Karbon sınır düzenlemesi öncelikle çelik, çimento, alüminyum ve belirli sektörleri hedef alır. İthalatçılar gömülü emisyonları bildirmek zorundadır; mali yükümlülükler 2026\'dan itibaren kademeli devreye girer. Türk ihracatçılar için tedarik zinciri denetimi giderek kritik hale gelmektedir.',
            readMore: 'Devamını oku',
          },
          {
            tag: 'Tahkim',
            title: 'ISTAC ile ICC tahkimi arasındaki temel farklar nelerdir?',
            excerpt:
              'Her iki kurum da uluslararası tahkim kurallarını uygular; ancak maliyet yapısı, varsayılan oturum yeri ve dosya yönetimi açısından ayrışırlar. Türkiye bağlantılı sözleşmelerde ISTAC sık tercih edilir; çok taraflı ticari uyuşmazlıklarda ICC referans kurum olmaya devam eder.',
            readMore: 'Devamını oku',
          },
        ],
      },
    },
    appointments: {
      eyebrow: 'Randevu & Paketler',
      title: 'İhtiyacınıza uygun görüşmeyi seçin',
      subtitle:
        'Her paketin kapsamı ve süresi nettir. Paket seçin, uygun tarihi işaretleyin; ekibimiz e-posta ile teyit etsin.',
      footnote: 'Ücretli paketler için ödeme bilgisi randevu teyidiyle birlikte iletilir.',
      selectedLabel: 'Seçildi',
      packages: [
        {
          id: 'intro-call',
          duration: '15 Dakika',
          title: 'Ön Görüşme',
          price: 'Ücretsiz',
          priceNote: '',
          desc: 'Meselenizin kapsamını netleştirdiğimiz ve doğru uzmanlık alanını belirlediğimiz kısa bir telefon görüşmesi.',
          features: ['Uzmanlık alanı değerlendirmesi', 'Sonraki adımların özeti', 'Telefonla, 15 dakika'],
        },
        {
          id: 'consultation',
          duration: '45 Dakika',
          title: 'Danışmanlık Seansı',
          price: '€250',
          priceNote: '/ seans',
          desc: 'Dosyanıza özgü somut hukuki yönlendirme aldığınız görüntülü görüşme.',
          features: ['Belge ön incelemesi', 'Yazılı görüşme özeti', 'Görüntülü, 45 dakika'],
        },
        {
          id: 'corporate-briefing',
          duration: 'Özel Kapsam',
          title: 'Kurumsal Brifing',
          price: 'Teklif üzerine',
          priceNote: '',
          desc: 'Sınır ötesi, çok taraflı meseleler için kapsamlı hazırlık görüşmesi.',
          features: ['Çok kişilik ekip katılımı', 'Ön kapsam ve teklif dokümanı', 'Ofiste veya görüntülü'],
        },
      ],
      booker: {
        title: 'Tarih ve saat seçin',
        chooseFirst: 'Önce yukarıdan bir paket seçin',
        name: 'Ad soyad',
        email: 'E-posta adresi',
        note: 'Kısa not (isteğe bağlı)',
        notePlaceholder: 'Görüşmede ele almak istediğiniz konu',
        summaryEmpty: 'Seçim yapılmadı.',
        confirm: 'Randevuyu onayla',
        successTitle: 'Randevu talebiniz alındı',
        successBody:
          'Ekibimiz 24 saat içinde e-posta ile teyit edecektir. Sorularınız için doğrudan bizimle iletişime geçebilirsiniz.',
      },
      weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
      months: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    },
  },
};
