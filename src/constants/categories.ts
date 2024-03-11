import { paths } from '~/config/paths';
import { Category } from '~/types/category';

/*NOTE - 사라질 파일 - 서버 데이터로 관리, 임시 더미데이터 */
export const Categories: Record<Category, { label: string; path: string }> = {
  new: {
    label: 'NEW',
    path: paths.category(1),
  },
  best: {
    label: 'BEST',
    path: paths.category(2),
  },
  seasonArt: {
    label: 'Season Art',
    path: paths.category(3),
  },
  sale: {
    label: 'Sale',
    path: paths.category(4),
  },
  nail: {
    label: 'Nail',
    path: paths.category(5),
  },
  pedi: {
    label: 'Pedi',
    path: paths.category(6),
  },
  etc: {
    label: 'etc',
    path: paths.category(7),
  },
};
