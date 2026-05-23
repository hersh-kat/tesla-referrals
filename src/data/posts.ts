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
    title: 'How the Tesla Referral Programme Works in the UK (2026)',
    description:
      'A plain-English guide to how Tesla’s UK referral programme works in 2026: who qualifies, what you get, how the code is applied, and the small print most people miss.',
    date: '2026-05-23',
    readTime: '6 min read',
  },
  {
    slug: '650-free-supercharging-miles-value',
    title: 'What can you do with 650 free Supercharging miles?',
    description:
      '650 free Supercharging miles is the headline Tesla referral perk in the UK. Here is what those miles are actually worth in pounds, in road trips, and in real driving.',
    date: '2026-05-23',
    readTime: '5 min read',
  },
  {
    slug: 'tesla-referral-code-at-tesla-store',
    title: 'How to use a Tesla referral code at a Tesla store',
    description:
      'You can order a new Tesla in person at a UK Tesla store and still claim the referral benefit. Here is exactly how to do it, and what to say to the advisor.',
    date: '2026-05-23',
    readTime: '4 min read',
  },
];
