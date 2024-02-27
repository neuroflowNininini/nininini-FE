import { paths } from '~/config/paths';
import { Categories } from '~/constants/categories';

export const MainItems = Object.values(Categories);
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
