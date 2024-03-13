import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { paths } from '~/config/paths';
import { MenuCategory } from '~/hooks/api/useMenuCategories';
import { media } from '~/styles/breakpoints';
import { OtherItems } from './HeaderMenu.const';

interface HeaderMenuProps {
  menuCategories: MenuCategory[];
}
export default function HeaderMenu({ menuCategories }: HeaderMenuProps) {
  return (
    <MenuContainer>
      <MenuBox>
        {menuCategories.map(({ category: label, categoryId }, index) => (
          <Link
            key={label + index}
            to={paths.category(categoryId)}
          >
            <MainItem>{label}</MainItem>
          </Link>
        ))}
      </MenuBox>
      <Divider
        length="2rem"
        direction="vertical"
        margin="2rem"
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
  ${media.lg`
    font-size: ${({ theme }) => theme.fontSize.medium};
  `};
`;

const OtherItem = styled.div`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSize.medium};
  ${media.lg`
    font-size: ${({ theme }) => theme.fontSize.small};
  `};
`;
