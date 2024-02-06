import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';
import { paths } from '~/config/paths';
import { ReactComponent as Logo } from '~/shared/logo_nininini.svg';

interface HeaderProps {
  openModal: () => void;
  openSearch: () => void;
}

export default function Header({ openModal, openSearch }: HeaderProps) {
  return (
    <HeaderEl>
      <Element onClick={openModal}>
        <RxHamburgerMenu
          size="24"
          color="black"
        />
      </Element>
      <LogoBox>
        <Link
          to={paths.home()}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Logo width="25vw" />
        </Link>
      </LogoBox>
      <Element2>
        <PiMagnifyingGlass
          size="26"
          onClick={openSearch}
        />
        <Link to="/notice">
          <HiOutlineShoppingBag size="26" />
        </Link>
      </Element2>
    </HeaderEl>
  );
}

const HeaderEl = styled.header`
  text-align: center;
  z-index: 100;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div``;

const Element = styled.div`
  flex: 1;
  display: flex;
`;

const Element2 = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
`;
