import { paths } from '~/config/paths';
import { Category } from '~/types/category';

export const Categories: Record<Category, { label: string; path: string }> = {
  new: {
    label: 'NEW',
    path: paths.category('new'),
  },
  best: {
    label: 'BEST',
    path: paths.category('best'),
  },
  seasonArt: {
    label: 'Season Art',
    path: paths.category('seasonArt'),
  },
  sale: {
    label: 'Sale',
    path: paths.category('sale'),
  },
  nail: {
    label: 'Nail',
    path: paths.category('nail'),
  },
  pedi: {
    label: 'Pedi',
    path: paths.category('pedi'),
  },
  etc: {
    label: 'etc',
    path: paths.category('etc'),
  },
};
