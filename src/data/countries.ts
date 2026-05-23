export type Perk = {
  miles: number;
  cashOff: number;
  cashCurrency: string;
  cashSymbol: string;
};

export type Country = {
  code: string;
  slug: string;
  name: string;
  flag: string;
  locale: string;
  teslaLocale: string;
  referralCode: string;
  perks: Perk;
  region: 'europe' | 'north-america' | 'asia-pacific' | 'middle-east';
};

export const REFERRAL_CODE = 'hersh671564';

export const countries: Country[] = [
  {
    code: 'GB',
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    locale: 'en-GB',
    teslaLocale: 'en_gb',
    referralCode: REFERRAL_CODE,
    perks: {
      miles: 650,
      cashOff: 500,
      cashCurrency: 'GBP',
      cashSymbol: '£',
    },
    region: 'europe',
  },
];

export function getReferralUrl(country: Country): string {
  return `https://www.tesla.com/${country.teslaLocale}/referral/${country.referralCode}`;
}

const orderSlug = {
  m3: 'model3',
  my: 'modely',
  ms: 'models',
  mx: 'modelx',
} as const;

export function getOrderUrl(country: Country, model: 'm3' | 'my' | 'ms' | 'mx'): string {
  return `https://www.tesla.com/${country.teslaLocale}/${orderSlug[model]}/design?referral=${country.referralCode}&redirect=no`;
}

export function getInventoryUrl(country: Country, model: 'm3' | 'my' | 'ms' | 'mx'): string {
  return `https://www.tesla.com/${country.teslaLocale}/inventory/new/${model}?referral=${country.referralCode}&redirect=no`;
}
