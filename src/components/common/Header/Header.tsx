import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';
import Search from '~/components/common/Search';
import { paths } from '~/config/paths';
import { ReactComponent as Logo } from '~/shared/logo_nininini.svg';
import { media } from '~/styles/breakpoints';
import theme from '~/styles/theme';
import MenuModal from '~/view/components/MenuModal.js';
import Divider from '../Divider';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSearch = () => {
    setShowSearch(true);
  };
  const closeSearch = () => {
    setShowSearch(false);
  };

  useEffect(() => {
    document.body.style.overflow = showSearch || showModal ? 'hidden' : 'unset';
  }, [showSearch, showModal]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderEl isScrolled={isScrolled}>
      <Element onClick={openModal}>
        <RxHamburgerMenu
          size="24"
          color="black"
        />
      </Element>
      {showModal && (
        <MenuModal
          username={'김니니 님'}
          closeModal={closeModal}
        />
      )}
      <Link to={paths.home()}>
        <StyledLogo />
      </Link>
      <DesktopMenu>
        <HeaderMenu />
      </DesktopMenu>
      <Element2>
        <button>
          <PiMagnifyingGlass
            size="26"
            onClick={openSearch}
          />
        </button>
        <Link to={paths.cart()}>
          <HiOutlineShoppingBag size="26" />
        </Link>
        <TextMenuBox>
          <Link to={paths.myPage()}>
            <TextMenuItem>{'MY PAGE'}</TextMenuItem>
          </Link>
          <Divider
            direction="vertical"
            length="1.5rem"
            style={{ backgroundColor: theme.colors.gray[800] }}
          />
          <TextMenuItem>{'LOGOUT'}</TextMenuItem>
        </TextMenuBox>
      </Element2>
      {showSearch && <Search closeModal={closeSearch} />}
    </HeaderEl>
  );
}

const HEADER_BREAKPOINT = media.md;

const HeaderEl = styled.header<{ isScrolled: boolean }>`
  z-index: 9999;
  height: 6rem;
  background-color: ${(props) => (props.isScrolled ? `rgba(255, 255, 255, 0.8)` : `transparent`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding-left: 3rem;
  ${HEADER_BREAKPOINT`
    padding: 0.8rem;
  `}
`;

const StyledLogo = styled(Logo)`
  width: 10rem;
  ${HEADER_BREAKPOINT`
    width: 15rem;
  `}
`;

const Element = styled.div`
  display: none;
  ${HEADER_BREAKPOINT`
    flex: 1;
    display: flex;
  `}
`;

const Element2 = styled.div`
  flex: 1;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
`;

const TextMenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  ${HEADER_BREAKPOINT`
    display: none;
  `}
`;

const TextMenuItem = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const DesktopMenu = styled.div`
  ${HEADER_BREAKPOINT`
    display: none;
  `}
`;
