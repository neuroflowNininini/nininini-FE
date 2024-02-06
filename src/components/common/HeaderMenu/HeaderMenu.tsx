import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { paths } from '~/config/paths';

export default function HeaderMenu() {
  const MainItems = [
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

  const OtherItems = [
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
  return (
    <MenuContainer>
      <MenuBox>
        {MainItems.map(({ label, path }, index) => (
          <Link
            key={label + index}
            to={path}
          >
            <MainItem>{label}</MainItem>
          </Link>
        ))}
      </MenuBox>
      <Divider
        length="2rem"
        direction="vertical"
      />
      <MenuBox>
        {OtherItems.map(({ label, path }, index) => (
          <Link
            key={label + index}
            to={path}
          >
            <OtherItem>{label}</OtherItem>
          </Link>
        ))}
      </MenuBox>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const MainItem = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const OtherItem = styled.div`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSize.largemedium};
`;
