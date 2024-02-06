import { category } from '~/types/category';

export const paths = {
  home: () => `/`,
  category: (category: category) => `/category/${category}`,
  notice: () => `/notice`,
  event: () => `/event`,
  review: () => `/review`,
  faq: () => `/faq`,
};