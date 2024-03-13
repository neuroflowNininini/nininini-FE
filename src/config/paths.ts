import { SignUpStep } from '~/types/signUp';

export const paths = {
  home: () => `/`,
  category: (categoryId: number) => `/category/${categoryId}`,
  notice: () => `/notice`,
  event: () => `/event`,
  review: () => `/review`,
  faq: () => `/faq`,
  myPage: () => `/mypage`,
  cart: () => `/cart`,
  signUp: (step?: SignUpStep) => `/sign-up${step ? `?step=${step}` : ''}`,
  logIn: () => `/login`,
  oAuthRedirect: () => `/oauth/:platform`,
};
