export type ModelKey = 'm3' | 'my' | 'ms' | 'mx';

export type TeslaModel = {
  key: ModelKey;
  name: string;
  perkType: 'miles' | 'cash';
  tagline: string;
  image: string;
};

export const models: TeslaModel[] = [
  {
    key: 'my',
    name: 'Model Y',
    perkType: 'miles',
    tagline:
      'The all-electric mid-size SUV. Class-leading range and the most popular Tesla in the UK.',
    image: '/models/model_y_nv36.avif',
  },
  {
    key: 'm3',
    name: 'Model 3',
    perkType: 'miles',
    tagline:
      'The refreshed Model 3 with more range, a quieter cabin and a sharper interior.',
    image: '/models/modelnv35.avif',
  },
  {
    key: 'ms',
    name: 'Model S',
    perkType: 'cash',
    tagline:
      'The flagship saloon. Plaid performance, 400+ mile range and ludicrous tech.',
    image: '/models/model_s.avif',
  },
  {
    key: 'mx',
    name: 'Model X',
    perkType: 'cash',
    tagline:
      'The premium SUV with falcon-wing doors and seating for up to seven.',
    image: '/models/model_x.avif',
  },
];
