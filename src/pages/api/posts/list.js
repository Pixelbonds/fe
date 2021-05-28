export const data = [
  {
    id: '01',
    thumb:
      'https://assets.website-files.com/5d5d5904f8a21bfe5ff69367/5da4cb5454976755fcac7930_seo-doodles.jpg',
    title: 'Open Doodles',
    url: 'https://opendoodles.com/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '02',
    thumb:
      'https://assets.website-files.com/5bff8886c3964a992e90d465/5c050a75fc73fba30bf816f1_seo-rectangle.jpg',
    title: 'Humaaans',
    url: 'https://www.humaaans.com/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '03',
    thumb:
      'https://assets.website-files.com/5e51b3b0337309d672efd94c/5e51ce05258ffe802886ef21_cover-1.png',
    title: 'Open Peeps',
    url: 'https://www.openpeeps.com/#',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '04',
    thumb: 'https://icons8.com/vue-static/ouch/seo/opengraph.png',
    title: 'Ouch',
    url: 'https://icons8.com/illustrations',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '05',
    thumb: 'https://blush.design/og-image.png',
    title: 'Blush',
    url: 'https://blush.design/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '06',
    thumb:
      'https://assets-global.website-files.com/5bcb46130508ef456a7b2930/5f4c375c17865e08a63421ac_drawkit-og.png',
    title: 'DrawKit',
    url: 'https://www.drawkit.io/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '07',
    thumb: 'https://via.placeholder.com/400x300',
    title: 'Illustrations by Luka Szadam',
    url: 'https://lukaszadam.com/illustrations',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '08',
    thumb: 'https://absurd.design/assets/img/social.jpg',
    title: 'absurd.design',
    url: 'https://absurd.design/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '09',
    thumb: 'http://fresh-folk.com/assets/images/card.jpg?v=a2c8e495',
    title: 'Fresh Folk',
    url: 'https://fresh-folk.com/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '10',
    thumb: 'https://via.placeholder.com/400x300',
    title: 'Story Set',
    url: 'https://storyset.com/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '11',
    thumb: 'https://iconscout.com/og/paper-illustrations.png',
    title: 'Paper Illustrations',
    url: 'https://iconscout.com/paper-illustrations',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '12',
    thumb: 'https://usesmash.com/images/Open-Graph.png',
    title: 'Use Smash',
    url: 'https://usesmash.com/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
  {
    id: '13',
    thumb: 'https://stubborn.fun/icon/Open-Graph.png',
    title: 'Stubborn',
    url: 'https://stubborn.fun/',
    category: 'illustrations',
    views: '125K',
    favorites: '1.1K',
    tags: ['category', 'category'],
    last_updated: '18/10/2020',
  },
];

export default function List(request, response) {
  return response.status(200).json(data);
}
