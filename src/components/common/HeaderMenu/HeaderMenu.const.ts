import { paths } from '~/config/paths';

export const MainItems = [
  {
    label: 'NEW',
    path: paths.category('new'),
  },
  {
    label: 'BEST',
    path: paths.category('best'),
  },
  {
    label: 'Season Art',
    path: paths.category('season-art'),
  },
  {
    label: 'Sale',
    path: paths.category('sale'),
  },
  {
    label: 'Nail',
    path: paths.category('nail'),
  },
  {
    label: 'Pedi',
    path: paths.category('pedi'),
  },
  {
    label: 'etc',
    path: paths.category('etc'),
  },
] as const;

export const OtherItems = [
  {
    label: 'EVENT',
    path: paths.event(),
  },
  {
    label: 'REVIEW',
    path: paths.review(),
  },
  {
    label: '공지사항',
    path: paths.notice(),
  },
  {
    label: 'FAQ',
    path: paths.faq(),
  },
];
