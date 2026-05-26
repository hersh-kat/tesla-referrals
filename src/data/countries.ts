export type Perk = {
  miles: number;
  cashOff: number;
  cashCurrency: string;
  cashSymbol: string;
};

export type Region = 'north-america' | 'middle-east' | 'asia-pacific' | 'europe';

export type LanguageVariant = {
  label: string;       // 'English', 'Français', 'Nederlands'
  locale: string;      // 'en-CA', 'fr-CA' — for the html lang attr and hreflang
  teslaLocale: string; // 'en_ca', 'fr_ca' — the path segment on tesla.com. '' for the US.
};

export type Country = {
  code: string;        // ISO-3166 alpha-2 (uppercased)
  slug: string;        // url-safe slug used in our routes
  name: string;        // English name
  nativeName: string;  // Native script name (as Tesla shows it)
  flag: string;        // emoji flag
  region: Region;
  // First entry is the primary language used in the country selector header
  // and as the default href when we don't have a per-country landing page.
  languages: LanguageVariant[];
  // Convenience accessors — set to the primary language for backward-compat.
  locale: string;
  teslaLocale: string;
  referralCode: string;
  perks?: Perk;
  hasLandingPage: boolean;
};

export const REFERRAL_CODE = 'hersh671564';

type CountryInput = Omit<Country, 'referralCode' | 'locale' | 'teslaLocale'> & {
  // primary language is languages[0]
};

const make = (c: CountryInput): Country => ({
  ...c,
  referralCode: REFERRAL_CODE,
  locale: c.languages[0].locale,
  teslaLocale: c.languages[0].teslaLocale,
});

export const countries: Country[] = [
  // ============================================================
  // NORTH AMERICA
  // ============================================================
  make({
    code: 'US',
    slug: 'us',
    name: 'United States',
    nativeName: 'United States',
    flag: '🇺🇸',
    region: 'north-america',
    languages: [
      { label: 'English', locale: 'en-US', teslaLocale: '' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'CA',
    slug: 'ca',
    name: 'Canada',
    nativeName: 'Canada',
    flag: '🇨🇦',
    region: 'north-america',
    languages: [
      { label: 'English', locale: 'en-CA', teslaLocale: 'en_ca' },
      { label: 'Français', locale: 'fr-CA', teslaLocale: 'fr_ca' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'MX',
    slug: 'mx',
    name: 'Mexico',
    nativeName: 'México',
    flag: '🇲🇽',
    region: 'north-america',
    languages: [
      { label: 'Español', locale: 'es-MX', teslaLocale: 'es_mx' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'PR',
    slug: 'pr',
    name: 'Puerto Rico',
    nativeName: 'Puerto Rico',
    flag: '🇵🇷',
    region: 'north-america',
    languages: [
      { label: 'English', locale: 'en-PR', teslaLocale: 'en_pr' },
      { label: 'Español', locale: 'es-PR', teslaLocale: 'es_pr' },
    ],
    hasLandingPage: false,
  }),

  // ============================================================
  // MIDDLE EAST
  // ============================================================
  make({
    code: 'IL',
    slug: 'il',
    name: 'Israel',
    nativeName: 'ישראל',
    flag: '🇮🇱',
    region: 'middle-east',
    languages: [
      { label: 'עִברִית', locale: 'he-IL', teslaLocale: 'he_il' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'AE',
    slug: 'ae',
    name: 'United Arab Emirates',
    nativeName: 'UAE',
    flag: '🇦🇪',
    region: 'middle-east',
    languages: [
      { label: 'English', locale: 'en-AE', teslaLocale: 'en_ae' },
      { label: 'العربية', locale: 'ar-AE', teslaLocale: 'ar_ae' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'JO',
    slug: 'jo',
    name: 'Jordan',
    nativeName: 'Jordan',
    flag: '🇯🇴',
    region: 'middle-east',
    languages: [
      { label: 'English', locale: 'en-JO', teslaLocale: 'en_jo' },
    ],
    hasLandingPage: false,
  }),

  // ============================================================
  // ASIA / PACIFIC
  // ============================================================
  make({
    code: 'HK',
    slug: 'hk',
    name: 'Hong Kong',
    nativeName: 'Hong Kong',
    flag: '🇭🇰',
    region: 'asia-pacific',
    languages: [
      { label: '繁體中文', locale: 'zh-HK', teslaLocale: 'zh_hk' },
      { label: 'English', locale: 'en-HK', teslaLocale: 'en_hk' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'MO',
    slug: 'mo',
    name: 'Macau',
    nativeName: 'Macau',
    flag: '🇲🇴',
    region: 'asia-pacific',
    languages: [
      { label: '繁體中文', locale: 'zh-MO', teslaLocale: 'zh_mo' },
      { label: 'English', locale: 'en-MO', teslaLocale: 'en_mo' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'TW',
    slug: 'tw',
    name: 'Taiwan',
    nativeName: '台灣',
    flag: '🇹🇼',
    region: 'asia-pacific',
    languages: [
      { label: '繁體中文', locale: 'zh-TW', teslaLocale: 'zh_tw' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'JP',
    slug: 'jp',
    name: 'Japan',
    nativeName: '日本',
    flag: '🇯🇵',
    region: 'asia-pacific',
    languages: [
      { label: '日本語', locale: 'ja-JP', teslaLocale: 'ja_jp' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'MY',
    slug: 'my-country',
    name: 'Malaysia',
    nativeName: 'Malaysia',
    flag: '🇲🇾',
    region: 'asia-pacific',
    languages: [
      { label: 'English', locale: 'en-MY', teslaLocale: 'en_my' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'SG',
    slug: 'sg',
    name: 'Singapore',
    nativeName: 'Singapore',
    flag: '🇸🇬',
    region: 'asia-pacific',
    languages: [
      { label: 'English', locale: 'en-SG', teslaLocale: 'en_sg' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'TH',
    slug: 'th',
    name: 'Thailand',
    nativeName: 'Thailand',
    flag: '🇹🇭',
    region: 'asia-pacific',
    languages: [
      { label: 'ภาษาไทย', locale: 'th-TH', teslaLocale: 'th_th' },
      { label: 'English', locale: 'en-TH', teslaLocale: 'en_th' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'KR',
    slug: 'kr',
    name: 'South Korea',
    nativeName: '대한민국',
    flag: '🇰🇷',
    region: 'asia-pacific',
    languages: [
      { label: '한국어', locale: 'ko-KR', teslaLocale: 'ko_kr' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'AU',
    slug: 'au',
    name: 'Australia',
    nativeName: 'Australia',
    flag: '🇦🇺',
    region: 'asia-pacific',
    languages: [
      { label: 'English', locale: 'en-AU', teslaLocale: 'en_au' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'NZ',
    slug: 'nz',
    name: 'New Zealand',
    nativeName: 'New Zealand',
    flag: '🇳🇿',
    region: 'asia-pacific',
    languages: [
      { label: 'English', locale: 'en-NZ', teslaLocale: 'en_nz' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'PH',
    slug: 'ph',
    name: 'Philippines',
    nativeName: 'Philippines',
    flag: '🇵🇭',
    region: 'asia-pacific',
    languages: [
      { label: 'English', locale: 'en-PH', teslaLocale: 'en_ph' },
    ],
    hasLandingPage: false,
  }),

  // ============================================================
  // EUROPE
  // ============================================================
  make({
    code: 'AT',
    slug: 'at',
    name: 'Austria',
    nativeName: 'Österreich',
    flag: '🇦🇹',
    region: 'europe',
    languages: [
      { label: 'Deutsch', locale: 'de-AT', teslaLocale: 'de_at' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'BE',
    slug: 'be',
    name: 'Belgium',
    nativeName: 'Belgium',
    flag: '🇧🇪',
    region: 'europe',
    languages: [
      { label: 'Nederlands', locale: 'nl-BE', teslaLocale: 'nl_be' },
      { label: 'Français', locale: 'fr-BE', teslaLocale: 'fr_be' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'HR',
    slug: 'hr',
    name: 'Croatia',
    nativeName: 'Hrvatska',
    flag: '🇭🇷',
    region: 'europe',
    languages: [
      { label: 'Hrvatski', locale: 'hr-HR', teslaLocale: 'hr_hr' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'CZ',
    slug: 'cz',
    name: 'Czechia',
    nativeName: 'Česko',
    flag: '🇨🇿',
    region: 'europe',
    languages: [
      { label: 'Čeština', locale: 'cs-CZ', teslaLocale: 'cs_cz' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'DK',
    slug: 'dk',
    name: 'Denmark',
    nativeName: 'Danmark',
    flag: '🇩🇰',
    region: 'europe',
    languages: [
      { label: 'Dansk', locale: 'da-DK', teslaLocale: 'da_dk' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'FI',
    slug: 'fi',
    name: 'Finland',
    nativeName: 'Suomi',
    flag: '🇫🇮',
    region: 'europe',
    languages: [
      { label: 'Suomi', locale: 'fi-FI', teslaLocale: 'fi_fi' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'FR',
    slug: 'fr',
    name: 'France',
    nativeName: 'France',
    flag: '🇫🇷',
    region: 'europe',
    languages: [
      { label: 'Français', locale: 'fr-FR', teslaLocale: 'fr_fr' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'DE',
    slug: 'de',
    name: 'Germany',
    nativeName: 'Deutschland',
    flag: '🇩🇪',
    region: 'europe',
    languages: [
      { label: 'Deutsch', locale: 'de-DE', teslaLocale: 'de_de' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'GR',
    slug: 'gr',
    name: 'Greece',
    nativeName: 'Ελλάδα',
    flag: '🇬🇷',
    region: 'europe',
    languages: [
      { label: 'Ελληνικά', locale: 'el-GR', teslaLocale: 'el_gr' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'HU',
    slug: 'hu',
    name: 'Hungary',
    nativeName: 'Magyarország',
    flag: '🇭🇺',
    region: 'europe',
    languages: [
      { label: 'Magyar', locale: 'hu-HU', teslaLocale: 'hu_hu' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'IS',
    slug: 'is',
    name: 'Iceland',
    nativeName: 'Ísland',
    flag: '🇮🇸',
    region: 'europe',
    languages: [
      { label: 'Íslenska', locale: 'is-IS', teslaLocale: 'is_is' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'IE',
    slug: 'ie',
    name: 'Ireland',
    nativeName: 'Ireland',
    flag: '🇮🇪',
    region: 'europe',
    languages: [
      { label: 'English', locale: 'en-IE', teslaLocale: 'en_ie' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'IT',
    slug: 'it',
    name: 'Italy',
    nativeName: 'Italia',
    flag: '🇮🇹',
    region: 'europe',
    languages: [
      { label: 'Italiano', locale: 'it-IT', teslaLocale: 'it_it' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'LU',
    slug: 'lu',
    name: 'Luxembourg',
    nativeName: 'Luxembourg',
    flag: '🇱🇺',
    region: 'europe',
    languages: [
      { label: 'Français', locale: 'fr-LU', teslaLocale: 'fr_lu' },
      { label: 'Deutsch', locale: 'de-LU', teslaLocale: 'de_lu' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'NL',
    slug: 'nl',
    name: 'Netherlands',
    nativeName: 'Nederland',
    flag: '🇳🇱',
    region: 'europe',
    languages: [
      { label: 'Nederlands', locale: 'nl-NL', teslaLocale: 'nl_nl' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'NO',
    slug: 'no',
    name: 'Norway',
    nativeName: 'Norge',
    flag: '🇳🇴',
    region: 'europe',
    languages: [
      { label: 'Norsk', locale: 'no-NO', teslaLocale: 'no_no' },
    ],
    hasLandingPage: true,
  }),
  make({
    code: 'PL',
    slug: 'pl',
    name: 'Poland',
    nativeName: 'Polska',
    flag: '🇵🇱',
    region: 'europe',
    languages: [
      { label: 'Polski', locale: 'pl-PL', teslaLocale: 'pl_pl' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'PT',
    slug: 'pt',
    name: 'Portugal',
    nativeName: 'Portugal',
    flag: '🇵🇹',
    region: 'europe',
    languages: [
      { label: 'Português', locale: 'pt-PT', teslaLocale: 'pt_pt' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'RO',
    slug: 'ro',
    name: 'Romania',
    nativeName: 'România',
    flag: '🇷🇴',
    region: 'europe',
    languages: [
      { label: 'Română', locale: 'ro-RO', teslaLocale: 'ro_ro' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'SI',
    slug: 'si',
    name: 'Slovenia',
    nativeName: 'Slovenija',
    flag: '🇸🇮',
    region: 'europe',
    languages: [
      { label: 'Slovenščina', locale: 'sl-SI', teslaLocale: 'sl_si' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'ES',
    slug: 'es',
    name: 'Spain',
    nativeName: 'España',
    flag: '🇪🇸',
    region: 'europe',
    languages: [
      { label: 'Español', locale: 'es-ES', teslaLocale: 'es_es' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'SE',
    slug: 'se',
    name: 'Sweden',
    nativeName: 'Sverige',
    flag: '🇸🇪',
    region: 'europe',
    languages: [
      { label: 'Svenska', locale: 'sv-SE', teslaLocale: 'sv_se' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'CH',
    slug: 'ch',
    name: 'Switzerland',
    nativeName: 'Switzerland',
    flag: '🇨🇭',
    region: 'europe',
    languages: [
      { label: 'Français', locale: 'fr-CH', teslaLocale: 'fr_ch' },
      { label: 'Deutsch', locale: 'de-CH', teslaLocale: 'de_ch' },
      { label: 'Italiano', locale: 'it-CH', teslaLocale: 'it_ch' },
    ],
    hasLandingPage: false,
  }),
  make({
    code: 'TR',
    slug: 'tr',
    name: 'Türkiye',
    nativeName: 'Türkiye',
    flag: '🇹🇷',
    region: 'europe',
    languages: [
      { label: 'Türkçe', locale: 'tr-TR', teslaLocale: 'tr_tr' },
    ],
    hasLandingPage: false,
  }),
  {
    code: 'GB',
    slug: 'uk',
    name: 'United Kingdom',
    nativeName: 'United Kingdom',
    flag: '🇬🇧',
    region: 'europe',
    languages: [
      { label: 'English', locale: 'en-GB', teslaLocale: 'en_gb' },
    ],
    locale: 'en-GB',
    teslaLocale: 'en_gb',
    referralCode: REFERRAL_CODE,
    perks: {
      miles: 650,
      cashOff: 500,
      cashCurrency: 'GBP',
      cashSymbol: '£',
    },
    hasLandingPage: true,
  },
];

// =========================================================================
// URL helpers
// =========================================================================

function teslaReferralPath(teslaLocale: string): string {
  // The US uses tesla.com/referral/CODE (no locale segment).
  return teslaLocale ? `/${teslaLocale}/referral` : '/referral';
}

/**
 * Tesla referral URL for the primary language of a country.
 */
export function getReferralUrl(country: Country): string {
  return `https://www.tesla.com${teslaReferralPath(country.teslaLocale)}/${country.referralCode}`;
}

/**
 * Tesla referral URL for a specific language variant of a country.
 */
export function getReferralUrlForLanguage(
  country: Country,
  language: LanguageVariant,
): string {
  return `https://www.tesla.com${teslaReferralPath(language.teslaLocale)}/${country.referralCode}`;
}

const orderSlug = {
  m3: 'model3',
  my: 'modely',
  ms: 'models',
  mx: 'modelx',
} as const;

export function getOrderUrl(
  country: Country,
  model: 'm3' | 'my' | 'ms' | 'mx',
): string {
  const path = country.teslaLocale
    ? `/${country.teslaLocale}/${orderSlug[model]}/design`
    : `/${orderSlug[model]}/design`;
  return `https://www.tesla.com${path}?referral=${country.referralCode}&redirect=no`;
}

export function getInventoryUrl(
  country: Country,
  model: 'm3' | 'my' | 'ms' | 'mx',
): string {
  const path = country.teslaLocale
    ? `/${country.teslaLocale}/inventory/new/${model}`
    : `/inventory/new/${model}`;
  return `https://www.tesla.com${path}?referral=${country.referralCode}&redirect=no`;
}

/**
 * Where a country card / dropdown entry should link to.
 * - If we have a local landing page (e.g. UK), link there.
 * - Otherwise, link straight to Tesla with the referral applied.
 */
export function getCountryHref(country: Country): string {
  if (country.hasLandingPage) {
    return country.slug === 'uk' ? '/' : `/${country.slug}/`;
  }
  return getReferralUrl(country);
}

/**
 * Where a specific language variant of a country should link to.
 * Localised landing pages don't exist yet, so this always hits Tesla.
 */
export function getLanguageHref(
  country: Country,
  language: LanguageVariant,
): string {
  return getReferralUrlForLanguage(country, language);
}

// =========================================================================
// Region helpers
// =========================================================================

export const regions: Array<{ key: Region; label: string }> = [
  { key: 'europe', label: 'Europe' },
  { key: 'north-america', label: 'North America' },
  { key: 'asia-pacific', label: 'Asia/Pacific' },
  { key: 'middle-east', label: 'Middle East' },
];

export function countriesByRegion(): Record<Region, Country[]> {
  return countries.reduce(
    (acc, c) => {
      acc[c.region].push(c);
      return acc;
    },
    {
      europe: [] as Country[],
      'north-america': [] as Country[],
      'asia-pacific': [] as Country[],
      'middle-east': [] as Country[],
    },
  );
}
