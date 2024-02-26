import { Category } from '~/types/category';

export const paths = {
  home: () => `/`,
  category: (category?: Category) => `/category/${category ?? ''}`,
  notice: () => `/notice`,
  event: () => `/event`,
  review: () => `/review`,
  faq: () => `/faq`,
  myPage: () => `/mypage`,
  cart: () => `/cart`,
  signUp: () => `/sign-up`,
  logIn: () => `/login`,
  oAuthRedirect: () => `/oauth/:platform`,
};
