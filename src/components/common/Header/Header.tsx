import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';
import Search from '~/components/common/Search';
import { paths } from '~/config/paths';
import { ReactComponent as Logo } from '~/shared/logo_nininini.svg';
import MenuModal from '~/view/components/MenuModal.js';

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
      <Link
        to={paths.home()}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Logo width="13rem" />
      </Link>
      <Element2>
        <PiMagnifyingGlass
          size="26"
          onClick={openSearch}
        />
        <Link to="/notice">
          <HiOutlineShoppingBag size="26" />
        </Link>
      </Element2>
      {showSearch && <Search closeModal={closeSearch} />}
    </HeaderEl>
  );
}

const HeaderEl = styled.header<{ isScrolled: boolean }>`
  height: 6rem;
  background-color: ${(props) => (props.isScrolled ? `rgba(255, 255, 255, 0.8)` : `transparent`)};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

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
