/** Appointment content and fee schedule per locale */
export const appointmentsContent = {
  en: {
    eyebrow: 'Appointments',
    title: 'Schedule an online consultation',
    subtitle:
      'Book a 15-minute online appointment. The meeting can be extended if needed.',
    footnote: 'Payment instructions for fee-based services are sent with the appointment confirmation.',
    feesTitle: 'Fee schedule',
    appointment: {
      id: 'online-appointment',
      duration: '15 Minutes',
      title: 'Online Appointment',
      desc: 'A 15-minute consultation. The meeting can be extended if needed.',
    },
    fees: [
      {
        title: 'Total Sentence and Execution Status Briefing',
        price: '₺5.000 – ₺10.000',
        items: [
          '0–5 files: ₺5.000',
          '5–20 files: ₺7.500',
          'Over 20 files: ₺10.000',
        ],
      },
      {
        title: 'Case File Briefing',
        price: '₺5.000',
        priceNote: '/ per file',
        items: [],
      },
      {
        title: 'Legal Questions and Consultation',
        price: '₺5.000',
        priceNote: '/ per matter',
        items: [
          'Optional video call with the lawyer on request',
          'Optional written response to the other party on request',
        ],
      },
      {
        title: 'Legal Opinion Preparation',
        price: '₺35.000 – ₺70.000',
        items: [
          'Under CMK Art. 67 and HMK Art. 293',
          'Fee varies with the complexity of the matter',
        ],
      },
    ],
    booker: {
      title: 'Appointment calendar',
      calendarHint: 'Complete your booking using the calendar above.',
      calendarFallback: 'If the calendar does not load, click here',
      calendarEmpty: 'The calendar is not configured yet. Please contact us via WhatsApp.',
    },
  },

  fr: {
    eyebrow: 'Rendez-vous',
    title: 'Planifier une consultation en ligne',
    subtitle:
      'Réservez un rendez-vous en ligne de 15 minutes. L\'entretien peut être prolongé si nécessaire.',
    footnote: 'Les instructions de paiement pour les prestations payantes sont envoyées avec la confirmation.',
    feesTitle: 'Tarifs',
    appointment: {
      id: 'online-appointment',
      duration: '15 Minutes',
      title: 'Rendez-vous en ligne',
      desc: 'Consultation de 15 minutes. L\'entretien peut être prolongé si nécessaire.',
    },
    fees: [
      {
        title: 'Briefing peine totale et situation d\'exécution',
        price: '₺5.000 – ₺10.000',
        items: [
          '0–5 dossiers : ₺5.000',
          '5–20 dossiers : ₺7.500',
          'Plus de 20 dossiers : ₺10.000',
        ],
      },
      {
        title: 'Briefing de dossier judiciaire',
        price: '₺5.000',
        priceNote: '/ par dossier',
        items: [],
      },
      {
        title: 'Questions juridiques et consultation',
        price: '₺5.000',
        priceNote: '/ par sujet',
        items: [
          'Visioconférence avec l\'avocat sur demande',
          'Réponse écrite à la partie adverse sur demande',
        ],
      },
      {
        title: 'Préparation d\'avis juridique',
        price: '₺35.000 – ₺70.000',
        items: [
          'Dans le cadre des art. 67 CMK et 293 HMK',
          'Honoraires selon la complexité du dossier',
        ],
      },
    ],
    booker: {
      title: 'Calendrier de rendez-vous',
      calendarHint: 'Finalisez votre réservation via le calendrier ci-dessus.',
      calendarFallback: 'Si le calendrier ne s\'affiche pas, cliquez ici',
      calendarEmpty: 'Le calendrier n\'est pas encore configuré. Contactez-nous via WhatsApp.',
    },
  },

  nl: {
    eyebrow: 'Afspraken',
    title: 'Plan een online consult',
    subtitle:
      'Boek een online afspraak van 15 minuten. Het gesprek kan indien nodig worden verlengd.',
    footnote: 'Betalingsinstructies voor betaalde diensten worden meegestuurd met de bevestiging.',
    feesTitle: 'Tarieven',
    appointment: {
      id: 'online-appointment',
      duration: '15 Minuten',
      title: 'Online afspraak',
      desc: 'Een consult van 15 minuten. Het gesprek kan indien nodig worden verlengd.',
    },
    fees: [
      {
        title: 'Briefing totale straf en executiestatus',
        price: '₺5.000 – ₺10.000',
        items: [
          '0–5 dossiers: ₺5.000',
          '5–20 dossiers: ₺7.500',
          'Meer dan 20 dossiers: ₺10.000',
        ],
      },
      {
        title: 'Dossierbriefing',
        price: '₺5.000',
        priceNote: '/ per dossier',
        items: [],
      },
      {
        title: 'Juridische vragen en consultatie',
        price: '₺5.000',
        priceNote: '/ per onderwerp',
        items: [
          'Optioneel videogesprek met de advocaat op verzoek',
          'Optioneel schriftelijk antwoord aan de wederpartij op verzoek',
        ],
      },
      {
        title: 'Juridisch advies / deskundigenoordeel',
        price: '₺35.000 – ₺70.000',
        items: [
          'In het kader van CMK art. 67 en HMK art. 293',
          'Honorarium naar complexiteit van de zaak',
        ],
      },
    ],
    booker: {
      title: 'Afspraakagenda',
      calendarHint: 'Rond uw afspraak af via de agenda hierboven.',
      calendarFallback: 'Als de agenda niet laadt, klik hier',
      calendarEmpty: 'De agenda is nog niet geconfigureerd. Neem contact op via WhatsApp.',
    },
  },

  tr: {
    eyebrow: 'Randevu',
    title: 'Online görüşme planlayın',
    subtitle:
      '15 dakikalık online randevu alın. Görüşme ihtiyaç halinde uzatılabilir.',
    footnote: 'Ücretli hizmetler için ödeme talimatları randevu onayıyla birlikte gönderilir.',
    feesTitle: 'Ücret tarifesi',
    appointment: {
      id: 'online-appointment',
      duration: '15 Dakika',
      title: 'Online Randevu',
      desc: 'Görüşme 15 dakikadır; ihtiyaç halinde uzatılabilir.',
    },
    fees: [
      {
        title: 'Toplam Ceza ve İnfaz Durumu Brifingi',
        price: '₺5.000 – ₺10.000',
        items: [
          '0–5 dosya: ₺5.000',
          '5–20 dosya: ₺7.500',
          '20 üstü dosya: ₺10.000',
        ],
      },
      {
        title: 'Dava Dosya Brifingi',
        price: '₺5.000',
        priceNote: '/ dosya başı',
        items: [],
      },
      {
        title: 'Hukuki Soru ve Danışma',
        price: '₺5.000',
        priceNote: '/ konu başı',
        items: [
          'Talep üzerine avukat ile görüntülü görüşme',
          'Talep üzerine karşı tarafa yazılı cevap',
        ],
      },
      {
        title: 'Hukuki Mütalaa Hazırlama',
        price: '₺35.000 – ₺70.000',
        items: [
          'CMK 67 / HMK 293 kapsamında',
          'Konunun yoğunluğuna göre ücret',
        ],
      },
    ],
    booker: {
      title: 'Randevu takvimi',
      calendarHint: 'Randevunuzu yukarıdaki takvimden tamamlayın.',
      calendarFallback: 'Takvim açılmıyorsa buraya tıklayın',
      calendarEmpty: 'Takvim henüz yapılandırılmadı. Lütfen WhatsApp üzerinden iletişime geçin.',
    },
  },
};
