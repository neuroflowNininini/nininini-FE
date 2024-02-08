import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '~/components/common/Divider';
import { media } from '~/styles/breakpoints';
import { MainItems, OtherItems } from './HeaderMenu.const';

export default function HeaderMenu() {
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
