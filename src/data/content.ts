/**
 * Localised content per country.
 * One entry per country slug. Strings are pre-localised and ready to render.
 *
 * Languages used:
 *   uk → English (en-GB)
 *   us → English (en-US)
 *   ca → English (en-CA)
 *   de → German  (de-DE)
 *   nl → Dutch   (nl-NL)
 *   fr → French  (fr-FR)
 *   no → Norwegian (no-NO)
 *   au → English (en-AU)
 */

export type Step = {
  n: string;
  title: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ModelPerks = {
  m3: string | null; // null = hide the perk badge but keep the card
  my: string | null;
  ms: string | null; // null = hide the whole card
  mx: string | null;
};

export type PageContent = {
  // ── SEO ──
  pageTitle: string;
  pageDescription: string;

  // ── Hero ──
  heroEyebrow: string;
  heroHeadlineMain: string;
  heroHeadlineSub: string;
  heroBody: string;
  ctaUseReferral: string;
  ctaHowItWorks: string;
  verifiedCodeLabel: string;

  // ── Trust counter ──
  trustCounterSuffix: string; // text that follows the big number

  // ── Models ──
  modelsTitle: string;
  modelsIntro: string;
  modelBenefitLabel: string;
  ctaOrder: string;
  ctaInventory: string;
  modelPerks: ModelPerks;
  // Combined summary used on the inventory card (e.g. "650 Free Miles or £500 Off")
  bothPerksSummary: string;
  inventoryCardTitle: string; // e.g. "Explore Inventory"

  // ── How it works ──
  howTitle: string;
  steps: [Step, Step, Step];
  ctaStartOrder: string;

  // ── Why use a referral ──
  whyTitle: string;
  whyBody: string[];

  // ── Videos ──
  videosTitle: string;

  // ── FAQ ──
  faqTitle: string;
  faqs: FaqItem[];

  // ── Region grid (kept in English) ──
  allCountriesTitle: string;
  allCountriesIntro: string;
  allCountriesFooter: string;
};

// =============================================================================
// UNITED KINGDOM
// =============================================================================

const uk: PageContent = {
  pageTitle: 'Tesla Referral Code UK 2026 — 650 Free Miles or £500 Off',
  pageDescription:
    'Use verified Tesla referral code hersh671564 in the UK for 650 free Supercharging miles on Model 3/Y or £500 off Model S/X. Applied automatically.',

  heroEyebrow: 'Tesla Referral Code · United Kingdom',
  heroHeadlineMain: '650 free Supercharging miles',
  heroHeadlineSub: 'or £500 off your new Tesla',
  heroBody:
    'Use this verified Tesla referral link when ordering a new Model 3, Model Y, Model S or Model X in the UK and the referral benefit is applied automatically at checkout.',
  ctaUseReferral: 'Use referral link',
  ctaHowItWorks: 'How it works',
  verifiedCodeLabel: 'Verified Tesla referral code:',

  trustCounterSuffix: 'Tesla buyers have claimed referral benefits',

  modelsTitle: 'Qualifying vehicles',
  modelsIntro:
    'The Tesla referral benefit applies to new orders of these models. Click any model to configure your order with the referral code already applied.',
  modelBenefitLabel: 'Referral benefit:',
  ctaOrder: 'Order with referral',
  ctaInventory: 'Explore inventory',
  modelPerks: {
    m3: '650 free Supercharging miles',
    my: '650 free Supercharging miles',
    ms: '£500 off',
    mx: '£500 off',
  },
  bothPerksSummary: '650 Free Supercharging Miles or £500 Off',
  inventoryCardTitle: 'Explore Inventory',

  howTitle: 'How to use the referral code',
  steps: [
    {
      n: '01',
      title: 'Click the referral link',
      body: 'Open the link below. It takes you straight to the Tesla website with the referral code pre-applied to your session.',
    },
    {
      n: '02',
      title: 'Configure your Tesla',
      body: 'Choose your Model 3, Model Y, Model S or Model X, pick your colour, wheels and interior, and place your order.',
    },
    {
      n: '03',
      title: 'Receive the benefit',
      body: 'Take delivery and the referral benefit — 650 free Supercharging miles or £500 off — is credited to your Tesla account automatically.',
    },
  ],
  ctaStartOrder: 'Start your order',

  whyTitle: 'Why use a Tesla referral code in the United Kingdom?',
  whyBody: [
    'Tesla’s referral programme is the only way to get an official discount on a new Tesla. Tesla does not run public discount codes or sales — the referral benefit is the single legitimate price reduction available to UK buyers, and it’s only unlocked when you order through an existing Tesla owner’s referral link.',
    'For Model 3 and Model Y orders, the benefit is 650 miles of free Supercharging. That’s enough free charging to cover roughly 1,500 miles of real-world driving — worth around £120 at current Supercharger pricing, and a useful credit for early road trips while you’re getting used to the car.',
    'For Model S and Model X orders, the benefit is £500 off the purchase price, applied automatically at checkout. You’ll see it deducted in your Tesla account before you confirm the order.',
    'Using a referral code costs you nothing. It doesn’t change the price you pay or the spec of the car — it just unlocks the benefit. The owner of the referral code (in this case, an existing UK Tesla driver) receives a matching reward from Tesla. That’s how the programme is designed.',
  ],

  videosTitle: 'See the cars',

  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'How do I use this Tesla referral code?',
      a: 'Click the "Use referral link" button anywhere on this page. It opens tesla.com with the referral code already attached to your session. Configure and order your Tesla as normal — the benefit is applied automatically when you place the order.',
    },
    {
      q: 'What do I get for using the referral code?',
      a: 'New Model 3 and Model Y orders receive 650 free Supercharging miles. New Model S and Model X orders receive £500 off the purchase price. Benefits are credited at delivery and managed inside your Tesla account.',
    },
    {
      q: 'Does the referral code work on inventory cars?',
      a: 'Yes. The referral benefit applies to most new Tesla orders, including in-stock inventory cars. It does not apply to used Tesla purchases or to leases.',
    },
    {
      q: 'Is this referral code official?',
      a: 'Yes. It’s a valid Tesla referral code issued by Tesla to an existing owner. Tesla’s referral programme is the only official way to receive a discount or perk on a new Tesla.',
    },
    {
      q: 'When do I need to apply the code?',
      a: 'Before you confirm your order. Tesla cannot add or change a referral code after the order has been submitted, so make sure you reach tesla.com via the link on this page.',
    },
    {
      q: 'Will I pay more if I use a referral code?',
      a: 'No. The price you pay is identical to ordering without a referral code — the benefit is on top, at no cost to you.',
    },
    {
      q: 'Can I use a referral code at a Tesla store?',
      a: 'Yes. If you order in person at a Tesla store, give the referral code "hersh671564" to the advisor before they submit the order. They will attach it to your purchase manually.',
    },
    {
      q: 'Is there a deadline?',
      a: 'Tesla can adjust the referral programme at any time. The current benefits (650 miles or £500 off) are what Tesla is advertising at the time of writing — always confirm on tesla.com before ordering.',
    },
  ],

  allCountriesTitle: 'All countries',
  allCountriesIntro:
    'Pick your country to use the referral code. The link sends you to Tesla’s site in your locale with the referral already applied.',
  allCountriesFooter:
    'More dedicated country pages coming soon. For now, every country sends you straight to your local tesla.com with the referral attached.',
};

// =============================================================================
// UNITED STATES
// =============================================================================

const us: PageContent = {
  pageTitle: 'Tesla Referral Code 2026 — 3 Months Free Full Self-Driving',
  pageDescription:
    'Use verified Tesla referral code hersh671564 in the US for 3 months of free Full Self-Driving (Supervised) on any new Tesla, including Cybertruck.',

  heroEyebrow: 'Tesla Referral Code · United States',
  heroHeadlineMain: '3 months of free Full Self-Driving',
  heroHeadlineSub: 'on your new Tesla — Supervised',
  heroBody:
    'Order a new Tesla through this verified referral link and you’ll get three months of Full Self-Driving (Supervised) at no extra cost. The trial is activated automatically when you take delivery.',
  ctaUseReferral: 'Use referral link',
  ctaHowItWorks: 'How it works',
  verifiedCodeLabel: 'Verified Tesla referral code:',

  trustCounterSuffix: 'Tesla buyers have claimed referral benefits',

  modelsTitle: 'Qualifying vehicles',
  modelsIntro:
    'The 3-month FSD (Supervised) trial applies to new orders of these Tesla vehicles. Click any model to configure your order with the referral code already applied.',
  modelBenefitLabel: 'Referral benefit:',
  ctaOrder: 'Order with referral',
  ctaInventory: 'Explore inventory',
  modelPerks: {
    m3: '3 months Full Self-Driving (Supervised)',
    my: '3 months Full Self-Driving (Supervised)',
    ms: '3 months Full Self-Driving (Supervised)',
    mx: '3 months Full Self-Driving (Supervised)',
  },
  bothPerksSummary: '3 months Full Self-Driving (Supervised)',
  inventoryCardTitle: 'Explore Inventory',

  howTitle: 'How to use the referral code',
  steps: [
    {
      n: '01',
      title: 'Click the referral link',
      body: 'Open the link below. It takes you straight to the Tesla website with the referral code pre-applied to your session.',
    },
    {
      n: '02',
      title: 'Order your Tesla',
      body: 'Choose your Model 3, Model Y, Model S, Model X or Cybertruck, configure it the way you want, and place your order.',
    },
    {
      n: '03',
      title: 'Get your FSD trial',
      body: 'When you take delivery, Tesla activates the 3-month Full Self-Driving (Supervised) trial on your car automatically. No extra steps.',
    },
  ],
  ctaStartOrder: 'Start your order',

  whyTitle: 'Why use a Tesla referral code in the US?',
  whyBody: [
    'Tesla’s referral programme is the only sanctioned way to get a bonus on a new Tesla in the United States. Tesla does not run general discounts or promo codes — the referral programme is the single legitimate path to an extra perk on top of your purchase.',
    'In the US the current perk is 3 months of Full Self-Driving (Supervised) — Tesla’s advanced driver-assistance package. Subscribing to FSD month-to-month costs $99/month, so the trial is worth roughly $300 in real value. You can decide whether to subscribe at the end of the trial or let it lapse.',
    'The referral applies to all new vehicle orders — Model 3, Model Y, Model S, Model X and Cybertruck — and is activated by Tesla when you take delivery. You don’t need to enter the code anywhere yourself if you start from this page.',
    'Using a referral code costs you nothing. It doesn’t change the price you pay or the spec of the car — it just unlocks the trial. The owner of the referral code (an existing US Tesla driver) receives a matching reward from Tesla. That’s how the programme is designed.',
  ],

  videosTitle: 'See the cars',

  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'How do I use this Tesla referral code?',
      a: 'Click any "Use referral link" button on this page. It opens tesla.com with the referral code attached to your session. Configure and order your Tesla as normal — the FSD trial is activated when you take delivery.',
    },
    {
      q: 'What do I get for using the referral code in the US?',
      a: 'Three months of Full Self-Driving (Supervised) at no extra charge. FSD (Supervised) is Tesla’s most advanced driver-assist package. Without a referral, you would pay $99/month for it.',
    },
    {
      q: 'Does the referral apply to Cybertruck?',
      a: 'Yes. The 3-month FSD (Supervised) trial applies to new Cybertruck orders as well as Model 3, Model Y, Model S and Model X.',
    },
    {
      q: 'Does the referral work on inventory cars?',
      a: 'Yes. The trial applies to most new Tesla orders, including in-stock inventory vehicles. It does not apply to used Tesla purchases or to leases (lease eligibility varies by state).',
    },
    {
      q: 'Is this referral code official?',
      a: 'Yes. It’s a valid Tesla referral code issued by Tesla to an existing owner. The referral programme is the only official way Tesla rewards new buyers with a perk.',
    },
    {
      q: 'When do I need to apply the code?',
      a: 'Before you confirm your order. Tesla cannot add or change a referral code after the order has been submitted, so make sure you reach tesla.com via the link on this page.',
    },
    {
      q: 'Will I pay more if I use a referral code?',
      a: 'No. The price you pay is identical to ordering without a referral code — the FSD trial is added on top, at no cost to you.',
    },
    {
      q: 'Can I use a referral code at a Tesla store?',
      a: 'Yes. If you order in person at a Tesla store, give the referral code "hersh671564" to the advisor before they submit the order.',
    },
  ],

  allCountriesTitle: 'All countries',
  allCountriesIntro:
    'Pick your country to use the referral code. The link sends you to Tesla’s site in your locale with the referral already applied.',
  allCountriesFooter:
    'More dedicated country pages coming soon. For now, every country sends you straight to your local tesla.com with the referral attached.',
};

// =============================================================================
// CANADA  (English primary; see also fr-CA on the link variants)
// =============================================================================

const ca: PageContent = {
  pageTitle: 'Tesla Referral Code Canada 2026 — 3 Months Free Full Self-Driving',
  pageDescription:
    'Use verified Tesla referral code hersh671564 in Canada for 3 months of free Full Self-Driving (Supervised) on any new Tesla, incl. Cybertruck.',

  heroEyebrow: 'Tesla Referral Code · Canada',
  heroHeadlineMain: '3 months of free Full Self-Driving',
  heroHeadlineSub: 'on your new Tesla — Supervised',
  heroBody:
    'Order a new Tesla in Canada through this verified referral link and you’ll get three months of Full Self-Driving (Supervised) at no extra cost. The trial is activated automatically when you take delivery.',
  ctaUseReferral: 'Use referral link',
  ctaHowItWorks: 'How it works',
  verifiedCodeLabel: 'Verified Tesla referral code:',

  trustCounterSuffix: 'Tesla buyers have claimed referral benefits',

  modelsTitle: 'Qualifying vehicles',
  modelsIntro:
    'The 3-month FSD (Supervised) trial applies to new orders of these Tesla vehicles in Canada.',
  modelBenefitLabel: 'Referral benefit:',
  ctaOrder: 'Order with referral',
  ctaInventory: 'Explore inventory',
  modelPerks: {
    m3: '3 months Full Self-Driving (Supervised)',
    my: '3 months Full Self-Driving (Supervised)',
    ms: '3 months Full Self-Driving (Supervised)',
    mx: '3 months Full Self-Driving (Supervised)',
  },
  bothPerksSummary: '3 months Full Self-Driving (Supervised)',
  inventoryCardTitle: 'Explore Inventory',

  howTitle: 'How to use the referral code',
  steps: [
    {
      n: '01',
      title: 'Click the referral link',
      body: 'Open the link below. It takes you straight to tesla.com (Canada) with the referral code pre-applied to your session.',
    },
    {
      n: '02',
      title: 'Order your Tesla',
      body: 'Choose Model 3, Model Y, Model S, Model X or Cybertruck, configure it the way you want, and place your order.',
    },
    {
      n: '03',
      title: 'Get your FSD trial',
      body: 'When you take delivery, Tesla activates the 3-month Full Self-Driving (Supervised) trial on your vehicle automatically.',
    },
  ],
  ctaStartOrder: 'Start your order',

  whyTitle: 'Why use a Tesla referral code in Canada?',
  whyBody: [
    'Tesla’s referral programme is the only sanctioned way to get a bonus on a new Tesla in Canada. Tesla does not run public discount codes or sales — the referral benefit is the single legitimate path to a perk on top of your purchase.',
    'In Canada the current perk is 3 months of Full Self-Driving (Supervised) — Tesla’s most advanced driver-assistance package. The monthly subscription normally costs C$99, so the trial is worth roughly C$300 in real value over its lifetime.',
    'The referral applies to all new vehicle orders — Model 3, Model Y, Model S, Model X and Cybertruck — and is activated by Tesla when you take delivery. You don’t need to enter the code anywhere yourself if you start your order from this page.',
    'Using a referral code costs you nothing. It doesn’t change the price you pay or the spec of the car. The owner of the referral code (an existing Canadian Tesla driver) receives a matching reward from Tesla.',
  ],

  videosTitle: 'See the cars',

  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'How do I use this Tesla referral code?',
      a: 'Click any "Use referral link" button on this page. It opens tesla.com (Canada) with the referral code attached to your session. Configure and order your Tesla as normal — the FSD trial is activated when you take delivery.',
    },
    {
      q: 'What do I get for using the referral code in Canada?',
      a: 'Three months of Full Self-Driving (Supervised) at no extra charge. FSD (Supervised) is Tesla’s most advanced driver-assist package; the monthly subscription is C$99 without a referral.',
    },
    {
      q: 'Does the referral apply to Cybertruck?',
      a: 'Yes. The 3-month FSD (Supervised) trial applies to new Cybertruck orders as well as Model 3, Model Y, Model S and Model X in Canada.',
    },
    {
      q: 'Does the referral work on inventory cars?',
      a: 'Yes. The trial applies to most new Tesla orders, including in-stock inventory vehicles. It does not apply to used Tesla purchases.',
    },
    {
      q: 'Is the referral page available in French?',
      a: 'Yes. Use the country switcher at the top of the page and pick "Français" under Canada to open the French-language Tesla referral page (fr_ca) with the same referral code applied.',
    },
    {
      q: 'When do I need to apply the code?',
      a: 'Before you confirm your order. Tesla cannot add or change a referral code after the order has been submitted, so reach tesla.com via the link on this page.',
    },
    {
      q: 'Will I pay more if I use a referral code?',
      a: 'No. The price you pay is identical to ordering without a referral code — the FSD trial is added on top, at no cost to you.',
    },
    {
      q: 'Can I use a referral code at a Tesla store?',
      a: 'Yes. If you order in person at a Tesla store in Canada, give the referral code "hersh671564" to the advisor before they submit the order.',
    },
  ],

  allCountriesTitle: 'All countries',
  allCountriesIntro:
    'Pick your country to use the referral code. The link sends you to Tesla’s site in your locale with the referral already applied.',
  allCountriesFooter:
    'More dedicated country pages coming soon. For now, every country sends you straight to your local tesla.com with the referral attached.',
};

// =============================================================================
// GERMANY (Deutsch)
// =============================================================================

const de: PageContent = {
  pageTitle: 'Tesla Empfehlungscode 2026 — 1.000 km gratis Supercharging',
  pageDescription:
    'Nutze den verifizierten Tesla Empfehlungscode hersh671564 in Deutschland: 1.000 km gratis Supercharging auf Model 3/Y oder 500 € Rabatt auf Model S/X.',

  heroEyebrow: 'Tesla Empfehlungscode · Deutschland',
  heroHeadlineMain: '1.000 km kostenloses Supercharging',
  heroHeadlineSub: 'oder 500 € Rabatt auf deinen neuen Tesla',
  heroBody:
    'Nutze diesen verifizierten Empfehlungslink bei deiner Bestellung von Model 3, Model Y, Model S oder Model X in Deutschland — der Vorteil wird beim Checkout automatisch deinem Konto gutgeschrieben.',
  ctaUseReferral: 'Empfehlungslink verwenden',
  ctaHowItWorks: 'So funktioniert’s',
  verifiedCodeLabel: 'Verifizierter Tesla Empfehlungscode:',

  trustCounterSuffix: 'Tesla-Käufer haben bereits Empfehlungsvorteile eingelöst',

  modelsTitle: 'Berechtigte Fahrzeuge',
  modelsIntro:
    'Der Tesla Empfehlungsbonus gilt für Neubestellungen dieser Modelle. Klicke auf ein Modell, um deine Bestellung mit bereits angewendetem Empfehlungscode zu konfigurieren.',
  modelBenefitLabel: 'Empfehlungsbonus:',
  ctaOrder: 'Mit Empfehlung bestellen',
  ctaInventory: 'Bestand erkunden',
  modelPerks: {
    m3: '1.000 km kostenloses Supercharging',
    my: '1.000 km kostenloses Supercharging',
    ms: '500 € Rabatt',
    mx: '500 € Rabatt',
  },
  bothPerksSummary: '1.000 km kostenloses Supercharging oder 500 € Rabatt',
  inventoryCardTitle: 'Bestand erkunden',

  howTitle: 'So nutzt du den Empfehlungscode',
  steps: [
    {
      n: '01',
      title: 'Empfehlungslink öffnen',
      body: 'Klicke auf den Link unten. Er führt dich direkt zur Tesla-Website, der Empfehlungscode ist bereits angewendet.',
    },
    {
      n: '02',
      title: 'Tesla konfigurieren',
      body: 'Wähle Model 3, Model Y, Model S oder Model X, konfiguriere Farbe, Räder und Innenraum und schließe deine Bestellung ab.',
    },
    {
      n: '03',
      title: 'Vorteil erhalten',
      body: 'Nach der Übergabe wird dir der Empfehlungsbonus — 1.000 km gratis Supercharging oder 500 € Rabatt — automatisch in deinem Tesla-Konto gutgeschrieben.',
    },
  ],
  ctaStartOrder: 'Bestellung starten',

  whyTitle: 'Warum einen Tesla Empfehlungscode in Deutschland nutzen?',
  whyBody: [
    'Das Empfehlungsprogramm von Tesla ist die einzige offizielle Möglichkeit, einen Bonus auf einen Neuwagen zu bekommen. Tesla bietet keine öffentlichen Rabattaktionen — der Empfehlungsbonus ist der einzige legitime Preisvorteil für deutsche Käufer und wird ausschließlich über den Empfehlungslink eines bestehenden Tesla-Besitzers freigeschaltet.',
    'Für Bestellungen von Model 3 und Model Y beträgt der Vorteil 1.000 km kostenloses Supercharging. Das entspricht je nach Fahrweise rund 200 kWh Gratis-Ladung — bei aktuellen Supercharger-Preisen ein Gegenwert von rund 80 €, perfekt für die ersten Wochen mit dem neuen Wagen.',
    'Für Model S und Model X gibt es 500 € Rabatt auf den Kaufpreis, automatisch beim Checkout abgezogen. Du siehst den Abzug direkt in deinem Tesla-Konto, bevor du die Bestellung bestätigst.',
    'Der Empfehlungscode kostet dich nichts. Der Preis und die Ausstattung bleiben gleich — der Bonus kommt obendrauf. Der Empfehlende (ein bestehender Tesla-Fahrer) erhält ebenfalls eine Belohnung von Tesla. So funktioniert das Programm.',
  ],

  videosTitle: 'Die Fahrzeuge im Überblick',

  faqTitle: 'Häufige Fragen',
  faqs: [
    {
      q: 'Wie nutze ich den Tesla Empfehlungscode?',
      a: 'Klicke auf einen der "Empfehlungslink verwenden"-Buttons auf dieser Seite. Tesla.com öffnet sich mit bereits aktiviertem Empfehlungscode — du konfigurierst und bestellst deinen Tesla wie gewohnt, der Bonus wird automatisch gutgeschrieben.',
    },
    {
      q: 'Was bekomme ich für die Nutzung des Empfehlungscodes in Deutschland?',
      a: 'Bei Model 3 und Model Y erhältst du 1.000 km kostenloses Supercharging. Bei Model S und Model X bekommst du 500 € Rabatt auf den Kaufpreis. Die Vorteile werden bei Übergabe gutgeschrieben und über dein Tesla-Konto verwaltet.',
    },
    {
      q: 'Funktioniert der Code auch bei Lagerfahrzeugen?',
      a: 'Ja. Der Empfehlungsbonus gilt für die meisten Neufahrzeuge, einschließlich verfügbarer Bestandsfahrzeuge. Bei Gebrauchtwagen oder Leasingverträgen wird der Bonus nicht gewährt.',
    },
    {
      q: 'Ist dieser Empfehlungscode offiziell?',
      a: 'Ja. Es handelt sich um einen gültigen Empfehlungscode, den Tesla einem bestehenden Tesla-Fahrer ausgestellt hat. Das Empfehlungsprogramm ist die einzige offizielle Möglichkeit, einen Preisvorteil auf einen neuen Tesla zu erhalten.',
    },
    {
      q: 'Wann muss ich den Code anwenden?',
      a: 'Vor dem Abschluss der Bestellung. Tesla kann einen Empfehlungscode nach der Auftragsbestätigung nicht mehr nachträglich anwenden — stelle daher sicher, dass du tesla.com über den Link auf dieser Seite erreichst.',
    },
    {
      q: 'Bezahle ich mehr, wenn ich einen Empfehlungscode nutze?',
      a: 'Nein. Der Preis ist identisch mit einer Bestellung ohne Empfehlung — der Vorteil kommt obendrauf, ohne zusätzliche Kosten für dich.',
    },
    {
      q: 'Kann ich den Code im Tesla Store nutzen?',
      a: 'Ja. Nenne dem Tesla-Berater bei einer Bestellung im Store den Empfehlungscode "hersh671564", bevor die Bestellung abgeschickt wird. Der Code wird dann manuell hinzugefügt.',
    },
    {
      q: 'Gibt es eine Frist?',
      a: 'Tesla kann das Empfehlungsprogramm jederzeit anpassen. Die aktuellen Vorteile (1.000 km gratis Supercharging oder 500 € Rabatt) sind die zum Zeitpunkt der Veröffentlichung beworbenen Konditionen — prüfe vor der Bestellung immer den aktuellen Stand auf tesla.com.',
    },
  ],

  allCountriesTitle: 'Alle Länder',
  allCountriesIntro:
    'Wähle dein Land, um den Empfehlungscode zu verwenden. Der Link führt dich zur lokalen Tesla-Seite mit bereits aktiviertem Code.',
  allCountriesFooter:
    'Weitere länderspezifische Seiten folgen. Aktuell führt jedes Land direkt zur jeweiligen tesla.com-Seite mit aktivem Empfehlungscode.',
};

// =============================================================================
// NETHERLANDS (Nederlands)
// =============================================================================

const nl: PageContent = {
  pageTitle: 'Tesla Referral Code Nederland 2026 — 1.000 km gratis Supercharging',
  pageDescription:
    'Gebruik de geverifieerde Tesla referral code hersh671564 in Nederland: 1.000 km gratis Supercharging op Model 3/Y of € 500 korting op Model S/X.',

  heroEyebrow: 'Tesla Referral Code · Nederland',
  heroHeadlineMain: '1.000 km gratis Supercharging',
  heroHeadlineSub: 'of € 500 korting op je nieuwe Tesla',
  heroBody:
    'Gebruik deze geverifieerde Tesla referral-link bij je bestelling van een nieuwe Model 3, Model Y, Model S of Model X in Nederland — de korting wordt automatisch toegepast bij het afrekenen.',
  ctaUseReferral: 'Referral link gebruiken',
  ctaHowItWorks: 'Hoe het werkt',
  verifiedCodeLabel: 'Geverifieerde Tesla referral code:',

  trustCounterSuffix: 'Tesla-kopers hebben referral-voordelen geclaimd',

  modelsTitle: 'Modellen die in aanmerking komen',
  modelsIntro:
    'De Tesla referral-korting geldt voor nieuwe bestellingen van deze modellen. Klik op een model om je bestelling te configureren met de referral code al toegepast.',
  modelBenefitLabel: 'Referral-voordeel:',
  ctaOrder: 'Bestellen met referral',
  ctaInventory: 'Ontdek voorraadmodellen',
  modelPerks: {
    m3: '1.000 km gratis Supercharging',
    my: '1.000 km gratis Supercharging',
    ms: '€ 500 korting',
    mx: '€ 500 korting',
  },
  bothPerksSummary: '1.000 km gratis Supercharging of € 500 korting',
  inventoryCardTitle: 'Ontdek voorraadmodellen',

  howTitle: 'Zo gebruik je de referral code',
  steps: [
    {
      n: '01',
      title: 'Klik op de referral-link',
      body: 'Open de link hieronder. Je komt direct op tesla.com met de referral code al actief in je sessie.',
    },
    {
      n: '02',
      title: 'Configureer je Tesla',
      body: 'Kies Model 3, Model Y, Model S of Model X, stel je kleur, wielen en interieur in en plaats je bestelling.',
    },
    {
      n: '03',
      title: 'Ontvang het voordeel',
      body: 'Bij aflevering wordt het referral-voordeel — 1.000 km gratis Supercharging of € 500 korting — automatisch op je Tesla-account bijgeschreven.',
    },
  ],
  ctaStartOrder: 'Start je bestelling',

  whyTitle: 'Waarom een Tesla referral code in Nederland gebruiken?',
  whyBody: [
    'Tesla’s referral-programma is de enige officiële manier om een korting op een nieuwe Tesla te krijgen. Tesla biedt geen publieke kortingscodes of acties — de referral-korting is het enige legitieme prijsvoordeel voor Nederlandse kopers en wordt alleen geactiveerd via de referral-link van een bestaande Tesla-rijder.',
    'Voor bestellingen van Model 3 en Model Y bedraagt het voordeel 1.000 km gratis Supercharging. Dat is genoeg gratis laadtegoed om de eerste paar maanden zonder kosten te kunnen Superchargen — ongeveer € 80 waard tegen de huidige Supercharger-tarieven.',
    'Voor Model S en Model X krijg je € 500 korting op de aanschafprijs, automatisch verrekend bij het afrekenen. Je ziet de korting direct in je Tesla-account voordat je de bestelling bevestigt.',
    'Een referral code gebruiken kost je niets. De prijs en de specificaties van de auto blijven gelijk — het voordeel komt erbovenop. De eigenaar van de referral code (een bestaande Tesla-rijder) ontvangt ook een beloning van Tesla. Zo werkt het programma.',
  ],

  videosTitle: 'Bekijk de auto’s',

  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Hoe gebruik ik deze Tesla referral code?',
      a: 'Klik op een van de "Referral link gebruiken"-knoppen op deze pagina. Tesla.com opent met de referral code al actief — configureer en bestel je Tesla zoals gewoonlijk, het voordeel wordt automatisch toegepast.',
    },
    {
      q: 'Wat krijg ik voor het gebruik van de referral code in Nederland?',
      a: 'Bij Model 3 en Model Y krijg je 1.000 km gratis Supercharging. Bij Model S en Model X krijg je € 500 korting op de aanschafprijs. Beide voordelen worden bij aflevering bijgeschreven en beheerd via je Tesla-account.',
    },
    {
      q: 'Werkt de code ook op voorraadmodellen?',
      a: 'Ja. Het referral-voordeel geldt voor de meeste nieuwe Tesla-bestellingen, inclusief voorraadauto’s. Het geldt niet voor gebruikte Tesla’s of voor lease-contracten.',
    },
    {
      q: 'Is deze referral code officieel?',
      a: 'Ja. Het is een geldige referral code die Tesla heeft uitgegeven aan een bestaande eigenaar. Het referral-programma is de enige officiële manier waarop Tesla nieuwe kopers een voordeel geeft.',
    },
    {
      q: 'Wanneer moet ik de code toepassen?',
      a: 'Voordat je de bestelling bevestigt. Tesla kan een referral code niet meer toevoegen na het plaatsen van de bestelling — zorg dus dat je tesla.com bezoekt via de link op deze pagina.',
    },
    {
      q: 'Betaal ik meer als ik een referral code gebruik?',
      a: 'Nee. De prijs is identiek aan een bestelling zonder referral — het voordeel komt er bovenop, zonder extra kosten voor jou.',
    },
    {
      q: 'Kan ik de referral code in een Tesla-winkel gebruiken?',
      a: 'Ja. Geef bij een bestelling in de Tesla store de referral code "hersh671564" door aan de adviseur voordat de bestelling wordt ingediend.',
    },
    {
      q: 'Is er een deadline?',
      a: 'Tesla kan het referral-programma op elk moment aanpassen. De huidige voordelen (1.000 km gratis Supercharging of € 500 korting) zijn de op het moment van schrijven geadverteerde voorwaarden — controleer altijd tesla.com voor de meest actuele aanbieding.',
    },
  ],

  allCountriesTitle: 'Alle landen',
  allCountriesIntro:
    'Kies je land om de referral code te gebruiken. De link brengt je naar de lokale Tesla-website met de referral al actief.',
  allCountriesFooter:
    'Meer landenpagina’s volgen binnenkort. Voorlopig brengt elk land je direct naar de lokale tesla.com met de referral al actief.',
};

// =============================================================================
// FRANCE (Français)
// =============================================================================

const fr: PageContent = {
  pageTitle: 'Code de parrainage Tesla France 2026 — 1 000 km Supercharge gratuit',
  pageDescription:
    'Utilisez le code de parrainage Tesla vérifié hersh671564 en France : 1 000 km de Supercharge gratuit sur Model 3/Y ou 500 € sur Model S/X.',

  heroEyebrow: 'Code de parrainage Tesla · France',
  heroHeadlineMain: '1 000 km de Supercharge gratuite',
  heroHeadlineSub: 'ou 500 € de réduction sur votre nouvelle Tesla',
  heroBody:
    'Utilisez ce lien de parrainage Tesla vérifié pour commander un nouveau Model 3, Model Y, Model S ou Model X en France — l’avantage est appliqué automatiquement à la commande.',
  ctaUseReferral: 'Utiliser le code de parrainage',
  ctaHowItWorks: 'Comment ça marche',
  verifiedCodeLabel: 'Code de parrainage Tesla vérifié :',

  trustCounterSuffix: 'acheteurs Tesla ont profité du parrainage',

  modelsTitle: 'Véhicules éligibles',
  modelsIntro:
    'L’avantage de parrainage Tesla s’applique aux commandes neuves de ces modèles. Cliquez sur un modèle pour configurer votre commande avec le code déjà appliqué.',
  modelBenefitLabel: 'Avantage parrainage :',
  ctaOrder: 'Commander avec parrainage',
  ctaInventory: 'Découvrir les véhicules disponibles',
  modelPerks: {
    m3: '1 000 km de Supercharge gratuite',
    my: '1 000 km de Supercharge gratuite',
    ms: '500 € de réduction',
    mx: '500 € de réduction',
  },
  bothPerksSummary: '1 000 km de Supercharge gratuite ou 500 € de réduction',
  inventoryCardTitle: 'Découvrir les véhicules disponibles',

  howTitle: 'Comment utiliser le code de parrainage',
  steps: [
    {
      n: '01',
      title: 'Cliquez sur le lien',
      body: 'Ouvrez le lien ci-dessous. Vous arrivez directement sur tesla.com avec le code de parrainage déjà pré-rempli dans votre session.',
    },
    {
      n: '02',
      title: 'Configurez votre Tesla',
      body: 'Choisissez Model 3, Model Y, Model S ou Model X, sélectionnez votre couleur, vos jantes et votre intérieur, puis passez commande.',
    },
    {
      n: '03',
      title: 'Recevez l’avantage',
      body: 'À la livraison, l’avantage de parrainage — 1 000 km de Supercharge gratuite ou 500 € de réduction — est crédité automatiquement sur votre compte Tesla.',
    },
  ],
  ctaStartOrder: 'Démarrer ma commande',

  whyTitle: 'Pourquoi utiliser un code de parrainage Tesla en France ?',
  whyBody: [
    'Le programme de parrainage Tesla est la seule façon d’obtenir une réduction officielle sur une nouvelle Tesla. Tesla ne propose pas de code promo public ni de soldes — l’avantage parrainage est la seule réduction légitime accessible aux acheteurs français, et il n’est débloqué qu’en commandant via le lien d’un propriétaire Tesla existant.',
    'Pour les commandes de Model 3 et Model Y, l’avantage est de 1 000 km de Supercharge gratuite. Cela représente environ 200 kWh d’électricité offerte aux Superchargeurs — soit environ 80 € au tarif Superchargeur actuel — idéal pour les premières semaines avec votre nouvelle voiture.',
    'Pour Model S et Model X, l’avantage est une réduction de 500 € sur le prix d’achat, appliquée automatiquement lors du paiement. La réduction est visible dans votre compte Tesla avant la validation de la commande.',
    'Utiliser un code de parrainage ne vous coûte rien. Le prix et les options de la voiture restent identiques — l’avantage s’ajoute. Le parrain (un conducteur Tesla existant) reçoit également une récompense de Tesla. C’est ainsi que fonctionne le programme.',
  ],

  videosTitle: 'Découvrez les véhicules',

  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Comment utiliser ce code de parrainage Tesla ?',
      a: 'Cliquez sur l’un des boutons "Utiliser le code de parrainage" de cette page. Tesla.com s’ouvre avec le code déjà associé à votre session — configurez et commandez votre Tesla normalement, l’avantage est appliqué automatiquement.',
    },
    {
      q: 'Que m’apporte le code de parrainage en France ?',
      a: 'Pour Model 3 et Model Y, vous obtenez 1 000 km de Supercharge gratuite. Pour Model S et Model X, vous obtenez 500 € de réduction sur le prix d’achat. Les deux avantages sont crédités à la livraison et gérés depuis votre compte Tesla.',
    },
    {
      q: 'Le code fonctionne-t-il sur les véhicules en stock ?',
      a: 'Oui. L’avantage parrainage s’applique à la plupart des commandes Tesla neuves, y compris les véhicules en stock. Il ne s’applique pas aux véhicules d’occasion ni aux contrats de location longue durée.',
    },
    {
      q: 'Ce code de parrainage est-il officiel ?',
      a: 'Oui. C’est un code de parrainage Tesla valide, attribué par Tesla à un propriétaire existant. Le programme de parrainage est le seul moyen officiel proposé par Tesla pour offrir un avantage aux nouveaux acheteurs.',
    },
    {
      q: 'Quand dois-je appliquer le code ?',
      a: 'Avant de valider votre commande. Tesla ne peut pas ajouter un code de parrainage après la confirmation de commande — assurez-vous donc d’accéder à tesla.com via le lien de cette page.',
    },
    {
      q: 'Vais-je payer plus cher avec un code de parrainage ?',
      a: 'Non. Le prix payé est identique à celui d’une commande sans parrainage — l’avantage s’ajoute, sans frais supplémentaire pour vous.',
    },
    {
      q: 'Puis-je utiliser ce code en boutique Tesla ?',
      a: 'Oui. Lors d’une commande en boutique, communiquez le code de parrainage "hersh671564" à votre conseiller avant que la commande ne soit validée.',
    },
    {
      q: 'Y a-t-il une date limite ?',
      a: 'Tesla peut modifier le programme de parrainage à tout moment. Les avantages actuels (1 000 km de Supercharge ou 500 € de réduction) sont ceux annoncés au moment de la publication — vérifiez toujours sur tesla.com avant de commander.',
    },
  ],

  allCountriesTitle: 'Tous les pays',
  allCountriesIntro:
    'Choisissez votre pays pour utiliser le code de parrainage. Le lien vous mène sur tesla.com dans votre langue, avec le parrainage déjà appliqué.',
  allCountriesFooter:
    'D’autres pages pays arrivent prochainement. Pour le moment, chaque pays renvoie directement vers tesla.com local avec le parrainage actif.',
};

// =============================================================================
// NORWAY (Norsk)
// =============================================================================

const no: PageContent = {
  pageTitle: 'Tesla referral-kode Norge 2026 — 1 000 km gratis Supercharging',
  pageDescription:
    'Bruk den verifiserte Tesla referral-koden hersh671564 i Norge: 1 000 km gratis Supercharging på Model 3/Y eller 5 000 kr avslag på S/X.',

  heroEyebrow: 'Tesla referral-kode · Norge',
  heroHeadlineMain: '1 000 km gratis Supercharging',
  heroHeadlineSub: 'eller 5 000 kr i avslag på din nye Tesla',
  heroBody:
    'Bruk denne verifiserte referral-lenken når du bestiller en ny Model 3, Model Y, Model S eller Model X i Norge — fordelen krediteres automatisk på Tesla-kontoen din ved overlevering.',
  ctaUseReferral: 'Bruk referral-lenken',
  ctaHowItWorks: 'Slik fungerer det',
  verifiedCodeLabel: 'Verifisert Tesla referral-kode:',

  trustCounterSuffix: 'Tesla-kjøpere har benyttet referral-fordelene',

  modelsTitle: 'Kvalifiserende biler',
  modelsIntro:
    'Tesla referral-bonusen gjelder nye bestillinger av disse modellene. Klikk på en modell for å konfigurere bestillingen med referral-koden allerede aktivert.',
  modelBenefitLabel: 'Referral-fordel:',
  ctaOrder: 'Bestill med referral',
  ctaInventory: 'Utforsk ferdigbygde biler',
  modelPerks: {
    m3: '1 000 km gratis Supercharging',
    my: '1 000 km gratis Supercharging',
    ms: 'Avslag 5 000 kr',
    mx: 'Avslag 5 000 kr',
  },
  bothPerksSummary: '1 000 km gratis Supercharging eller 5 000 kr i avslag',
  inventoryCardTitle: 'Utforsk ferdigbygde biler',

  howTitle: 'Slik bruker du referral-koden',
  steps: [
    {
      n: '01',
      title: 'Klikk på referral-lenken',
      body: 'Åpne lenken nedenfor. Du kommer direkte til tesla.com med referral-koden allerede aktivert i økten din.',
    },
    {
      n: '02',
      title: 'Konfigurer Tesla-en',
      body: 'Velg Model 3, Model Y, Model S eller Model X. Velg farge, hjul og interiør og legg inn bestillingen.',
    },
    {
      n: '03',
      title: 'Få fordelen',
      body: 'Ved overlevering blir fordelen — 1 000 km gratis Supercharging eller 5 000 kr i avslag — automatisk lagt til på Tesla-kontoen din.',
    },
  ],
  ctaStartOrder: 'Start bestillingen',

  whyTitle: 'Hvorfor bruke en Tesla referral-kode i Norge?',
  whyBody: [
    'Teslas referral-program er den eneste offisielle måten å få en bonus på en ny Tesla. Tesla har ingen offentlige rabattkoder eller kampanjer — referral-fordelen er det eneste legitime prisavslaget tilgjengelig for norske kjøpere, og blir kun aktivert ved å bestille via referral-lenken til en eksisterende Tesla-eier.',
    'For bestillinger av Model 3 og Model Y er fordelen 1 000 km gratis Supercharging. Det tilsvarer rundt 200 kWh gratis hurtiglading — verdt rundt 1 000 kr ved dagens Supercharger-priser i Norge, og en god start på Tesla-eierskapet.',
    'For Model S og Model X gjelder 5 000 kr i avslag på kjøpesummen, automatisk trukket fra ved bestilling. Du ser avslaget direkte på Tesla-kontoen før du bekrefter ordren.',
    'Bruken av referral-koden koster deg ingenting. Prisen og spesifikasjonene på bilen er de samme — fordelen kommer i tillegg. Eieren av referral-koden (en eksisterende Tesla-eier) får også en belønning fra Tesla. Slik er programmet designet.',
  ],

  videosTitle: 'Se bilene',

  faqTitle: 'Ofte stilte spørsmål',
  faqs: [
    {
      q: 'Hvordan bruker jeg denne Tesla referral-koden?',
      a: 'Klikk på en av "Bruk referral-lenken"-knappene på denne siden. Tesla.com åpnes med referral-koden allerede aktivert — konfigurer og bestill Tesla-en som vanlig, fordelen legges til automatisk.',
    },
    {
      q: 'Hva får jeg ved å bruke referral-koden i Norge?',
      a: 'På Model 3 og Model Y får du 1 000 km gratis Supercharging. På Model S og Model X får du 5 000 kr i avslag på kjøpesummen. Begge fordelene krediteres ved overlevering og administreres via Tesla-kontoen din.',
    },
    {
      q: 'Fungerer koden på lagerbiler?',
      a: 'Ja. Referral-fordelen gjelder de fleste nye Tesla-bestillinger, inkludert tilgjengelige lagerbiler. Den gjelder ikke for brukte Tesla-biler eller for leasingavtaler.',
    },
    {
      q: 'Er denne referral-koden offisiell?',
      a: 'Ja. Det er en gyldig referral-kode utstedt av Tesla til en eksisterende eier. Referral-programmet er den eneste offisielle måten Tesla belønner nye kjøpere på.',
    },
    {
      q: 'Når må jeg bruke koden?',
      a: 'Før du bekrefter bestillingen. Tesla kan ikke legge til en referral-kode etter at bestillingen er sendt — sørg derfor for å gå til tesla.com via lenken på denne siden.',
    },
    {
      q: 'Betaler jeg mer ved å bruke en referral-kode?',
      a: 'Nei. Prisen du betaler er identisk med en bestilling uten referral — fordelen kommer i tillegg, helt uten kostnad for deg.',
    },
    {
      q: 'Kan jeg bruke referral-koden i en Tesla-butikk?',
      a: 'Ja. Ved bestilling i butikk gir du referral-koden "hersh671564" til Tesla-rådgiveren før bestillingen sendes inn.',
    },
    {
      q: 'Er det en frist?',
      a: 'Tesla kan endre referral-programmet når som helst. De nåværende fordelene (1 000 km gratis Supercharging eller 5 000 kr i avslag) er det Tesla annonserer på publiseringstidspunktet — sjekk alltid tesla.com før du bestiller.',
    },
  ],

  allCountriesTitle: 'Alle land',
  allCountriesIntro:
    'Velg landet ditt for å bruke referral-koden. Lenken sender deg til Teslas lokale nettside med referral-koden allerede aktivert.',
  allCountriesFooter:
    'Flere dedikerte landsider kommer snart. For nå sender hvert land deg direkte til lokal tesla.com med referral-koden aktivert.',
};

// =============================================================================
// AUSTRALIA (English)
// =============================================================================

const au: PageContent = {
  pageTitle: 'Tesla Referral Code Australia 2026 — A$350 Off a New Tesla',
  pageDescription:
    'Use verified Tesla referral code hersh671564 in Australia to get up to A$350 off a new Model 3 or Model Y. Discount applied automatically at checkout.',

  heroEyebrow: 'Tesla Referral Code · Australia',
  heroHeadlineMain: 'Up to A$350 off',
  heroHeadlineSub: 'a new Tesla in Australia',
  heroBody:
    'Order a new Model 3 or Model Y through this verified Tesla referral link and you’ll get up to A$350 off the purchase price. The referral discount is applied automatically at checkout.',
  ctaUseReferral: 'Use referral link',
  ctaHowItWorks: 'How it works',
  verifiedCodeLabel: 'Verified Tesla referral code:',

  trustCounterSuffix: 'Tesla buyers have claimed referral benefits',

  modelsTitle: 'Qualifying vehicles',
  modelsIntro:
    'The current A$350 referral discount applies to new Model 3 orders in Australia. Other models can be ordered through the referral link too, even when no specific perk is shown.',
  modelBenefitLabel: 'Referral benefit:',
  ctaOrder: 'Order with referral',
  ctaInventory: 'Explore inventory',
  modelPerks: {
    m3: 'A$350 off',
    my: '',
    ms: null,
    mx: null,
  },
  bothPerksSummary: 'Up to A$350 off a new Tesla',
  inventoryCardTitle: 'Explore Inventory',

  howTitle: 'How to use the referral code',
  steps: [
    {
      n: '01',
      title: 'Click the referral link',
      body: 'Open the link below. It takes you straight to tesla.com (Australia) with the referral code pre-applied to your session.',
    },
    {
      n: '02',
      title: 'Configure your Tesla',
      body: 'Choose your Tesla, configure colour, wheels and interior, and place your order with the referral code still attached.',
    },
    {
      n: '03',
      title: 'Receive the benefit',
      body: 'Take delivery and the referral discount — up to A$350 off — is credited automatically by Tesla. No code entry needed if you start from this page.',
    },
  ],
  ctaStartOrder: 'Start your order',

  whyTitle: 'Why use a Tesla referral code in Australia?',
  whyBody: [
    'Tesla’s referral programme is the only sanctioned way to get a price benefit on a new Tesla in Australia. Tesla does not run public discount codes or sales — the referral discount is the single legitimate path to a saving on top of your purchase.',
    'The current Australian referral benefit is up to A$350 off a new Model 3 order. The exact perk visible on the referral page can change as Tesla adjusts the local campaign — always check the final amount when you configure your order.',
    'Even when a specific perk isn’t shown for a model (e.g. Model Y), ordering through the referral link still attaches the referral to your account. That keeps the door open if Tesla retroactively activates or extends the benefit during your wait for delivery.',
    'Using a referral code costs you nothing. It doesn’t change the price you pay or the spec of the car — the discount is on top. The owner of the referral code (an existing Australian Tesla driver) receives a matching reward from Tesla.',
  ],

  videosTitle: 'See the cars',

  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'How do I use this Tesla referral code?',
      a: 'Click any "Use referral link" button on this page. It opens tesla.com (Australia) with the referral code already attached to your session. Configure and order your Tesla as normal — the discount is applied automatically.',
    },
    {
      q: 'What do I get for using the referral code in Australia?',
      a: 'Currently up to A$350 off a new Model 3 order. Tesla updates referral campaigns periodically, so the exact amount and eligible models may vary — confirm the perk on tesla.com when you start your configuration.',
    },
    {
      q: 'Does the referral work on Model Y or Model S / X?',
      a: 'A specific perk amount isn’t advertised for those models at the moment. You can still order through the referral link and the referral is attached to your order — if Tesla activates a benefit during your delivery window it will apply.',
    },
    {
      q: 'Does the referral work on inventory cars?',
      a: 'Yes. The referral discount applies to most new Tesla orders, including in-stock inventory vehicles. It does not apply to used Tesla purchases or to leases.',
    },
    {
      q: 'Is this referral code official?',
      a: 'Yes. It’s a valid Tesla referral code issued by Tesla to an existing owner. The referral programme is the only official way Tesla rewards new buyers with a benefit.',
    },
    {
      q: 'When do I need to apply the code?',
      a: 'Before you confirm your order. Tesla cannot add or change a referral code after the order has been submitted, so make sure you reach tesla.com via the link on this page.',
    },
    {
      q: 'Will I pay more if I use a referral code?',
      a: 'No. The price you pay is identical to ordering without a referral code — the benefit is added on top, at no cost to you.',
    },
    {
      q: 'Can I use a referral code at a Tesla store?',
      a: 'Yes. If you order in person at a Tesla store in Australia, give the referral code "hersh671564" to the advisor before they submit the order.',
    },
  ],

  allCountriesTitle: 'All countries',
  allCountriesIntro:
    'Pick your country to use the referral code. The link sends you to Tesla’s site in your locale with the referral already applied.',
  allCountriesFooter:
    'More dedicated country pages coming soon. For now, every country sends you straight to your local tesla.com with the referral attached.',
};

// =============================================================================
// Export
// =============================================================================

export const content: Record<string, PageContent> = {
  uk,
  us,
  ca,
  de,
  nl,
  fr,
  no,
  au,
};
