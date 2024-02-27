import { paths } from '~/config/paths';

export const Categories = [
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
