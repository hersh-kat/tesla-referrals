export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: 'how-tesla-referral-programme-works-uk',
    title: 'How the Tesla referral programme works',
    description:
      'A plain-English guide to Tesla’s UK referral programme in 2026: who qualifies, what you get, how the code applies, and the small print.',
    date: '2026-05-23',
    readTime: '6 min read',
  },
  {
    slug: '650-free-supercharging-miles-value',
    title: 'What 650 free Supercharging miles are worth',
    description:
      '650 free Supercharging miles is the UK Tesla referral perk. Here’s what they’re really worth in pounds, road trips, and real driving.',
    date: '2026-05-23',
    readTime: '5 min read',
  },
  {
    slug: 'tesla-referral-code-at-tesla-store',
    title: 'Using a Tesla referral code at a store',
    description:
      'You can order a new Tesla in person at a UK Tesla store and still claim the referral benefit. Here is exactly how to do it, and what to say to the advisor.',
    date: '2026-05-23',
    readTime: '4 min read',
  },
];
